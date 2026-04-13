# text-editor 模块说明

## 模块目标

`text-editor` 是一个围绕“纯文本文本剧本工作区”构建的子模块，负责四件事：

1. 维护完整剧本文本的编辑、导入和导航状态
2. 把完整文本解析成目录索引和结构化预览
3. 提供可单独复用的编辑器、预览器、目录组件
4. 提供一套可组装的工作区壳子与编辑面板策略

它当前主要服务于 `TextEditorPage.tsx`，但不再是只能整页使用的一次性实现。

## 目录结构

```text
text-editor/
  README.md
  index.ts
  model/
    ScriptWorkspaceContext.tsx
    episode-directory.ts
    parseScript.ts
    script-stats.ts
    useScriptWorkspaceController.ts
    index.ts
  script-syntax/
    constants.ts
    bracket-events.ts
    patterns.ts
    index.ts
    patterns.test.ts
  ui/
    primitives/
      EpisodeDirectory.tsx
      MonacoScriptEditor.tsx
      ScriptPreview.tsx
      monaco-theme.ts
      index.ts
    panels/
      ScriptEditPanel.tsx
      ScriptImportEmptyState.tsx
      ScriptPreviewPanel.tsx
      ScriptWorkspaceHeader.tsx
      index.ts
    workspace/
      ScriptWorkspaceShell.tsx
      index.ts
  script-fixtures.ts
  parseScript.test.ts
```

## 分层职责

### `model/*`

headless 状态与解析层，不依赖具体 UI。

- `useScriptWorkspaceController.ts`
  对外暴露完整工作区状态：
  - `content`
  - `isEmpty`
  - `episodes`
  - `activeEpisode`
  - `activeTab`
  - `stats`
  - `setContent`
  - `setActiveTab`
  - `selectEpisode`
  - `importFile`
- `episode-directory.ts`
  把完整剧本文本切成 `EpisodeSegment[]`，供目录导航、滚动定位和统计使用。
- `parseScript.ts`
  把纯文本解析为 `Scene[]`，供预览渲染使用；解析出的 block 还会保留源 `line` 信息，供精确定位使用。
- `script-stats.ts`
  提供字数、去空格字符数、阅读时长等统计。
- `ScriptWorkspaceContext.tsx`
  为整套工作区组件提供可选 context，减少内部 props drilling。

### `ui/primitives/*`

可单独复用的基础组件，尽量不带业务流程。

- `MonacoScriptEditor.tsx`
  纯编辑器 primitive，只负责完整剧本文本的编辑、高亮和定位。当前 episode 导航会把目标行尽量对齐到编辑区域顶部。
- `ScriptPreview.tsx`
  纯预览 primitive，只负责解析文本并渲染预览卡片。当前会优先按精确行锚点定位，再回退到场次级定位。
- `EpisodeDirectory.tsx`
  纯目录 primitive，只负责展示目录和触发导航。
- `monaco-theme.ts`
  Monaco 语法高亮与主题注册。

### `ui/panels/*`

带业务语义的面板层。

- `ScriptEditPanel.tsx`
  编辑 tab 的业务面板。内部根据空状态策略决定：
  - 直接进入编辑器
  - 展示导入空状态
  - 渲染业务自定义空状态
- `ScriptImportEmptyState.tsx`
  默认业务空状态，占位承接后续真正的上传组件。
- `ScriptPreviewPanel.tsx`
  对预览 primitive 做容器包装，统一工作区内样式。
- `ScriptWorkspaceHeader.tsx`
  工作区头部，包括文件名、统计、导入入口。

### `ui/workspace/*`

整页布局壳子。

- `ScriptWorkspaceShell.tsx`
  负责左目录 + 右侧 tab 工作区的布局，不持有业务状态。

## 设计原则

### 1. 共享语法层是单一来源

高亮、解析、统计都应优先复用 `script-syntax/*` 中的语法定义。

### 2. 完整剧本是唯一编辑源

目录切换只负责定位，不负责切分右侧编辑器内容。

### 3. 编辑器 primitive 不承载业务空状态

`MonacoScriptEditor` 只负责编辑；“空状态展示上传组件还是直接开始编辑”应由 `ScriptEditPanel` 决定。

