## 0. React 19 升级 (最高优先级)

- [ ] 0.1 升级 React 依赖
  - 更新 `apps/web/package.json` 中的 React 版本
  - `react` 从 `^18.2.0` 升级到 `^19.0.0`
  - `react-dom` 从 `^18.2.0` 升级到 `^19.0.0`
  - `@types/react` 从 `^18.2.0` 升级到 `^19.0.0`
  - `@types/react-dom` 从 `^18.2.0` 升级到 `^19.0.0`
  - 运行 `pnpm install` 更新依赖

- [ ] 0.2 安装和配置 Babel + React Compiler
  - 安装 Babel 依赖：`@babel/core`, `@babel/preset-env`, `@babel/preset-react`, `@babel/preset-typescript`
  - 安装 React Compiler：`babel-plugin-react-compiler`
  - 创建 `apps/web/babel.config.js` 配置文件
  - 配置 React Compiler 插件
  - 配置 TypeScript 和 React presets

- [ ] 0.3 配置 Vite 使用 Babel
  - 更新 `apps/web/vite.config.ts`（如需要）
  - 确保 Vite 正确使用 Babel 配置
  - 验证开发服务器启动正常

- [ ] 0.4 验证 React Compiler 正常工作
  - 运行 `pnpm dev` 启动开发服务器
  - 检查控制台无编译错误
  - 运行 `pnpm build` 验证生产构建
  - 使用 React DevTools 验证优化生效

- [ ] 0.5 移除手动 memoization
  - 移除所有 `React.memo()` 包装
  - 移除仅用于性能优化的 `useMemo()`（保留语义用途的）
  - 移除仅用于性能优化的 `useCallback()`（保留依赖数组稳定性的）
  - 添加注释说明保留的 memoization 用途
  - 运行测试验证功能正常

## 1. 基础设施准备

- [ ] 1.1 创建共享UI组件库
  - 创建 `apps/web/src/shared/ui/Card/Card.tsx`
  - 创建 `apps/web/src/shared/ui/Badge/Badge.tsx`
  - 创建 `apps/web/src/shared/ui/Loading/LoadingSpinner.tsx`
  - 创建 `apps/web/src/shared/ui/Loading/LoadingState.tsx`
  - 创建 `apps/web/src/shared/ui/index.ts` 导出文件
  - 为每个组件添加单元测试

- [ ] 1.2 创建自定义hooks
  - 创建 `apps/web/src/shared/hooks/useAsyncOperation.ts`
  - 创建 `apps/web/src/shared/hooks/useDialog.ts`
  - 创建 `apps/web/src/shared/hooks/useRelativeDate.ts`
  - 创建 `apps/web/src/shared/hooks/index.ts` 导出文件
  - 为每个hook添加单元测试

- [ ] 1.3 配置ESLint规则
  - 添加 `eslint-plugin-react-hooks` 依赖
  - 在 `.eslintrc` 中启用 `react-hooks/exhaustive-deps` 规则
  - 测试ESLint配置是否正常工作

## 2. 核心组件重构

- [ ] 2.1 拆分App.tsx (最高优先级)
  - 创建 `apps/web/src/pages/HomePage.tsx`
  - 创建 `apps/web/src/pages/ScriptsPage.tsx`
  - 创建 `apps/web/src/pages/NewScriptPage.tsx`
  - 创建 `apps/web/src/pages/ScriptEditorPage.tsx`
  - 创建 `apps/web/src/pages/VersionsPage.tsx`
  - 创建 `apps/web/src/pages/DiffPage.tsx`
  - 重构 `App.tsx` 只保留路由配置
  - 运行集成测试验证路由正常

- [ ] 2.2 拆分ScriptEditor.tsx
  - 创建 `apps/web/src/components/Editor/EditorToolbar.tsx`
  - 创建 `apps/web/src/components/Editor/hooks/useLineNumbers.ts`
  - 创建 `apps/web/src/components/Editor/hooks/useEditorConfig.ts`
  - 重构 `ScriptEditor.tsx` 使用新的组件和hooks
  - 运行测试验证编辑器功能

- [ ] 2.3 拆分ScriptList.tsx
  - 创建 `apps/web/src/components/ScriptList/hooks/useScriptFilters.ts`
  - 创建 `apps/web/src/components/ScriptList/hooks/useScriptSort.ts`
  - 重构 `ScriptList.tsx` 使用新的hooks
  - 运行测试验证列表功能

