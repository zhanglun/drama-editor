## Why

当前编辑器只支持基础的剧本格式（场景、对白、动作、转场）和简单的粗体/斜体格式化，缺乏现代富文本编辑器应有的文本组织能力。创作者在编写剧本时需要：
- 使用多级标题组织剧本结构（如幕、场、段落）
- 使用引用标记重要参考内容或注释
- 更好的自定义节点视图体验

这些限制使得编辑器在复杂剧本创作场景下体验不佳。现在增强这些能力可以提升产品竞争力，使其更接近 Notion 等现代编辑器的用户体验。

## What Changes

### 1. 富文本编辑能力增强
- 添加多级标题支持（H1-H6）
- 添加引用块支持（blockquote）
- 添加无序列表和有序列表支持
- 添加代码块支持
- 添加分割线支持

### 2. 自定义节点视图增强
- 改进场景节点（Scene）的视觉设计和交互
- 改进对白节点（Dialogue）的视觉设计和交互
- 改进动作节点（Action）的视觉设计和交互
- 改进转场节点（Transition）的视觉设计和交互
- 添加节点工具栏，支持快速操作

### 3. 斜杠命令增强
- 扩展斜杠命令菜单，包含新增的文本格式选项
- 添加命令搜索/过滤功能

## Capabilities

### New Capabilities
- `rich-text-enhancement`: 多级标题、引用、列表、代码块等 Notion 风格的富文本编辑功能
- `custom-node-views`: 增强的场景/对白/动作/转场自定义节点视图，包含更好的视觉设计和交互体验

### Modified Capabilities
- `script-editor`: 修改现有编辑器规格，增加对多级标题、引用、列表等文本格式的要求

## Impact

### 受影响的代码
- `apps/web/src/components/Editor/ScriptEditor.tsx` - 需要添加新的 TipTap 扩展
- `apps/web/src/components/Editor/nodeviews/*` - 所有自定义节点视图需要重新设计
- `apps/web/src/extensions/` - 可能需要创建新的扩展或修改现有扩展
- `apps/web/src/extensions/SlashCommand.ts` - 斜杠命令需要扩展

### 依赖变更
- 可能需要添加 TipTap 扩展：
  - `@tiptap/extension-heading` - 标题支持
  - `@tiptap/extension-blockquote` - 引用块支持
  - `@tiptap/extension-bullet-list` - 无序列表
  - `@tiptap/extension-ordered-list` - 有序列表
  - `@tiptap/extension-code-block` - 代码块
  - `@tiptap/extension-horizontal-rule` - 分割线

### API 影响
- 剧本内容 JSON 格式需要支持新的节点类型
- 向后兼容性：需要确保旧的剧本数据仍能正常加载

### UI/UX 影响
- 工具栏需要添加新的格式化按钮
- 斜杠命令菜单需要扩展
- 自定义节点的视觉样式将发生显著变化
