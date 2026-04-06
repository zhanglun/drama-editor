# 技术设计：角色形象画布编辑器

## Context

### 背景与现状

项目是一个剧本编辑器应用，使用以下技术栈：
- **前端**: React 18 + TypeScript + Vite + Tailwind CSS + Zustand + Radix UI + TipTap
- **后端**: Go + Gin + GORM
- **数据库**: Supabase (PostgreSQL + JSONB)
- **架构**: Feature-Sliced Design (FSD)

现有角色管理能力：
- `characters` 表存储基础角色信息 (id, script_id, name, description, avatar_url)
- `CharacterPanel` 组件提供角色列表的增删改
- 角色数据同时存在于 `ScriptContent.characters` 数组（字符串数组）和 `characters` 表中

### 约束条件

1. **兼容性**: 必须与现有 TipTap 编辑器的内容结构兼容
2. **渐进式**: 不使用形象系统的剧本应正常工作
3. **性能**: 画布需要支持数十个节点和连线的流畅交互
4. **持久化**: 画布布局状态需要跨会话保存

## Goals / Non-Goals

**Goals:**

1. 实现角色形象的层级管理，支持多级衍生关系
2. 实现形象与场景的关联，支持多对多关系
3. 实现基于 React Flow 的无限画布编辑器
4. 画布状态（节点位置、缩放级别）可持久化
5. 与现有角色列表页面共存，提供视图切换

**Non-Goals:**

1. 不实现实时协作编辑（多用户同时编辑画布）
2. 不实现形象的版本控制（形象的历史版本）
3. 不实现自动布局算法（力导向图等）
4. 不修改 TipTap 编辑器的角色引用机制

## Decisions

### 1. 数据模型设计

**决策**: 使用邻接表 (Adjacency List) + PostgreSQL 递归 CTE 存储形象的层级关系

**理由**:
- 数据规模小（每剧本 < 50 角色，形象层级深度 2-5 层），递归 CTE 性能完全够用
- 存储空间 O(n)，无冗余数据，天然保持一致性
- 插入/删除只需操作单行记录，维护成本极低
- 代码复杂度低：Service 层不需要维护闭包表逻辑
- PostgreSQL 原生支持递归 CTE，查询层级数据自然且高效

**备选方案**:
- ❌ 闭包表 (Closure Table): 空间 O(n²) 冗余，插入/删除需维护多行记录，数据一致性风险高。对本场景（小规模数据）属于过度设计
- ❌ 路径枚举 (Path Enumeration): 路径字符串解析复杂
- ❌ 嵌套集 (Nested Set): 插入/删除成本高

**关于多父节点**: 初期不支持多父节点。剧本角色形象通常是线性演变（青年→中年→老年），单父节点即可满足。后续如需支持，可通过新增 `variant_relations` 关系表扩展。

**Schema**:

```sql
-- 扩展 characters 表
ALTER TABLE characters ADD COLUMN traits JSONB DEFAULT '{}';
ALTER TABLE characters ADD COLUMN color VARCHAR(7) DEFAULT '#6366f1';
ALTER TABLE characters ADD COLUMN canvas_position JSONB DEFAULT '{"x": 0, "y": 0}';

-- 形象表（邻接表：parent_variant_id 指向直接父形象）
CREATE TABLE character_variants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
    parent_variant_id UUID REFERENCES character_variants(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    image_url TEXT,
    traits JSONB DEFAULT '{}',
    color VARCHAR(7),
    canvas_position JSONB DEFAULT '{"x": 0, "y": 0}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 形象-场景关联（多对多）
CREATE TABLE variant_scenes (
    variant_id UUID NOT NULL REFERENCES character_variants(id) ON DELETE CASCADE,
    scene_id VARCHAR(255) NOT NULL,  -- scene id 来自 ScriptContent
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    PRIMARY KEY (variant_id, scene_id)
);

-- 索引
CREATE INDEX idx_variants_character ON character_variants(character_id);
CREATE INDEX idx_variants_parent ON character_variants(parent_variant_id);
CREATE INDEX idx_variant_scenes_scene ON variant_scenes(scene_id);
```

**查询示例（递归 CTE）**:

