## Why

当前剧本编辑器缺少便捷的角色引用功能。虽然 CharacterMention 扩展代码已存在，但：
1. **未集成到编辑器** - 扩展没有在 ScriptEditor 中启用
2. **样式缺失** - 当前实现插入纯文本，缺少视觉区分度
3. **用户体验差** - 用户无法通过 @ 快速插入角色，需手动输入

现在补全此功能可以显著提升剧本编写效率，让角色引用更加直观和便捷。

## What Changes

### 1. 角色数据初始化（修复 CharacterPanel 显示问题）
- **在 loadScript 时初始化 characters** - 如果后端数据缺少 characters 字段，从内容中自动提取
- **在 createScript 时初始化 content** - 新剧本包含空的 characters 数组
- **CharacterPanel 自动提取** - 如果 characters 为空但有内容，自动提取并更新

### 2. 启用 CharacterMention 扩展
- **在 ScriptEditor 中集成现有扩展**
- **实现自定义 mention 节点样式** - 替换纯文本为带样式的内联节点
  - 圆角边框：6px border-radius
  - 背景色：使用主题色背景
  - 不可编辑为纯文本
- **集成角色数据源** - 从当前剧本的 characters 列表获取选项
- **优化下拉菜单 UI** - 保持现有搜索和列表功能

## Capabilities

### New Capabilities

无需创建新能力，现有 `character-mention` spec 已涵盖此功能需求。

### Modified Capabilities

- **character-mention**: 修改实现方式
  - **原需求**: "角色提及有特殊样式"（已定义但未实现）
  - **新增细节**: 明确样式规范（圆角 6px、背景色、内联节点类型）
  - **实现要求**: 从纯文本插入改为自定义节点类型，确保视觉一致性

## Impact

### 代码影响
- `apps/web/src/components/Editor/ScriptEditor.tsx` - 集成 CharacterMention 扩展
- `apps/web/src/extensions/CharacterMention.ts` - 修改为插入自定义节点
- `apps/web/src/extensions/MentionList.tsx` - 可能需要样式调整

### 数据流
- 角色数据源：`scriptStore.currentScript.content.characters`
- 插入内容：从 `type: 'text'` 改为自定义 `characterMention` 节点类型

### 依赖
- TipTap Mention 扩展或自定义 Node 扩展
- 现有 Tippy.js 弹出层
- 现有角色列表数据源

### 风险
- 低风险：扩展已存在，主要是集成和样式调整
- 兼容性：需确保旧剧本中无 mention 节点，无需迁移
