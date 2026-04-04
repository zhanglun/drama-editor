## Why

当前剧本编辑器的基础功能存在三个关键问题，导致用户无法正常使用：

1. **保存断链**：编辑器内容变化后不会保存到后端。App.tsx 没有传递 `onChange` 回调给 ScriptEditor，导致用户输入丢失。
2. **角色面板未集成**：CharacterPanel 组件已实现，但未添加到编辑器页面，用户无法管理角色。
3. **按钮行为不直观**：场景/对白/动作/转场四个按钮使用 `setNode()` 转换当前段落，用户点击后感觉"没反应"。

同时，为提升编辑效率，需要增加专业剧本编辑器的核心能力：slash command 快速插入、@ 触发角色选择、行号/场景号显示。

## What Changes

### Phase 0: 基础修复（让编辑器能用）

- **修复** 保存断链 - App.tsx 传递 onChange，ScriptEditor 每次 onUpdate 触发保存（带防抖）
- **集成** 角色面板 - 在编辑器页面添加 CharacterPanel，支持收起/展开
- **改进** 按钮行为 - 添加 `insertScene/insertDialogue/insertAction/insertTransition` 命令，点击后插入新行而非转换

### Phase 1: 核心编辑增强

- **新增** Slash Command - 输入 `/` 触发命令菜单，快速插入场景/对白/动作/转场/注释等
- **新增** Mention 功能 - 输入 `@` 触发角色选择下拉菜单
- **新增** 行号显示 - 支持两种模式（传统行号/场景号），可切换

## Capabilities

### New Capabilities

- `auto-save`: 自动保存编辑器内容到后端，带防抖和保存状态提示
- `character-panel`: 角色管理面板，展示剧本中所有角色，支持快速新增、编辑、删除
- `insert-element`: 在光标处插入格式化元素（场景/对白/动作/转场），替代原有的转换行为
- `slash-commands`: 通过 `/` 触发的命令菜单，快速插入各种剧本元素
- `character-mention`: 通过 `@` 触发的角色选择器，用于对白中快速引用角色
- `line-numbers`: 行号/场景号显示，支持两种模式切换

### Modified Capabilities

（无 - 这些都是新增能力，不修改现有规格）

## Impact

### 前端代码

- `apps/web/src/App.tsx` - ScriptEditorPage 添加 onChange 回调和 CharacterPanel
- `apps/web/src/components/Editor/ScriptEditor.tsx` - 集成新扩展，改进保存逻辑
- `apps/web/src/extensions/` - 添加 insertXxx 命令，新增 SlashCommand 和 CharacterMention 扩展
- `apps/web/src/components/Character/CharacterPanel.tsx` - 集成到编辑器页面

### 新增依赖

- `@tiptap/extension-mention` - Mention 扩展
- `@tiptap/suggestion` - Suggestion 工具
- `tippy.js` - 下拉菜单定位

### 后端代码

无需修改（后端 API 已支持内容保存）
