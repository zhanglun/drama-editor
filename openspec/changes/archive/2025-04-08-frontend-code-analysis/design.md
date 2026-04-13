## Context

项目采用 FSD (Feature-Sliced Design) 架构，但当前处于新旧架构混用状态：

- **架构混合** - 同时存在 `components/`（传统）、`features/`（FSD）、`entities/`（FSD）、`widgets/`（FSD）、`stores/`（全局状态遗留）
- **组件过大** - 10个文件超过200行，11个文件在150-200行之间
- **代码重复** - 8种主要重复模式，估计 500-700 行重复代码
- **React反模式** - 约50+处问题影响代码质量和性能
- **基础设施缺失** - 无测试、无 ESLint 配置文件、无 Babel

技术栈：React 18.2.0 + Zustand 4.4.7 + TipTap 3.22.2 + Vite 5.0.8 + TypeScript 5.2.2 + Tailwind CSS 3.4.0

已有的良好基础设施：
- 统一的 ApiClient（`shared/api/client.ts`）
- ErrorBoundary 组件（`shared/ui/ErrorBoundary/`）
- 部分 FSD 目录已建立（`pages/`、`widgets/`、`shared/`、`features/`、`entities/`）

## Goals / Non-Goals

### Goals
1. **升级到 React 19** - 通过 Vite 插件启用 React Compiler 实现自动优化
2. **提升可维护性** - 将10个超标文件拆分到200行以下
3. **统一架构** - 完全采用 FSD 架构，消除 `components/` 和 `stores/` 遗留
4. **提高代码质量** - 修复50+处反模式，消除 500-700 行重复代码
5. **建立基础设施** - ESLint 配置、Vitest 测试框架

### Non-Goals
1. **不改变业务逻辑** - 只重构代码结构，不改变功能行为
2. **不改变外部API** - API接口保持不变
3. **不添加新功能** - 只优化现有代码
4. **不进行性能优化** - 专注于代码质量而非性能（除非直接影响可维护性）
5. **不引入第三方 UI 库** - 自建轻量级组件库，避免新依赖

## Decisions

### 0. 升级到 React 19 (最高优先级)
**决策**: 升级到 React 19 并通过 Vite 插件启用 React Compiler

**理由**: 
- React 19 + React Compiler 自动处理 memoization，可移除 43 处手动优化
- Vite 插件方式比 Babel 更简单，无需引入 Babel 工具链
- 项目当前使用 `@vitejs/plugin-react`，可通过配置直接启用 Compiler

**替代方案**:
- ❌ 保持 React 18 + 手动 memoization - 代码复杂，维护成本高
- ❌ Babel + React Compiler - 需要引入完整 Babel 工具链，与 Vite 的 esbuild 冲突
- ✅ **Vite 插件 + React Compiler** - 零额外依赖，配置简单

**实施步骤**:
1. 升级 React 和 React DOM 到 19.x
2. 安装 `@vitejs/plugin-react` 的 Compiler 支持版本
3. 在 `vite.config.ts` 中配置 React Compiler
4. 移除所有手动 memoization
5. 验证编译和运行正常

**风险**: React 19 相对较新，TipTap 3.22.2 兼容性需验证
**缓解**: 在开发环境充分测试，查阅 TipTap React 19 兼容性文档

### 1. 组件拆分策略
**决策**: 采用渐进式拆分策略，优先拆分最大的组件，按影响范围排序

