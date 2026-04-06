## 0. 角色数据初始化（修复 CharacterPanel 显示）

- [x] 0.1 在 `apps/web/src/stores/scriptStore.ts` 的 `loadScript` 方法中添加角色提取逻辑
  - 如果 `script.content` 存在但 `characters` 字段缺失,调用 `extractCharacters` 提取角色
  - 确保加载旧剧本时也能正确显示角色列表
- [x] 0.2 在 `apps/web/src/stores/scriptStore.ts` 的 `createScript` 方法中初始化 content
  - 新剧本创建时包含 `content: { type: 'doc', content: [], characters: [], metadata: {} }`
  - 避免 content 为 null 导致后续问题
- [x] 0.3 在 `apps/web/src/components/Character/CharacterPanel.tsx` 中添加防御性提取
  - 如果 `characters` 为空但有内容，调用 `extractCharacters` 作为 fallback
  - 确保即使数据初始化失败，用户也能看到角色列表
  - 同时保持原有的添加/编辑/删除逻辑
- [x] 0.4 测试验证
  - 创建新剧本，检查 CharacterPanel 是否显示"0个角色"（空状态正确）
  - 加载包含角色对白的旧剧本，检查是否正确提取并显示角色
  - 编辑剧本添加新角色，检查角色列表是否实时更新

## 1. 创建自定义 Mention Node 类型

- [x] 1.1 创建 `apps/web/src/extensions/CharacterMentionNode.ts` 文件
- [x] 1.2 定义 `characterMention` 节点 schema（group: inline, atom: true, attrs: id/label）
- [x] 1.3 实现 `parseHTML` 方法解析 `<span data-character-mention>` 标签
- [x] 1.4 实现 `renderHTML` 方法渲染带样式的 span 元素（包含 @ 前缀）
- [x] 1.5 在 `apps/web/src/extensions/index.ts` 中导出 CharacterMentionNode

## 2. 修改 CharacterMention 扩展

- [ ] 2.1 更新 `CharacterMention.ts` 中的 command 方法，使用自定义节点替代纯文本
- [ ] 2.2 修改 insertContent 从 `type: 'text'` 改为 `type: 'characterMention'`
- [ ] 2.3 确保 mention 节点插入时包含正确的 id 和 label 属性
- [ ] 2.4 确保插入后光标位置正确（在 mention 节点之后）

## 3. 更新样式定义

- [x] 3.1 在 `apps/web/src/index.css` 中添加 `.character-mention` 样式类
- [x] 3.2 设置圆角为 6px（`border-radius: 6px`）
- [x] 3.3 设置背景色为浅蓝色（`background-color: #E0F2FE`）
- [x] 3.4 添加其他样式（padding, color, font-weight, user-select）
- [x] 3.5 确保 mention 在编辑器中正确显示（inline-flex, contenteditable: false）

## 4. 集成到 ScriptEditor

- [x] 4.1 在 `ScriptEditor.tsx` 中导入 CharacterMention 扩展
- [x] 4.2 在 useEditor 的 extensions 数组中添加 CharacterMention.configure()
- [x] 4.3 从 scriptStore 获取当前剧本的 characters 列表
- [x] 4.4 将 characters 数组传递给 CharacterMention.configure({ characters })
- [x] 4.5 添加 useEffect 监听 characters 变化，动态更新扩展配置

## 5. 测试与验证

- [x] 5.1 测试 @ 触发下拉菜单是否正常显示
- [x] 5.2 测试搜索过滤功能（输入部分角色名）
- [x] 5.3 测试鼠标点击选择角色
- [x] 5.4 测试键盘导航（↑↓ 和 Enter）
- [x] 5.5 验证插入的 mention 节点样式（圆角 6px、背景色）
- [x] 5.6 验证 mention 节点的不可编辑性（Backspace 删除整个节点）
- [x] 5.7 测试动态角色列表更新（添加/删除角色后 @ 菜单是否更新）
- [x] 5.8 测试空角色列表的边界情况
- [x] 5.9 验证编辑器 JSON 输出包含正确的 characterMention 节点结构
- [x] 5.10 测试保存和加载包含 mention 的剧本内容

## 6. 文档与清理

- [x] 6.1 更新 README.md 中的功能列表（如需要）
- [x] 6.2 确保代码注释清晰说明关键逻辑
- [x] 6.3 检查是否有重复或未使用的代码（如 CharacterList.tsx）