### 4. 工作区能力既能整套用，也能拆开用

优先保持：

- `useScriptWorkspaceController`
- `EpisodeDirectory`
- `MonacoScriptEditor`
- `ScriptPreview`

都可以单独使用。

### 5. reveal 行为优先精确定位

- episode 导航统一使用 `EpisodeSegment.startLine`
- preview 优先滚动到带对应 `line` 的渲染块
- 只有在精确锚点不存在时才回退到场次级锚点
- editor 不应使用“居中定位”作为 episode 导航默认行为

## 当前支持的语法类型

### 集头

- `第1集`
- `第一集`
- `EP.1`
- `S01E01`

### 章节头

- `梗概`
- `人物小传`
- `1、人物小传`

### 场次头

- `1-1 上午 内 客厅`
- `1－1A 夜 外 街道`

### 出场人物

- `出场人物：宋也、林晚`

### 对白

- `宋也：你为什么不说话？`
- `宋也：（低声）你为什么不说话？`

### 动作

- `▲他低头点燃香烟。`

### 音频事件

- `[音效：手机震动]`
- `[BGM：压抑的弦乐渐起]`
- `[环境音：酒店大厅背景音乐]`

### UI 事件

- `[系统提示：任务已完成]`
- `[弹幕：这也太虐了]`
- `[界面操作：点击提交按钮]`
- `[提示条：剩余时间 10 秒]`
- `[礼物特效：满屏烟花]`

### 兜底标记

- `[未知标签：保留兜底]`
- `【特写：镜头推近眼睛】`

## 修改入口建议

### 场景 1：新增一个音频事件标签

1. 改 `script-syntax/constants.ts`
2. 看 `parseScript.test.ts` 是否需要补样例
3. 运行测试

### 场景 2：新增一个 UI 事件标签

1. 改 `script-syntax/constants.ts`
2. 补 `script-fixtures.ts`
3. 补测试
4. 运行测试

### 场景 3：新增一种新的文本结构

例如新增“转场”。

1. 在 `script-syntax/patterns.ts` 定义 regex
2. 在 `ui/primitives/monaco-theme.ts` 接入高亮 token
3. 在 `model/parseScript.ts` 接入结构化解析
4. 在 `ui/primitives/ScriptPreview.tsx` 增加展示
5. 在 fixtures 和测试中补样例

### 场景 4：调整编辑 tab 空状态

优先改 `ui/panels/ScriptEditPanel.tsx`：

1. `emptyStateStrategy="import"`：默认显示业务上传空状态
2. `emptyStateStrategy="editable"`：空状态直接进入编辑器
3. `emptyStateStrategy="custom"`：由业务侧传 `renderEmptyState`

## 测试方式

运行定向测试：

```bash
pnpm --filter @drama-editor/web test -- src/pages/text-editor/parseScript.test.ts src/pages/text-editor/script-syntax/patterns.test.ts
```

导航相关改动后，建议再手动验证：

1. 左侧点击当前附近集数时，preview 保持短距离平滑滚动
2. 左侧跨很多集跳转时，preview 不出现很长的滚动动画
3. editor 点击目录后，目标行应贴近顶部而不是居中

## 不建议做的事

- 不要在 `TextEditorPage.tsx` 重新堆一套独立 regex
- 不要在 `model/parseScript.ts` 再复制共享语法常量
- 不要把目录解析、预览解析、编辑器空状态混写在一个组件里
- 不要把 `MonacoScriptEditor` 做成绑定业务上传流程的大组件

## 一句话理解

如果你要修改 `text-editor`：

- **改工作区状态，去 `model/useScriptWorkspaceController.ts`**
- **改目录解析，去 `model/episode-directory.ts`**
- **改预览解析，去 `model/parseScript.ts`**
- **改预览精确定位，优先看 `model/parseScript.ts` 和 `ui/primitives/ScriptPreview.tsx`**
- **改纯编辑器，去 `ui/primitives/MonacoScriptEditor.tsx`**
- **改编辑 tab 空状态，去 `ui/panels/ScriptEditPanel.tsx`**
- **改整页布局，去 `ui/workspace/ScriptWorkspaceShell.tsx`**