**拆分优先级**:
1. **App.tsx (520行)** - 拆出6个页面组件到 `pages/`，App.tsx 只保留路由配置和布局
2. **ScriptEditor.tsx (413行)** - 拆出 EditorToolbar、useLineNumbers、useEditorConfig
3. **Canvas.tsx (344行)** - 拆出事件处理器、节点拖拽逻辑为独立 hooks
4. **ScriptList.tsx (334行)** - 拆出 useScriptFilters、useScriptSort
5. **CharacterCanvasPage.tsx (319行)** - 拆出对话框状态管理为 useDialog hook
6. **scriptStore.ts (262行)** - 迁移到 FSD entities 层，抽取异步模式
7. **character-canvas store (262行)** - 抽取异步模式，使用 createAsyncAction
8. **VariantDetailPanel.tsx (253行)** - 拆出表单逻辑为独立 hook
9. **docx-export.ts (236行)** - 拆出工具函数和核心导出逻辑
10. **CharacterPanel.tsx (219行)** - 拆出角色列表和编辑逻辑

### 2. FSD架构统一
**决策**: 完全迁移到 FSD 架构，消除遗留目录

**迁移计划**:
- `components/` → `widgets/` 或 `features/`（按职责分配）
- `stores/scriptStore.ts` → `entities/script/model/store.ts`（已存在，需合并）
- `hooks/` → `shared/hooks/`
- `extensions/` → `features/editor/extensions/`
- `services/` → `shared/api/`
- `lib/` → `shared/lib/`
- `types/` → `shared/types/`
- `utils/` → `shared/lib/`

**FSD 标准架构**:
```
apps/web/src/
├── app/              # 应用层（路由、全局 provider、全局样式）
├── pages/            # 页面层
├── widgets/          # 复杂组件层
├── features/         # 功能特性层
├── entities/         # 业务实体层
└── shared/           # 共享层（UI组件、hooks、lib、types、api）
```

### 3. 代码复用策略
**决策**: 优先抽取高重复度、高价值的模式

**优先级（按重复代码量排序）**:
1. **Store 异步模式** - 3个 store 14处重复，~150行 → createAsyncAction 工厂函数
2. **NodeView 结构** - 4个组件结构100%相似，~100行 → BaseNodeView 组件
3. **错误处理模式** - 18个文件，~120行 → 统一错误处理工具
4. **日期格式化** - 10个文件，~80行 → 统一使用 shared/lib/utils.ts
5. **Loading 状态 UI** - 10+文件，~70行 → LoadingState 组件
6. **Card 样式** - 15个文件，~40行 → Card 组件

### 4. React反模式修复策略
**决策**: 按严重程度分批修复

**优先级**:
1. **P1: index作为key (7处)** - 可能导致渲染错误和状态丢失
   - ScriptEditor.tsx:389、CharacterList.tsx:135、CharacterPanel.tsx:176
   - DiffViewer.tsx:110、Skeleton.tsx:52、TraitsEditor.tsx:51,65
2. **P1: useEffect依赖项缺失 (7处)** - 可能导致闭包bug和状态不同步
   - ScriptEditor.tsx (3处)、CanvasContextMenu.tsx (2处)、HandleMenu.tsx (1处)、use-auto-save.ts (1处)
3. **P2: any类型滥用 (18处)** - 影响类型安全
   - TipTap 扩展文件 (CharacterMention.ts 5处、SlashCommand.ts 3处)
   - ScriptEditor.tsx (5处)、Canvas.tsx (4处)、NodeView组件 (2处)

**注意**: ~~手动 memoization (43处)~~ - 由 React Compiler 自动处理

### 5. 共享组件库设计
**决策**: 创建最小化的共享组件库，优先满足当前需求

**组件清单**:
1. `Card` - 统一卡片样式（15个文件当前有重复的 card className）
2. `Badge` - 统一徽章样式
3. `LoadingSpinner` - 统一加载状态（10+文件有重复的 loading UI）
4. `LoadingState` - 完整加载状态包装组件

### 6. Hooks设计原则
**决策**: 创建领域特定的 custom hooks

**Hooks 清单**:
1. `useAsyncOperation` - 通用的异步操作模式（替代14处重复的 try/catch + loading/error）
2. `useDialog` - 通用的对话框模式（CharacterCanvasPage 等多处使用）
3. `useRelativeDate` - 特定的日期格式化逻辑（10个文件有日期格式化需求）

