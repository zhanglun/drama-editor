## 0. 基础设施准备

- [x] 0.1 配置 ESLint
  - 创建 `.eslintrc.js` 或 `eslint.config.js` 配置文件
  - 启用 `react-hooks/exhaustive-deps` 规则为 "error"
  - 确认 `eslint-plugin-react-hooks` (^4.6.0) 已安装
  - 运行 `pnpm lint` 验证配置正常

- [x] 0.2 配置 Vitest 测试框架
  - 安装 `vitest` 和 `@testing-library/react` 依赖
  - 创建 `apps/web/vitest.config.ts` 配置文件
  - 添加测试脚本到 `apps/web/package.json`
  - 创建示例测试文件验证框架工作

## 1. React 19 升级 (最高优先级)

- [x] 1.1 升级 React 依赖
  - 更新 `apps/web/package.json` 中的 React 版本
  - `react` 从 `^18.2.0` 升级到 `^19.0.0`
  - `react-dom` 从 `^18.2.0` 升级到 `^19.0.0`
  - `@types/react` 从 `^18.2.43` 升级到 `^19.0.0`
  - `@types/react-dom` 从 `^18.2.17` 升级到 `^19.0.0`
  - 运行 `pnpm install` 更新依赖

- [x] 1.2 安装和配置 React Compiler (通过 Vite)
  - 安装 `babel-plugin-react-compiler` 和 `@babel/core` 为 devDependencies
  - **不**安装完整 Babel 工具链 (不需要 @babel/preset-*)
  - **不**创建 babel.config.js 文件
  - 更新 `apps/web/vite.config.ts`，在 `@vitejs/plugin-react` 中配置 babel 选项启用 React Compiler
  - 验证开发服务器启动正常

- [x] 1.3 验证 React Compiler 正常工作
  - 运行 `pnpm dev` 启动开发服务器
  - 检查控制台无编译错误
  - 运行 `pnpm build` 验证生产构建
  - **重点测试 TipTap 编辑器**所有功能：
    - 场景、对白、动作、转场节点
    - 斜杠命令菜单
    - 角色提及菜单
    - 节点工具栏
    - 自动保存

- [x] 1.4 移除手动 memoization
  - 移除 `features/character-canvas/ui/HandleMenu.tsx` 中的 `React.memo()` 包装 (line 93)
  - 评估所有 `useCallback()` 使用 (30+处)：
    - Canvas.tsx (9处)、CharacterCanvasPage.tsx (5处)、useNodeOperations.ts (6处)
    - CustomHandle.tsx (5处)、NodeToolbar.tsx (4处)
    - 仅保留用于 useEffect 依赖数组稳定性的，其余移除
  - 评估所有 `useMemo()` 使用 (5处)：
    - ScriptList.tsx (1处)、use-diff.ts (3处)、Canvas.tsx (1处)
    - 仅保留用于真正昂贵计算的，其余移除
  - 保留的 memoization 必须添加注释说明原因

## 2. 创建共享组件和 hooks

- [x] 2.1 创建共享UI组件库
  - 创建 `shared/ui/Card/Card.tsx` - 统一卡片样式 (15个文件有重复 card className)
  - 创建 `shared/ui/Badge/Badge.tsx` - 统一徽章样式
  - 创建 `shared/ui/Loading/LoadingSpinner.tsx` - 统一加载 spinner (10+文件重复)
  - 创建 `shared/ui/Loading/LoadingState.tsx` - 完整加载状态包装
  - 更新 `shared/ui/index.ts` 导出文件
  - 使用 `clsx` 和 `tailwind-merge` (`cn` 工具函数) 组合 className

- [x] 2.2 创建自定义hooks
  - 创建 `shared/hooks/useAsyncOperation.ts` - 通用异步操作模式
  - 创建 `shared/hooks/useDialog.ts` - 对话框状态管理 (CharacterCanvasPage 等使用)
  - 创建 `shared/hooks/useRelativeDate.ts` - 相对日期格式化 (10个文件有日期格式化需求)
  - 更新 `shared/hooks/index.ts` 导出文件

- [x] 2.3 创建 Store 异步 action 工厂
  - 创建 `shared/lib/create-async-action.ts` - Zustand 异步 action 工厂函数
  - 自动处理 `set({ isLoading: true, error: null })` → try → catch 模式
  - 支持泛型，类型安全

