## Context

**项目背景**：drama-editor 是一个基于 Web 的剧本创作和编辑工具，专为短剧创作者设计。项目已经搭建了基础架构：
- **前端**：React 18 + Vite + Tailwind CSS + TipTap（富文本编辑器）+ Zustand（状态管理）+ Radix UI
- **后端**：Go + Gin 框架
- **数据库**：Supabase (PostgreSQL + JSONB)
- **已有依赖**：`diff` 库已安装，可用于 diff 功能实现

**当前状态**：项目框架已搭建，MVP 功能待实现。

**约束条件**：
- MVP 阶段专注于核心功能：在线编辑、导出、diff 查看
- 不实现多人实时协作
- 不实现角色档案和关系图谱
- 不实现故事板和时间线可视化

**利益相关者**：专业编剧、业余爱好者、学生、短视频创作者

## Goals / Non-Goals

**Goals:**
- 实现基于 TipTap 的剧本编辑器，支持场景、角色、对白的结构化编辑
- 实现剧本导出功能，支持 PDF、DOCX、TXT 格式
- 实现版本历史和 diff 查看功能，使用已安装的 `diff` 库
- 实现剧本管理功能（创建、保存、加载、删除）
- 提供直观的用户界面，支持响应式设计
- 利用现有的 Supabase 数据库存储剧本数据

**Non-Goals:**
- 多人实时协作功能（后续版本考虑）
- 角色档案和关系图谱（后续版本考虑）
- 故事板和时间线可视化（后续版本考虑）
- Final Draft 格式导入/导出（后续版本考虑）
- 移动端原生应用（MVP 仅 Web）
- 离线编辑支持（MVP 需要网络连接）

## Decisions

### 1. 剧本数据模型设计

**决策**：使用 JSON Schema 定义剧本结构，存储在 Supabase 的 JSONB 字段中。

**剧本数据结构**：
```typescript
interface Script {
  id: string;
  title: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  content: ScriptContent;
  versions: ScriptVersion[];
}

interface ScriptContent {
  scenes: Scene[];
  characters: string[]; // 角色名称列表
  metadata: {
    genre?: string;
    logline?: string;
    notes?: string;
  };
}

interface Scene {
  id: string;
  number: number;
  heading: string; // 场景标题，如 "INT. 咖啡馆 - 日"
  description?: string; // 场景描述
  elements: SceneElement[]; // 对白、动作等元素
}

type SceneElement = 
  | { type: 'action'; text: string }
  | { type: 'dialogue'; character: string; parenthetical?: string; text: string }
  | { type: 'transition'; text: string };
```

**理由**：
- JSONB 格式灵活，适合剧本这种半结构化数据
- Supabase 提供 JSONB 查询能力，便于搜索和过滤
- 版本历史可通过数组存储，便于 diff 对比

**备选方案**：
- 关系型表结构：过于僵化，修改 schema 成本高
- 文档数据库（MongoDB）：需要额外的数据库服务，增加复杂度

### 2. 编辑器实现方案

**决策**：使用 TipTap 扩展机制实现剧本格式化编辑。

**实现方式**：
- 创建自定义 TipTap 扩展：`SceneExtension`, `DialogueExtension`, `ActionExtension`
- 使用 TipTap 的 Node Views 实现场景块的视觉呈现
- 利用 TipTap 的 schema 系统强制剧本结构规范

**理由**：
- TipTap 已集成到项目中，基于 ProseMirror，功能强大
- 扩展机制灵活，可以自定义节点类型
- 支持富文本特性（粗体、斜体等）和结构化编辑

**备选方案**：
- Slate.js：更底层，需要更多自定义工作
- ProseMirror 直接使用：学习曲线陡峭，TipTap 已封装好常用功能
- 纯 textarea：无法实现结构化编辑和富文本

### 3. Diff 查看功能实现

**决策**：使用已安装的 `diff` 库实现文本差异对比，左右分栏展示。

**实现方式**：
- 提取两个版本的剧本内容为纯文本或 JSON
- 使用 `diff` 库计算差异
- 渲染为左右对比视图，高亮显示增删改

**理由**：
- `diff` 库已安装，无需额外依赖
- 库成熟稳定，性能良好
- 支持多种 diff 算法（字符级、行级、单词级）

**备选方案**：
- diff-match-patch：Google 的库，更强大但对于剧本对比场景可能过度
- 自实现 diff 算法：重复造轮子，不必要

### 4. 导出功能实现

**决策**：前端生成导出文件，PDF 使用 `jspdf`，DOCX 使用 `docx` 库，TXT 使用原生 JavaScript。

**实现方式**：
- PDF：使用 `jspdf` 库，自定义剧本格式排版
- DOCX：使用 `docx` 库，生成结构化 Word 文档
- TXT：原生 Blob API，应用标准剧本格式（角色名大写居中等）

**理由**：
- 前端生成无需后端参与，减少服务器负担
- 这些库成熟且文档完善
- 支持自定义样式，符合剧本格式标准

**备选方案**：
- 后端生成（Go）：需要后端实现，增加复杂度
- 仅支持 PDF：用户需求可能多样化
- 使用模板引擎：对于剧本格式不够灵活

### 5. 状态管理方案

**决策**：继续使用 Zustand 管理应用状态。

**状态结构**：
```typescript
interface ScriptStore {
  scripts: Script[];
  currentScript: Script | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  loadScripts: () => Promise<void>;
  createScript: (title: string) => Promise<Script>;
  updateScript: (id: string, content: ScriptContent) => Promise<void>;
  deleteScript: (id: string) => Promise<void>;
  setCurrentScript: (script: Script | null) => void;
}
```

