## Context

### 当前状态
- **CharacterMention 扩展已存在** (`extensions/CharacterMention.ts`)，但未集成到 ScriptEditor
- **MentionList 组件已实现** (`extensions/MentionList.tsx`)，包含搜索和列表功能
- **CSS 样式已定义** (`index.css`)，包含下拉菜单和 mention 样式
- **当前实现问题**：选中角色后仅插入纯文本，不符合 spec 要求的"distinct styling"

### 技术栈
- TipTap 编辑器 + `@tiptap/suggestion` 扩展
- Tippy.js 弹出层
- Zustand 状态管理 (`scriptStore`)
- Tailwind CSS 样式

### 约束
- 角色数据源：`scriptStore.currentScript.content.characters`（动态数组）
- 需向后兼容：旧剧本中可能无 mention 节点
- 性能要求：下拉菜单响应速度 < 100ms

## Goals / Non-Goals

**Goals:**
1. 集成 CharacterMention 到 ScriptEditor，使用动态角色列表
2. 创建自定义 TipTap Node 类型替代纯文本插入
3. 实现视觉样式：圆角 6px、背景色、内联显示
4. 保持现有 MentionList 组件和交互逻辑

**Non-Goals:**
- 不修改 CharacterPanel（已完整实现）
- 不添加角色头像/颜色等高级功能
- 不实现 mention 节点的编辑功能（选中后不可修改）
- 不支持 mention 的嵌套或复杂结构

## Decisions

### 决策 1：使用自定义 Node 类型替代纯文本

**方案对比：**
| 方案 | 优点 | 缺点 |
|------|------|------|
| A. 纯文本 + CSS 类 | 简单，无需修改 schema | 不可编辑性差，容易误操作删除 |
| **B. 自定义 Node** ✅ | 语义清晰，可控制编辑行为，支持自定义渲染 | 需要定义 schema 和 renderHTML |

**选择：方案 B - 自定义 Node**

**理由：**
1. Spec 明确要求"non-editable as plain text"，Node 类型可设置 `atom: true` 防止内部编辑
2. 更好的语义化，mention 是独立实体而非格式化文本
3. 便于未来扩展（如点击 mention 跳转到角色详情）
4. TipTap 官方推荐方式，与 `@tiptap/extension-mention` 一致

### 决策 2：Node Schema 设计

```typescript
// characterMention 节点定义
{
  name: 'characterMention',
  group: 'inline',
  inline: true,
  atom: true,  // 不可编辑内部内容
  attrs: {
    id: { default: '' },
    label: { default: '' }
  },
  parseHTML: [{ tag: 'span[data-character-mention]' }],
  renderHTML: ({ HTMLAttributes }) => [
    'span',
    {
      ...HTMLAttributes,
      'data-character-mention': '',
      class: 'character-mention',  // CSS 类名
      contenteditable: 'false'  // 防止编辑
    },
    `@${HTMLAttributes.label}`
  ]
}
```

**关键属性说明：**
- `atom: true` - 节点作为原子单位，无法编辑内部文本
- `contenteditable: 'false'` - DOM 层面防止编辑
- `data-character-mention` - 用于序列化和识别
- 显示格式：`@角色名`（带 @ 前缀，符合用户输入习惯）

### 决策 3：动态角色列表更新策略

**问题：** 角色列表在 `scriptStore` 中动态变化，如何保持 mention 选项同步？

**方案：**
```typescript
// ScriptEditor.tsx
const characters = currentScript?.content?.characters || []

const editor = useEditor({
  extensions: [
    // ... 其他扩展
    CharacterMention.configure({ characters }),
  ],
  // ...
})

// 监听角色列表变化
useEffect(() => {
  if (editor) {
    editor.setOptions({
      extensions: [
        // ... 其他扩展
        CharacterMention.configure({ characters }),
      ]
    })
  }
}, [characters])
```

**备选方案（已拒绝）：**
- ❌ 在 CharacterMention 内部订阅 store - 违反单一职责，扩展应通过配置接收数据
- ❌ 使用全局变量 - 不利于测试和维护

### 决策 4：样式实现方式

**选择：Tailwind CSS + 自定义 CSS 类**

**样式规范：**
```css
.character-mention {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 6px;  /* 用户要求的圆角 */
  background-color: #E0F2FE;  /* 浅蓝色背景 */
  color: #0369A1;
  font-weight: 500;
  cursor: default;
  user-select: all;  /* 点击选中整个 mention */
}
```

**理由：**
1. Tailwind 的 `rounded-md` 是 4px，不符合 6px 要求，需自定义
2. 使用浅蓝色背景与现有角色相关 UI 保持一致
3. `user-select: all` 便于整体复制/删除