- [x] 2.4 创建 BaseNodeView 组件
  - 创建 `components/Editor/nodeviews/BaseNodeView.tsx`
  - 提取4个 NodeView 的共同结构：
    - NodeViewWrapper → div with gradient background
    - NodeToolbar 集成
    - Type label (icon + text)
    - NodeViewContent
  - 支持 type、icon、colorScheme、selected 等配置

## 3. 核心组件重构

- [x] 3.1 拆分 App.tsx (520行 → ~50行 + 6个页面文件)
  - 创建 `pages/HomePage.tsx` (从 App.tsx 提取)
  - 创建 `pages/ScriptsPage.tsx` (从 App.tsx 提取)
  - 创建 `pages/NewScriptPage.tsx` (从 App.tsx 提取)
  - 创建 `pages/ScriptEditorPage.tsx` (从 App.tsx 提取，含 API 调用迁移)
  - 创建 `pages/VersionsPage.tsx` (从 App.tsx 提取)
  - 创建 `pages/DiffPage.tsx` (从 App.tsx 提取，含 API 调用迁移)
  - 重构 App.tsx 只保留路由配置和布局
  - **将 ScriptEditorPage 和 DiffPage 中的直接 fetch 调用迁移到 store**

- [x] 3.2 拆分 ScriptEditor.tsx (413行 → 92行 + hooks + EditorToolbar)
  - 创建 `components/Editor/hooks/useLineNumbers.ts` 行号计算 hook
  - 创建 `components/Editor/hooks/useEditorConfig.ts` 编辑器配置 hook
  - 创建 `components/Editor/EditorToolbar.tsx` 工具栏组件
  - 重构 ScriptEditor.tsx 使用新组件和 hooks

- [x] 3.3 拆分 Canvas.tsx (328行 → 171行)
  - 创建 `features/character-canvas/model/useCanvasEvents.ts` 事件处理 hook
  - 创建 `features/character-canvas/model/useNodeDrag.ts` 节点拖拽 hook
  - 创建 `features/character-canvas/model/canvasConfig.ts` ReactFlow 配置
  - 重构 Canvas.tsx 只保留渲染逻辑

- [x] 3.4 拆分 ScriptList.tsx (330行 → 119行)
  - 创建 `components/ScriptList/hooks/useScriptFilters.ts` 过滤逻辑
  - 创建 `components/ScriptList/hooks/useScriptSort.ts` 排序逻辑
  - 创建额外的 LoadingState/ErrorState/SearchInput 等子组件
  - 重构 ScriptList.tsx 使用新 hooks

- [x] 3.5 拆分 CharacterCanvasPage.tsx (330行 → 242行)
  - 使用 `useDialog` hook 替代内联对话框状态管理
  - 提取 useCharacters hook 和页面状态组件

- [x] 3.6 重构 NodeView 组件 (使用 BaseNodeView)
  - 重构 `DialogueNodeView.tsx` 使用 BaseNodeView (69→55行)
  - 重构 `ActionNodeView.tsx` 使用 BaseNodeView (31→19行)
  - 重构 `SceneNodeView.tsx` 使用 BaseNodeView (44→28行)
  - 重构 `TransitionNodeView.tsx` 使用 BaseNodeView (31→19行)

- [x] 3.7 重构其他超标文件
  - 拆分 `VariantDetailPanel.tsx` (253行→192行) - 提取 useVariantForm hook
  - 拆分 `CharacterPanel.tsx` (219行→123行) - 提取 useCharacterList hook
  - 拆分 `docx-export.ts` (236行→91行) - 提取 docx-helpers

## 4. React 反模式修复

- [x] 4.1 修复 index 作为 key (7处)
  - `components/Editor/ScriptEditor.tsx` (line 389): 使用 `lineNumber` 作为 key
  - `entities/character/ui/CharacterList.tsx` (line 135): 使用 `character.id` 作为 key
  - `components/Character/CharacterPanel.tsx` (line 176): 使用 `character.id` 或唯一标识
  - `features/diff-viewer/ui/DiffViewer.tsx` (line 110): 使用 `${lineNumber}-${type}`
  - `shared/ui/Skeleton/Skeleton.tsx` (line 52): 使用稳定 key
  - `features/character-canvas/ui/TraitsEditor.tsx` (line 51, 65): 使用 `trait.id` 或生成唯一 ID

