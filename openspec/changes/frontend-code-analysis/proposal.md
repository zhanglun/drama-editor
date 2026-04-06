## Why

前端代码库存在严重的可维护性和可扩展性问题，主要体现在：

1. **组件职责过大** - 5个组件超过200行，最大的 App.tsx 达到 520 行，违反单一职责原则
2. **架构不一致** - 项目采用 FSD 架构,但 `components/` 目录与 FSD 架构不一致,导致代码组织混乱
3. **代码重复** - 10种主要重复模式（日期格式化、Store模式、NodeView结构等），增加了维护成本
4. **React 反模式** - 28处反模式问题（index作为key、useEffect依赖项缺失、any类型滥用等),可能导致bug和性能问题

现在进行重构可以显著提升代码质量、减少bug数量、并提高开发效率。

## What Changes

- **升级到 React 19** 并启用 React Compiler
- 拆分超大组件（App.tsx, ScriptEditor.tsx, ScriptList.tsx）
- 统一 FSD 架构，迁移 `components/` 到 FSD 结构
- 抽取重复代码为可复用的组件和 hooks
- 修复 React 反模式（key、依赖项、类型安全）
- 创建共享的 UI 组件库（Card, Badge, LoadingSpinner）
- 创建可复用的 hooks（useAsyncOperation, useDialog, useRelativeDate）
- 移除手动 memoization（由 React Compiler 自动处理）

## Capabilities

### New Capabilities

- `react-19-upgrade`: 升级到 React 19 并启用 React Compiler
- `component-refactoring`: 拆分超大组件，统一架构
- `shared-ui-library`: 创建共享 UI 组件库
- `custom-hooks`: 创建可复用的自定义 hooks
- `react-patterns-fix`: 修复 React 反模式问题（不包括 memoization）

### Modified Capabilities
- `fsd-architecture`: 统一 FSD 架构（将 components/ 迁移到 FSD 结构）

## Impact

### 受影响的文件
- `apps/web/src/App.tsx` (520行)
- `apps/web/src/components/Editor/ScriptEditor.tsx` (396行)
- `apps/web/src/components/ScriptList/ScriptList.tsx` (334行)
- `apps/web/src/features/character-canvas/ui/VariantDetailPanel.tsx` (253行)
- `apps/web/src/components/Character/CharacterPanel.tsx` (219行)
- 以及相关的小型组件和工具函数

### 新增文件
- `babel.config.js` - Babel 配置（启用 React Compiler）
- `apps/web/src/shared/ui/Card/` - 共享卡片组件
- `apps/web/src/shared/ui/Badge/` - 统一徽章组件
- `apps/web/src/shared/ui/Loading/` - 加载状态组件
- `apps/web/src/shared/hooks/useAsyncOperation.ts` - 异步操作 hook
- `apps/web/src/shared/hooks/useDialog.ts` - 对话框 hook
- `apps/web/src/components/Editor/nodeviews/BaseNodeView.tsx` - NodeView 基础组件

### 修改文件
- `apps/web/package.json` - 升级 React 到 19.x
- `apps/web/babel.config.js` - 配置 React Compiler
- 所有使用 index 作为 key 的组件
- 所有 useEffect 依赖项有问题的组件
- 所有使用 any 类型的文件
- 所有使用独立 formatDate 的组件
- 所有使用重复的 Store 模式的文件
- 移除所有手动 memoization（React.memo, useMemo, useCallback）- 交由 React Compiler 自动优化