## Risks / Trade-offs

### 风险 1：旧剧本兼容性
- **风险：** 旧剧本中无 `characterMention` 节点，可能解析失败
- **缓解：** `parseHTML` 定义确保可解析 `<span data-character-mention>` 标签，旧内容无需迁移（因为之前未实现，无旧 mention 节点）

### 风险 2：性能影响
- **风险：** 角色列表频繁更新导致编辑器重新配置
- **缓解：** 
  - 使用 `useEffect` 依赖数组确保仅在 `characters` 变化时更新
  - TipTap 内部有优化机制，仅更新相关扩展

### 风险 3：编辑器扩展顺序
- **风险：** 扩展顺序可能影响功能（如 SlashCommand 也使用 `@` 触发）
- **缓解：** 
  - SlashCommand 使用 `/` 触发，无冲突
  - 测试多种扩展共存场景

### Trade-off：Node 复杂度 vs. 纯文本
- **选择：** 增加 Node 复杂度以换取更好的语义化和可控制性
- **代价：** 需要定义和维护 schema，序列化/反序列化逻辑稍复杂
- **收益：** 符合 spec 要求，未来可扩展性更好

## Migration Plan

### 部署步骤
1. **开发阶段：**
   - 创建 `CharacterMentionNode.ts` 定义节点类型
   - 修改 `CharacterMention.ts` 使用新 Node 类型
   - 在 `ScriptEditor.tsx` 中集成扩展
   - 更新 `index.css` 样式

2. **测试阶段：**
   - 单元测试：Node schema 解析/渲染
   - 集成测试：下拉菜单交互、角色选择
   - 手动测试：多个角色、空角色列表、搜索过滤

3. **发布阶段：**
   - 无需数据库迁移（旧剧本无 mention 节点）
   - 功能开关：可先在开发环境验证

### 回滚策略
- 如果出现问题，移除 `CharacterMention` 扩展配置即可
- 不影响其他编辑器功能
- 已插入的 mention 节点会显示为普通文本（fallback）

### 决策 5：角色数据初始化策略

**问题：** CharacterPanel 显示"0个角色"，因为 `currentScript.content.characters` 为空或undefined

**根本原因：**
1. **loadScript 时**：后端数据可能缺少 `characters` 字段
2. **createScript 时**：新剧本 `content` 为 null
3. **只有编辑时才提取**：`extractCharacters` 仅在 `ScriptEditor.onChange` 中调用

**解决方案：**
```typescript
// 方案 A：在 loadScript 时初始化 ✅（推荐）
loadScript: async (id: string) => {
  const script = await fetch(...)
  
  // 如果缺少 characters 字段，从内容中提取
  if (script.content && !script.content.characters) {
    script.content.characters = extractCharacters(script.content)
  }
  
  set({ currentScript: script })
}

// 方案 B：在 createScript 时初始化
createScript: async (title: string) => {
  const script = await fetch(..., {
    body: JSON.stringify({
      title,
      description: '',
      content: {
        type: 'doc',
        content: [],
        characters: [],  // ✅ 初始化空数组
        metadata: {}
      }
    })
  })
}

// 方案 C：在 CharacterPanel 中 fallback（备选）
const characters = currentScript?.content?.characters?.length > 0
  ? currentScript.content.characters
  : extractCharacters(currentScript?.content || { type: 'doc', content: [] })
```

**选择：方案 A + B 组合**
- 方案 A：修复现有剧本加载问题
- 方案 B：确保新剧本正确初始化
- 方案 C 作为防御：即使 A/B 失败，CharacterPanel 也能显示数据

**优点：**
- 修复现有数据问题
- 防止未来出现同样问题
- 多层防护确保用户体验

**缺点：**
- 需要修改 store 和后端
- 增加少量计算开销（extractCharacters 调用）

## Open Questions
1. ~~是否需要在 mention 上添加点击交互（如跳转到角色详情）？~~
   - **决策：** 暂不实现，保持简单。可作为后续增强功能

2. ~~mention 的删除行为：Backspace 删除整个节点还是进入内部？~~
   - **决策：** `atom: true` 确保 Backspace 删除整个节点，符合预期

3. **样式颜色选择：** 当前使用浅蓝色，是否需要与其他 UI 保持一致？
   - **待确认：** 检查现有角色相关 UI 的颜色方案

4. **搜索逻辑：** 当前是前缀匹配，是否需要支持任意位置匹配？
   - **当前实现：** `name.toLowerCase().includes(query.toLowerCase())` 已支持任意位置匹配