- [ ] 2.4 创建BaseNodeView组件
  - 创建 `apps/web/src/components/Editor/nodeviews/BaseNodeView.tsx`
  - 重构 `DialogueNodeView.tsx` 使用 BaseNodeView
  - 重构 `ActionNodeView.tsx` 使用 BaseNodeView
  - 重构 `SceneNodeView.tsx` 使用 BaseNodeView
  - 重构 `TransitionNodeView.tsx` 使用 BaseNodeView
  - 运行测试验证节点视图

## 3. React反模式修复 (P0)

- [ ] 3.1 修复index作为key的问题
  - CharacterList.tsx: 使用 `character.id` 或 `character.name` 作为key
  - CharacterPanel.tsx: 使用 `character.id` 或 `character.name` 作为key
  - ScriptEditor.tsx (行号): 使用 `lineNumber` 作为key
  - DiffViewer.tsx: 使用 `${lineNumber}-${type}` 作为key
  - TraitsEditor.tsx: 使用 `trait.id` 或生成唯一ID
  - 运行测试验证渲染正确性

- [ ] 3.2 修复useEffect依赖项问题
  - ScriptEditor.tsx (行号计算): 将 `calculateLineHeights` 包装在 `useCallback` 中
  - ScriptEditor.tsx (其他useEffect): 添加缺失的依赖项
  - use-auto-save.ts: 添加所有使用的值到依赖数组
  - 运行测试验证没有闭包bug

## 4. 代码复用优化

- [ ] 4.1 统一日期格式化
  - 检查所有使用独立 `formatDate` 的组件
  - 替换为使用 `shared/lib/utils.ts` 中的版本
  - ScriptCard.tsx: 使用共享版本
  - VersionList.tsx: 使用共享版本
  - 删除组件中的独立 `formatDate` 函数
  - 运行测试验证日期显示正确

- [ ] 4.2 抽取Store异步模式
  - 创建 `apps/web/src/shared/lib/create-async-store.ts` 工厂函数
  - 或创建 `useAsyncOperation` hook (已在1.2完成)
  - 重构 `apps/web/src/entities/script/model/store.ts` 使用新模式
  - 重构 `apps/web/src/entities/version/model/store.ts` 使用新模式
  - 重构 `apps/web/src/entities/character/model/store.ts` 使用新模式
  - 运行测试验证store功能

- [ ] 4.3 统一UI样式
  - ScriptMetadataPanel.tsx: 使用 `shared/ui/Input/Input` 组件
  - App.tsx: 使用 `shared/ui/Input/Input` 组件
  - 替换所有重复的输入框className
  - 替换所有重复的卡片className为使用 `Card` 组件
  - 运行UI测试验证样式一致

- [ ] 4.4 抽取预览文本逻辑
  - 创建 `apps/web/src/shared/lib/script-utils.ts`
  - 添加 `getScriptPreview` 函数
  - 重构 `entities/script/ui/ScriptCard.tsx` 使用共享函数
  - 重构 `components/ScriptList/ScriptCard.tsx` 使用共享函数
  - 删除组件中的独立 `getPreview` 函数
  - 运行测试验证预览文本正确

## 5. 类型安全改进

- [ ] 5.1 修复TipTap扩展的any类型
  - 为 `SlashCommand.ts` 中的 suggestion props 定义类型
  - 为 `CharacterMention.ts` 中的 suggestion props 定义类型
  - 导入 `SuggestionProps` 类型或创建自定义类型
  - 替换所有 `any` 为具体类型
  - 添加JSDoc注释说明类型
  - 运行类型检查验证类型安全

- [ ] 5.2 修复API响应的any类型
  - 为 API 响应定义类型接口
  - 替换所有 `(response as any)` 为具体类型
  - 为 ScriptCanvas API 响应添加类型
  - 为其他 API 响应添加类型
  - 运行类型检查验证类型安全

## 6. 文档和测试

- [ ] 6.1 添加组件文档
  - 为新的共享UI组件添加JSDoc注释
  - 为新的hooks添加使用示例
  - 为重构的组件添加变更日志注释
  - 创建 `apps/web/docs/ARCHITECTURE.md` 说明项目架构
  - 添加 React 19 + React Compiler 使用说明

- [ ] 6.2 补充测试覆盖
  - 为共享UI组件添加单元测试
  - 为自定义hooks添加单元测试
  - 为重构的页面组件添加集成测试
  - 验证 React Compiler 优化效果
  - 运行测试覆盖率报告

- [ ] 6.3 代码审查
  - 提交Pull Request进行代码审查
  - 处理代码审查反馈
  - 合并到主分支
