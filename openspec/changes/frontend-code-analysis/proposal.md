## Why

前端代码库存在严重的可维护性和可扩展性问题，经重新分析（2026-04-06），问题比初次评估更为广泛：

1. **组件职责过大** - 10个组件/文件超过200行（原评估为5个），最大的 App.tsx 达到 520 行，新增 Canvas.tsx (344行)、CharacterCanvasPage.tsx (319行)、scriptStore.ts (262行) 等
2. **架构不一致** - 项目同时存在 `components/`（传统结构）、`features/`、`entities/`、`widgets/`、`stores/` 多套目录组织方式，新旧结构混用
3. **代码重复** - 8种主要重复模式，估计 500-700 行重复代码：Store 异步模式 (3个store 14处重复)、NodeView结构 (4组件)、日期格式化 (10文件)、错误处理 (18文件) 等
4. **React 反模式** - 约50+处问题：7处 index 作为 key、~7处 useEffect 依赖缺失、18处 any 类型滥用、43处手动 memoization
5. **基础设施缺失** - 无测试框架、无 ESLint 配置文件、无 Babel 配置、仍在 React 18.2.0

## What Changes

- **升级到 React 19** 并启用 React Compiler（通过 Vite 插件，非 Babel）
- **拆分超大组件** - 10个超过200行的文件，优先处理 App.tsx、ScriptEditor.tsx、Canvas.tsx
- **统一 FSD 架构** - 将 `components/` 逐步迁移到 FSD 结构，消除 `stores/` 全局状态的遗留
- **抽取重复代码** - Store 异步模式（~150行）、NodeView 基础组件（~100行）、日期格式化统一（~80行）
- **修复 React 反模式** - index key (7处)、useEffect 依赖 (7处)、any 类型 (18处)
- **创建共享的 UI 组件库** - Card、Badge、LoadingSpinner
- **创建可复用的 hooks** - useAsyncOperation、useDialog、useRelativeDate
- **添加基础设施** - ESLint 配置、测试框架 (Vitest)
- **移除手动 memoization**（由 React Compiler 自动处理）

## Capabilities

### New Capabilities

- `react-19-upgrade`: 升级到 React 19 并启用 React Compiler（通过 Vite 插件方式）
- `component-refactoring`: 拆分10个超大组件，统一架构（包括新增的 Canvas、Page、Store 文件）
- `shared-ui-library`: 创建共享 UI 组件库（Card、Badge、LoadingSpinner）
- `custom-hooks`: 创建可复用的自定义 hooks（useAsyncOperation、useDialog、useRelativeDate）
- `react-patterns-fix`: 修复 React 反模式问题（7处 index key、7处依赖缺失、18处 any 类型）
- `infrastructure-setup`: 配置 ESLint、添加测试框架

### Modified Capabilities
- `fsd-architecture`: 统一 FSD 架构（迁移 components/ 和 stores/ 到 FSD 结构）

## Impact

### 受影响的文件
- `apps/web/src/App.tsx` (520行) - 包含6个页面组件定义
- `apps/web/src/components/Editor/ScriptEditor.tsx` (413行) - 编辑器核心 + 工具栏 + 行号
- `apps/web/src/features/character-canvas/ui/Canvas.tsx` (344行) - 画布核心 + 事件处理
- `apps/web/src/components/ScriptList/ScriptList.tsx` (334行) - 搜索 + 过滤 + 排序 + 列表
- `apps/web/src/pages/CharacterCanvasPage.tsx` (319行) - 页面 + 状态 + 对话框
- `apps/web/src/stores/scriptStore.ts` (262行) - 遗留全局状态
- `apps/web/src/features/character-canvas/model/store.ts` (262行) - 画布状态
- `apps/web/src/features/character-canvas/ui/VariantDetailPanel.tsx` (253行) - 变体详情
- `apps/web/src/features/export/lib/docx-export.ts` (236行) - 导出逻辑
- `apps/web/src/components/Character/CharacterPanel.tsx` (219行) - 角色面板

### 新增文件
- `apps/web/src/shared/ui/Card/Card.tsx` - 共享卡片组件
- `apps/web/src/shared/ui/Badge/Badge.tsx` - 统一徽章组件
- `apps/web/src/shared/ui/Loading/LoadingSpinner.tsx` - 加载状态组件
- `apps/web/src/shared/ui/Loading/LoadingState.tsx` - 完整加载状态包装
- `apps/web/src/shared/hooks/useAsyncOperation.ts` - 异步操作 hook
- `apps/web/src/shared/hooks/useDialog.ts` - 对话框 hook
- `apps/web/src/shared/hooks/useRelativeDate.ts` - 相对日期 hook
- `apps/web/src/components/Editor/nodeviews/BaseNodeView.tsx` - NodeView 基础组件
- `apps/web/src/shared/lib/create-async-action.ts` - Store 异步 action 工厂函数
- `apps/web/src/pages/HomePage.tsx` - 从 App.tsx 拆分
- `apps/web/src/pages/ScriptsPage.tsx` - 从 App.tsx 拆分
- `apps/web/src/pages/NewScriptPage.tsx` - 从 App.tsx 拆分
- `apps/web/src/pages/ScriptEditorPage.tsx` - 从 App.tsx 拆分
- `apps/web/src/pages/VersionsPage.tsx` - 从 App.tsx 拆分
- `apps/web/src/pages/DiffPage.tsx` - 从 App.tsx 拆分

### 修改文件
- `apps/web/package.json` - 升级 React 到 19.x，添加 React Compiler 插件
- `apps/web/vite.config.ts` - 配置 React Compiler
- 所有使用 index 作为 key 的组件（7处）
- 所有 useEffect 依赖项有问题的组件（7处）
- 所有使用 any 类型的文件（18处）
- 所有使用独立 formatDate 的组件（10处）
- 所有使用重复 Store 异步模式的文件（3个 store）
- 所有 NodeView 组件（4个）
- 移除所有手动 memoization（React.memo 1处、部分 useMemo/useCallback）