### 7. 基础设施建设
**决策**: 添加缺失的基础设施

**新增**:
1. ESLint 配置文件 - 启用 `react-hooks/exhaustive-deps` 规则为 error
2. Vitest 测试框架 - 为共享组件和 hooks 提供测试支持

## Risks / Trade-offs

### Risk 1: 重构过程中引入新bug
**影响**: 高
**概率**: 中等
**缓解措施**:
- 采用渐进式重构策略
- 每次重构后手动验证功能正常
- 通过 git 分支隔离变更

### Risk 2: React 19 + TipTap 兼容性
**影响**: 高
**概率**: 低-中
**缓解措施**:
- 先在开发环境验证所有 TipTap 功能
- 查阅 TipTap React 19 兼容性文档
- 保留回滚方案

### Risk 3: 架构迁移破坏现有代码
**影响**: 高
**概率**: 中等
**缓解措施**:
- 分阶段迁移（先迁移 stores/，再迁移 components/）
- 使用路径别名减少迁移影响
- 保持导入路径兼容性

### Trade-off 1: 重构时间 vs 长期收益
**权衡**: 短期投入时间，长期获得更高的开发效率
**决策**: 接受短期投入，优先重构高价值部分

### Trade-off 2: 完美主义 vs 实用主义
**权衡**: 追求完美架构 vs 实用可维护的代码
**决策**: 优先实用，避免过度设计

## Migration Plan

### 阶段0: React 19 升级 (1天)
1. 升级 React 到 19.x 及相关类型
2. 配置 Vite 使用 React Compiler
3. 验证所有功能正常工作
4. 移除手动 memoization

### 阶段1: 基础设施准备 (1天)
1. 添加 ESLint 配置文件，启用 exhaustive-deps 规则
2. 配置 Vitest 测试框架
3. 创建共享 UI 组件库（Card、Badge、LoadingSpinner、LoadingState）
4. 创建 custom hooks（useAsyncOperation、useDialog、useRelativeDate）
5. 创建 createAsyncAction 工厂函数

### 阶段2: 核心组件重构 (3-5天)
1. 拆分 App.tsx → 6个页面组件
2. 拆分 ScriptEditor.tsx → EditorToolbar + hooks
3. 拆分 Canvas.tsx → 事件处理 hooks
4. 拆分 ScriptList.tsx → 过滤/排序 hooks
5. 拆分 CharacterCanvasPage.tsx → useDialog
6. 创建 BaseNodeView 组件，重构4个 NodeView
7. 修复 React 反模式（index key、useEffect 依赖）

### 阶段3: 架构统一与代码复用 (2-3天)
1. 迁移 `stores/scriptStore.ts` 到 `entities/script/model/`
2. 迁移 `components/` 到 `widgets/` 或 `features/`
3. 迁移 `hooks/`、`lib/`、`types/`、`utils/` 到 `shared/`
4. 统一日期格式化（10个文件）
5. 重构 Store 异步模式（3个 store）
6. 统一 UI 样式（Card、Loading）

### 阶段4: 类型安全与验证 (1-2天)
1. 修复 TipTap 扩展的 any 类型（8处）
2. 修复其他 any 类型（10处）
3. 运行完整功能验证
4. 运行 ESLint 检查

### 回滚策略
- Git 分支策略：每个阶段在独立分支进行
- 快速回滚：如果某个阶段失败，可以快速回滚到上一个稳定版本
- 增量发布：每个阶段完成后合并到主分支

## Open Questions
1. **TipTap 3.22.2 与 React 19 的兼容性** - 需要验证，可能需要升级 TipTap
2. **测试策略** - 当前无任何测试，需要决定测试覆盖的优先级
3. **架构迁移顺序** - `components/` 和 `stores/` 哪个先迁移？
4. **性能基准** - 重构后是否需要性能对比测试？
