## 1. 基础修复：保存链路

- [x] 1.1 在 App.tsx 中为 ScriptEditor 传递 onChange 回调
- [x] 1.2 实现 handleContentChange 函数，调用 scriptStore.updateScript
- [x] 1.3 集成 features/auto-save/model/use-auto-save.ts 实现自动保存
- [x] 1.4 添加保存状态指示器（Saving.../Saved/Save failed）
- [x] 1.5 实现 Ctrl+S 手动保存快捷键
- [ ] 1.6 测试保存功能：编辑内容后刷新页面验证数据持久化

## 2. 基础修复:角色面板集成
- [x] 2.1 在 ScriptEditorPage 中添加 CharacterPanel 组件
- [x] 2.2 实现面板收起/展开状态管理
- [x] 2.3 添加收起/展开按钮和过渡动画
- [x] 2.4 调整布局:编辑器 + 角色面板并排显示
- [x] 2.5 测试角色面板:添加、编辑、删除角色

## 3. 基础修复:按钮行为改进
- [x] 3.1 在 Scene.ts 中添加 insertScene 命令
- [x] 3.2 在 Dialogue.ts 中添加 insertDialogue 命令
- [x] 3.3 在 Action.ts 中添加 insertAction 命令
- [x] 3.4 在 Transition.ts 中添加 insertTransition 命令
- [x] 3.5 修改 ScriptEditor.tsx 按钮处理，使用 insertXxx 替代 setXxx
- [x] 3.6 添加插入后的视觉反馈（flash 高亮效果）
- [x] 3.7 添加键盘快捷键（Ctrl+1/2/3/4）
- [ ] 3.8 测试按钮行为：点击后插入新行而非转换当前行

## 4. 新功能：Slash Command（/ 触发）

- [x] 4.1 安装依赖：@tiptap/extension-mention @tiptap/suggestion tippy.js
- [x] 4.2 创建 SlashCommand.ts 扩展
- [x] 4.3 创建 SlashMenu.tsx 组件（命令菜单 UI）
- [x] 4.4 实现命令项：scene、dialogue、action、transition、note
- [x] 4.5 实现搜索过滤功能
- [x] 4.6 实现键盘导航（上下箭头、Enter、Escape）
- [x] 4.7 集成到 ScriptEditor
- [x] 4.8 添加 tippy.js 样式
- [ ] 4.9 测试 Slash Command：输入 / 显示菜单，选择插入元素

## 5. 新功能：Mention（@ 触发角色选择）

- [ ] 5.1 创建 CharacterMention.ts 扩展
- [ ] 5.2 创建 MentionList.tsx 组件（角色选择 UI）
- [ ] 5.3 从 scriptStore 读取角色列表作为数据源
- [ ] 5.4 实现角色搜索过滤
- [ ] 5.5 实现选择后插入角色名
- [ ] 5.6 添加 mention 样式（背景色、圆角）
- [ ] 5.7 集成到 ScriptEditor
- [ ] 5.8 测试 Mention：输入 @ 显示角色列表，选择插入

## 6. 新功能：行号显示

## 6. 新功能?行号显示

- [x] 6.1 创建 LineNumbers.tsx 组件
- [x] 6.2 实现传统行号模式（每行一个数字)
- [x] 6.3 实现场号模式(每个场景一个编号)
- [x] 6.4 实模式切换按钮(放在工具栏)
            - [x] 6.5 同步编辑器行号的滚动位置
            - [x] 6.6 实现场号点击导航功能
            - [x] 6.7 添加行号样式
            - [ ] 6.8 测试行号:验证两种模式正确显示和切换

## 7. 集成测试

- [ ] 7.1 端到端测试：编辑 → 自动保存 → 刷新验证
- [ ] 7.2 端到端测试：添加角色 → @ 提及 → 验证插入
- [ ] 7.3 端到端测试：/ 命令 → 选择元素 → 验证插入
- [ ] 7.4 端到端测试：按钮点击 → 验证插入新行
- [ ] 7.5 端到端测试：行号模式切换 → 验证显示正确
- [ ] 7.6 修复发现的 bug