- [x] 4.2 修复 useEffect 依赖项缺失 (7处)
  - `components/Editor/ScriptEditor.tsx` (3处): 将 `calculateLineHeights` 包装在 useCallback 中或添加到依赖
  - `features/character-canvas/ui/CanvasContextMenu.tsx` (2处): 添加 `onClose` 到依赖数组
  - `features/character-canvas/ui/HandleMenu.tsx` (1处): 添加 `onClose` 到依赖数组
  - `features/auto-save/model/use-auto-save.ts` (1处): 修正 `debouncedSave` 依赖

- [x] 4.3 修复 any 类型 (18处)
  - **TipTap 扩展** (8处):
    - `extensions/CharacterMention.ts` (5处: lines 71, 73, 76, 112, 124)
    - `extensions/SlashCommand.ts` (3处: lines 55, 59, 137)
    - 从 `@tiptap/core` 或 `@tiptap/suggestion` 导入正确类型
  - **编辑器** (5处):
    - `components/Editor/ScriptEditor.tsx` (5处: lines 72, 73, 75, 76, 90)
    - 定义 TipTap node 类型接口
  - **画布** (4处):
    - `features/character-canvas/ui/Canvas.tsx` (4处: lines 132, 211, 214)
    - 使用 `@xyflow/react` 的正确类型
  - **节点** (2处):
    - `CharacterNode.tsx` (line 8) 和 `VariantNode.tsx` (line 9)
    - 定义 node data 类型接口

- [x] 4.4 清理 console.log
  - `components/Editor/ScriptEditor.tsx` (line 83): 移除或用 `import.meta.env.DEV` 包裹

## 5. 代码复用优化

- [x] 5.1 统一日期格式化 (10个文件)
  - `entities/version/ui/VersionList.tsx`: 删除本地 formatDate，使用 shared formatDateTime
  - `components/ScriptList/ScriptCard.tsx`: 删除本地 formatDate，使用 shared formatDate
  - `pages/ScriptEditorPage.tsx`: 替换内联 `toLocaleDateString()` 为 formatDate
  - `pages/DiffPage.tsx`: 替换两处内联 `toLocaleDateString()` 为 formatDate

- [x] 5.2 重构 Store 异步模式 (3个 store, ~150行重复)
  - 重构 `entities/script/model/store.ts` 使用 `createAsyncActionFactory` (7个异步action)
  - 重构 `entities/version/model/store.ts` 使用 `createAsyncActionFactory` (3个异步action)
  - 重构 `features/character-canvas/model/store.ts` 使用 `createAsyncActionFactory` (loadFromServer)

- [x] 5.3 统一 UI 样式
  - 替换 ScriptMetadataPanel 内联 card 为 `<Card>` 组件
  - 替换 8 个文件中内联 loading spinner 为 `<LoadingSpinner>` 组件
  - 替换 5 个文件中内联 input 样式为 `<Input>` 组件

## 6. 架构统一 (FSD 迁移)

> **✅ 任务已完成 - 2025-04-08**
> 
> **类型错误已修复**，架构迁移继续执行。

- [x] 6.1 迁移遗留目录到 FSD 结构
  - `stores/scriptStore.ts` → 已更新所有导入路径到 `entities/script`，旧目录已删除
  - `extensions/` → `features/editor/extensions/` ✓
  - `services/` → 空目录已删除
  - `lib/` → `shared/lib/` 已统一，旧目录已删除
  - `types/` → `shared/types/` 已统一，旧目录已删除
  - `utils/` → `shared/lib/` 已统一（character-extractor 同步），旧目录已删除
  - `hooks/` → 空目录已删除

- [x] 6.2 更新所有导入路径
  - 更新了所有从旧路径导入的文件（extensions、stores、types、utils）
  - `pnpm typecheck` 通过
  - `pnpm build` 成功

## 7. 验证与收尾

- [x] 7.1 运行 ESLint 检查
  - 确认无 `exhaustive-deps` 警告
  - 确认无 TypeScript 类型错误
  - 修复所有 lint 报告的问题

- [x] 7.2 运行完整功能验证
  - 剧本 CRUD 操作
  - 编辑器所有节点类型
  - 斜杠命令和角色提及
  - 自动保存功能
  - 版本历史和 Diff 对比
  - 导出功能 (PDF/DOCX/TXT)
  - 角色画布功能

- [x] 7.3 运行构建验证
  - `pnpm build` 成功
  - `pnpm typecheck` 无错误
  - `pnpm lint` 无错误