**理由**：
- Zustand 已集成，轻量且易用
- 无需 Provider 包裹，使用简单
- 支持中间件（persist、devtools）

**备选方案**：
- Redux：过于重量级，MVP 不需要
- Jotai/Recoil：学习成本，Zustand 已满足需求

### 6. API 设计

**决策**：RESTful API，使用 Go + Gin + GORM 实现后端服务，前端通过 HTTP 调用 API。

**API 端点**：
- `GET /api/scripts` - 获取剧本列表
- `POST /api/scripts` - 创建新剧本
- `GET /api/scripts/:id` - 获取剧本详情
- `PUT /api/scripts/:id` - 更新剧本（全量更新）
- `PATCH /api/scripts/:id` - 更新剧本（部分更新）
- `DELETE /api/scripts/:id` - 删除剧本
- `GET /api/scripts/:id/versions` - 获取版本历史
- `POST /api/scripts/:id/versions` - 创建新版本
- `DELETE /api/scripts/:id/versions/:versionId` - 删除版本
- `GET /api/scripts/:id/characters` - 获取角色列表
- `POST /api/scripts/:id/characters` - 创建角色
- `PUT /api/scripts/:id/characters/:characterId` - 更新角色
- `DELETE /api/scripts/:id/characters/:characterId` - 删除角色
- `GET /api/export/scripts/:id/pdf` - 导出 PDF
- `GET /api/export/scripts/:id/docx` - 导出 DOCX
- `GET /api/export/scripts/:id/txt` - 导出 TXT

**理由**：
- Go + GORM 提供类型安全和高性能的后端服务
- GORM 自动迁移简化数据库 schema 管理
- RESTful 风格简单易懂，前端易于集成
- 数据库使用 PostgreSQL（可通过 Supabase 或自托管）

**备选方案**：
- GraphQL：过度设计，MVP 不需要
- Supabase SDK：快速开发但缺乏后端业务逻辑控制

## Risks / Trade-offs

### Risk 1: TipTap 学习曲线
**风险**：TipTap 基于ProseMirror，自定义扩展需要深入理解其架构。
**缓解措施**：
- 优先使用 TipTap Starter Kit 提供的基础功能
- 参考官方示例和社区扩展
- 渐进式添加自定义功能，先实现基础编辑

### Risk 2: 剧本格式标准复杂性
**风险**：标准剧本格式（如 Hollywood 格式）有严格的排版规则，实现复杂。
**缓解措施**：
- MVP 阶段实现简化版本，支持基本格式
- 导出时应用标准格式，编辑器保持简洁
- 收集用户反馈后迭代优化

### Risk 3: 大型剧本性能
**风险**：长剧本可能导致编辑器性能下降。
**缓解措施**：
- TipTap 支持虚拟滚动，可处理大文档
- 版本历史仅存储差异，不重复存储完整内容
- 监控性能，必要时实现分页加载

### Risk 4: 导出格式兼容性
**风险**：PDF/DOCX 导出可能在不同环境下表现不一致。
**缓解措施**：
- 使用成熟的导出库（jspdf、docx）
- 提供预览功能，用户确认后再下载
- TXT 作为兜底格式，确保可用

### Trade-off 1: 前端生成导出 vs 后端生成
**取舍**：选择前端生成，牺牲了一致性控制，换取开发速度和服务器资源节省。
**理由**：MVP 阶段优先快速交付，后续可根据需求迁移到后端。

### Trade-off 2: Supabase SDK vs Go 后端
**取舍**：MVP 使用 Supabase SDK，后续迁移到 Go 后端。
**理由**：快速验证产品价值，后端架构可在用户量增长后优化。

### Trade-off 3: 功能完整性 vs 交付速度
**取舍**：MVP 仅实现核心功能，舍弃协作、角色图谱等高级功能。
**理由**：快速获取用户反馈，验证核心价值后再扩展功能。

## Migration Plan

**阶段 1：MVP 发布（当前）**
1. 实现剧本编辑器核心功能
2. 实现导出功能（PDF/TXT/DOCX）
3. 实现版本历史和 diff 查看
4. 部署到生产环境，收集用户反馈

**阶段 2：后端迁移（未来）**
1. 当用户量增长或需要复杂业务逻辑时，迁移到 Go 后端
2. API 保持 RESTful 风格，前端无需大改
3. 逐步将业务逻辑从 Supabase SDK 迁移到 Go API

**回滚策略**：
- Supabase 数据库保留，前端可回退到直接使用 SDK
- 使用 feature flag 控制新功能发布
- 版本历史保留，可回退到任意版本

## Open Questions

1. **版本历史存储策略**：每次保存都创建新版本，还是用户手动创建版本快照？
   - 建议：自动保存不创建版本，用户点击"创建版本"时才保存快照

2. **剧本导入功能**：MVP 是否需要支持导入已有剧本文件？
   - 建议：MVP 不包含，后续版本考虑支持 TXT/Fountain 格式导入

3. **协作编辑权限**：如果后续添加协作功能，权限模型如何设计？
   - 建议：参考 Google Docs 模型（所有者/编辑者/查看者）

4. **离线支持优先级**：用户是否强烈需要离线编辑？
   - 建议：MVP 不支持，收集用户反馈后再决定

5. **导出格式优先级**：用户最常用哪种导出格式？
   - 建议：MVP 全部支持（PDF/DOCX/TXT），通过数据分析确定优先级
