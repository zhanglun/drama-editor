## Context

### 当前架构

```
App.tsx
  └── ScriptEditorPage
        ├── ScriptEditor (TipTap)
        │     ├── Toolbar (四个按钮)
        │     └── EditorContent
        └── ScriptMetadataPanel (条件渲染)

缺失：
- CharacterPanel 未集成
- onChange 回调未传递
- 保存逻辑断链
```

### 现有代码资产

| 组件/模块 | 状态 | 说明 |
|----------|------|------|
| ScriptEditor.tsx | 可用 | TipTap 编辑器，已集成四个扩展 |
| CharacterPanel.tsx | 可用 | 角色管理面板，未集成到页面 |
| scriptStore.ts | 可用 | Zustand store，含 updateScript 方法 |
| Scene/Dialogue/Action/Transition.ts | 可用 | TipTap 扩展，只有 setXxx 命令 |
| use-auto-save.ts (features) | 可用 | 正确的自动保存实现，未使用 |
| useAutoSave.ts (hooks) | 不可用 | 有语法错误 |

### 约束条件

- 后端 API 已正常工作，PATCH `/api/scripts/:id` 可接收 content 字段
- 使用 TipTap 作为编辑器引擎
- 使用 Zustand 进行状态管理
- 使用 Tailwind CSS 进行样式

## Goals / Non-Goals

**Goals:**
1. 修复保存断链，编辑器内容变化后自动保存到后端
2. 集成角色面板到编辑器页面，支持收起/展开
3. 改进四个按钮行为，点击后插入新的格式化空行
4. 实现 Slash Command (/) 快速插入各种元素
5. 实现 Mention (@) 触发角色选择
6. 实现行号/场景号显示，支持两种模式切换

**Non-Goals:**
- 协作功能（多人实时编辑）
- 版本历史功能的改进
- 导出功能的改进
- 移动端适配

## Decisions

### D1: 保存策略

**选择**: 使用防抖 + 自动保存

**方案对比**:
| 方案 | 优点 | 缺点 |
|------|------|------|
| 手动保存 | 用户可控 | 容易忘记保存 |
| 实时保存 | 不丢失数据 | 频繁请求，性能差 |
| 防抖保存 | 平衡性能和体验 | 需要配置合适的延迟 |

**实现**: 使用 features/auto-save/model/use-auto-save.ts 的实现（500ms 防抖）

### D2: 按钮行为改进

**选择**: 添加 insertXxx 命令，保留 setXxx 命令

**理由**:
- 语义清晰：insertScene 表示插入新行，setScene 表示转换当前行
- 向后兼容：不破坏现有功能
- 灵活性：两种行为都可用

**实现**:
```typescript
// 在每个扩展中添加
insertScene: (attributes?) => ({ commands }) => {
  return commands.insertContent({
    type: this.name,
    content: [{ type: 'text', text: '' }]
  })
}
```

### D3: Slash Command 实现

**选择**: 使用 @tiptap/suggestion + 自定义 UI

**方案对比**:
| 方案 | 优点 | 缺点 |
|------|------|------|
| TipTap UI Components | 开箱即用 | 需要 tiptap-pro 付费 |
| 自定义实现 | 完全可控 | 开发成本高 |
| tippy.js + suggestion | 灵活、免费 | 需要自己写 UI |

**实现**: 使用 @tiptap/extension-mention 的 suggestion 机制 + tippy.js 定位

### D4: Mention 触发角色选择

**选择**: 使用 @tiptap/extension-mention

**实现**:
- 触发字符: `@`
- 数据源: scriptStore.currentScript.content.characters
- 渲染: 自定义 MentionList 组件

### D5: 行号显示

**选择**: 使用 TipTap Extension + CSS Grid 布局

**实现**:
- 创建 LineNumbers 扩展
- 使用 CSS Grid 将行号和编辑器并排
- 同步滚动位置
- 场景号模式: 检测 Scene 节点并编号

### D6: 角色面板布局

**选择**: 右侧边栏，可收起

**布局**:
```
┌─────────────────────────────────────────────────────────────┐
│                        Toolbar                               │
├─────────────────────────────────────┬───────────────────────┤
│                                     │                       │
│          Editor Area                │    Character Panel    │
│                                     │    (可收起)           │
│                                     │                       │
└─────────────────────────────────────┴───────────────────────┘
```

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|----------|
| 自动保存失败导致数据丢失 | 添加保存状态指示器，失败时 toast 提示 |
| Slash Command 与现有快捷键冲突 | 使用 / 作为触发符，避免常用快捷键 |
| Mention 下拉菜单定位问题 | 使用 tippy.js 处理边界检测 |
| 行号同步滚动性能 | 使用虚拟滚动或 CSS sticky |
| 角色面板占用编辑空间 | 默认收起，用户可选择展开 |

## Migration Plan

### Phase 1: 基础修复（无破坏性）

1. 修复 App.tsx 中的保存链路
2. 集成 CharacterPanel 到编辑器页面
3. 添加 insertXxx 命令到现有扩展

### Phase 2: 新增功能（独立模块）

1. 添加 SlashCommand 扩展
2. 添加 CharacterMention 扩展
3. 添加 LineNumbers 扩展

### 回滚策略

每个功能都是独立的扩展或组件，可以单独禁用：
- Slash Command: 移除扩展即可
- Mention: 移除扩展即可
- 行号: 移除 LineNumbers 组件即可
- 角色面板: 设置默认收起

## Open Questions

1. **行号/场景号切换位置**: 放在工具栏还是设置面板？
   - 建议: 工具栏，因为会频繁切换

2. **Slash Command 菜单项**: 除了四种元素，还需要哪些？
   - 建议: 先实现基础四种，后续可扩展

3. **角色面板默认状态**: 默认展开还是收起？
   - 建议: 默认收起，首次访问时显示引导提示