```sql
-- 查询某个角色下所有形象的层级树
WITH RECURSIVE variant_tree AS (
    SELECT id, name, parent_variant_id, character_id, 0 AS depth
    FROM character_variants
    WHERE character_id = :char_id AND parent_variant_id IS NULL
  UNION ALL
    SELECT v.id, v.name, v.parent_variant_id, v.character_id, vt.depth + 1
    FROM character_variants v
    JOIN variant_tree vt ON v.parent_variant_id = vt.id
)
SELECT * FROM variant_tree ORDER BY depth;

-- 查询某个形象的所有祖先链
WITH RECURSIVE ancestor_chain AS (
    SELECT id, name, parent_variant_id, character_id, 0 AS depth
    FROM character_variants
    WHERE id = :variant_id
  UNION ALL
    SELECT v.id, v.name, v.parent_variant_id, v.character_id, ac.depth + 1
    FROM character_variants v
    JOIN ancestor_chain ac ON v.id = ac.parent_variant_id
)
SELECT * FROM ancestor_chain ORDER BY depth;
```

### 2. 前端架构

**决策**: 创建新的 feature `character-canvas`，复用并扩展现有 `character` entity

**目录结构**:

```
apps/web/src/
├── features/
│   └── character-canvas/
│       ├── model/
│       │   ├── store.ts           # 画布状态 (nodes, edges, viewport)
│       │   ├── useCanvasSync.ts   # 画布状态同步 hook
│       │   └── useNodeOperations.ts # 节点操作 hook
│       ├── ui/
│       │   ├── Canvas.tsx         # React Flow 画布组件
│       │   ├── CharacterNode.tsx  # 角色节点组件
│       │   ├── VariantNode.tsx    # 形象节点组件
│       │   ├── NodeToolbar.tsx    # 节点工具栏
│       │   └── CanvasControls.tsx # 画布控制组件
│       ├── api/
│       │   └── variants.ts        # 形象 API 调用
│       └── index.ts
├── entities/
│   └── character/
│       ├── model/
│       │   ├── store.ts           # 扩展: 添加 variants 状态
│       │   └── types.ts           # 扩展: Variant 类型
│       └── ui/
│           └── CharacterList.tsx  # 修改: 支持切换到画布视图
└── pages/
    └── CharacterCanvasPage.tsx    # 新增: 画布页面
```

**理由**:
- 遵循 FSD 架构，feature 独立于 entity
- 画布逻辑与角色逻辑分离，职责清晰
- 便于后续扩展（如添加其他类型的画布）

### 3. React Flow 集成

**决策**: 使用 `@xyflow/react` (v12) 作为画布库

**理由**:
- 最成熟的 React 流程图库，社区活跃
- 内置拖拽、缩放、连线、迷你地图等功能
- 支持自定义节点和边
- TypeScript 支持良好

**节点类型**:

```typescript
// 角色节点（根节点）
type CharacterNodeData = {
  type: 'character'
  characterId: string
  name: string
  avatarUrl?: string
  color: string
  variantCount: number
}

// 形象节点
type VariantNodeData = {
  type: 'variant'
  variantId: string
  characterId: string
  name: string
  imageUrl?: string
  color: string
  sceneCount: number
  parentVariantId: string | null
}

// 边类型
type CustomEdge = {
  id: string
  source: string
  target: string
  type: 'hierarchy' | 'scene-link'
  animated?: boolean
}
```

### 4. 状态管理

**决策**: 使用 Zustand 管理画布状态，与服务器状态分离

**理由**:
- 项目已使用 Zustand，保持一致
- React Flow 的状态与 Zustand 配合良好
- 便于实现撤销/重做功能

**Store 设计**:

```typescript
interface CanvasStore {
  // React Flow 状态
  nodes: Node[]
  edges: Edge[]
  viewport: Viewport
  
  // 操作
  addNode: (node: Node) => void
  updateNode: (id: string, data: Partial<Node>) => void
  removeNode: (id: string) => void
  addEdge: (edge: Edge) => void
  removeEdge: (id: string) => void
  
  // 同步
  syncToServer: () => Promise<void>
  loadFromServer: (scriptId: string) => Promise<void>
}
```

### 5. API 设计

**决策**: RESTful API，遵循现有后端模式

**端点**:

```
GET    /api/scripts/:id/characters           # 获取角色列表（含形象）
POST   /api/scripts/:id/characters           # 创建角色
GET    /api/scripts/:id/characters/:cid      # 获取角色详情
PUT    /api/scripts/:id/characters/:cid      # 更新角色
DELETE /api/scripts/:id/characters/:cid      # 删除角色

POST   /api/scripts/:id/variants             # 创建形象
GET    /api/scripts/:id/variants/:vid        # 获取形象详情
PUT    /api/scripts/:id/variants/:vid        # 更新形象
DELETE /api/scripts/:id/variants/:vid        # 删除形象
POST   /api/scripts/:id/variants/:vid/links  # 添加形象-场景关联
DELETE /api/scripts/:id/variants/:vid/links/:sceneId  # 删除关联

GET    /api/scripts/:id/canvas               # 获取画布状态
PUT    /api/scripts/:id/canvas               # 保存画布状态
```

## Risks / Trade-offs

### 风险 1: 大量节点时性能下降

**风险**: 当剧本包含大量角色和形象（>50 节点）时，画布可能卡顿

**缓解**:
- 使用 React Flow 的虚拟化渲染
- 节点内容保持简洁，避免复杂 DOM
- 提供分组/折叠功能
- 性能测试设定阈值（如 100 节点 < 16ms 渲染）

### 风险 2: 与 TipTap 编辑器的角色引用不同步

**风险**: 用户在画布中删除角色，但 TipTap 中仍有该角色的对话

**缓解**:
- 删除角色前检查引用
- 提供批量替换角色名的功能
- 考虑未来实现双向同步

### 风险 3: 级联删除影响

**风险**: 删除中间层级形象时，ON DELETE CASCADE 会导致所有子形象也被删除

**缓解**:
- 删除前检查是否有子形象，有则提示用户确认
- 提供两种选项：级联删除所有子形象 / 仅删除当前形象并将子形象的 parent_variant_id 设为 NULL
- Service 层使用事务确保原子性

### Trade-off 1: 不实现自动布局

**权衡**: 手动布局 vs 自动布局

**选择**: 初期仅支持手动布局

**理由**:
- 剧本角色数量通常不大（< 50）
- 用户对位置有明确意图
- 自动布局算法复杂，效果难以预测
- 后续可根据反馈添加

### Trade-off 2: 场景 ID 使用字符串

**权衡**: 场景独立建表 vs 引用 ScriptContent 中的场景

**选择**: 使用 ScriptContent 中的场景 ID（字符串）

**理由**:
- 场景数据在 TipTap 内容中，不单独存储
- 避免数据冗余和同步问题
- 如果未来场景独立建表，可迁移

## Migration Plan

### Phase 1: 数据库迁移 (v2.0.0)

1. 执行数据库迁移脚本 `002_character_variants.sql`
2. 现有 characters 表数据保持不变
3. 新字段使用默认值填充

### Phase 2: 后端 API 上线

1. 部署新的 API 端点
2. 保持现有 `/api/characters` 端点兼容
3. 新端点 `/api/variants` 上线

### Phase 3: 前端发布

1. 发布包含画布编辑器的前端版本
2. 默认显示传统列表视图
3. 用户可切换到画布视图
4. 监控性能和用户反馈

### Rollback Plan

1. **数据库回滚**: 执行 down migration 删除新表和字段
2. **后端回滚**: 回退到上一个 API 版本
3. **前端回滚**: 回退到列表视图版本
4. **数据保留**: 回滚时保留用户在画布中创建的角色和形象数据（在 characters 表中）

## Open Questions

1. **形象图片存储**: 使用 Supabase Storage 还是外部 URL？
   - 建议: 初期支持外部 URL，后续添加 Supabase Storage 上传

2. **画布导出**: 是否需要导出为图片或 PDF？
   - 建议: 初期不实现，根据用户反馈决定

3. **撤销/重做**: 需要支持多少步？
   - 建议: 50 步（React Flow 默认）

4. **移动端支持**: 画布编辑器是否需要响应式设计？
   - 建议: 移动端仅显示列表视图，画布仅桌面端

5. **协作编辑**: 是否需要实时协作？
   - 建议: 初期不实现，作为未来重大功能规划
