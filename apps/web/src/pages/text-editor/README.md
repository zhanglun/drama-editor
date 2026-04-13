# text-editor 模块说明

## 模块目标

`text-editor` 是一个围绕“纯文本文本剧本”构建的小型子模块，负责三件事：

1. 把用户输入的剧本文本解析成结构化数据
2. 将结构化数据渲染为可读的预览界面
3. 为编辑器高亮、统计、预览提供一致的语法基础

它当前主要服务于 `TextEditorPage.tsx`。

## 目录结构

```text
text-editor/
  README.md
  parseScript.ts
  ScriptPreview.tsx
  script-fixtures.ts
  parseScript.test.ts
  script-syntax/
    constants.ts
    bracket-events.ts
    patterns.ts
    index.ts
    patterns.test.ts
```

## 文件职责

### `parseScript.ts`

把纯文本解析为 `Scene[]`。

当前支持的 block 类型包括：

- `episodeHeader`
- `sectionHeader`
- `dialogue`
- `action`
- `audioEvent`
- `uiEvent`
- `bracketNote`

### `ScriptPreview.tsx`

消费 `parseScript()` 的输出，负责把解析结果渲染成卡片式预览。

### `script-syntax/constants.ts`

维护语法词表和标签表，例如：

- `AUDIO_EVENT_LABELS`
- `UI_EVENT_LABELS`
- 场次时间词
- 场次内外景词
- 章节标题词

如果只是新增标签，优先改这里。

### `script-syntax/bracket-events.ts`

维护 `[]` / `【】` 强标记相关 regex，包括：

- `audioEvent`
- `uiEvent`
- 兜底 `bracketNote`

### `script-syntax/patterns.ts`

维护剧本文本基础语法 regex，包括：

- 集头
- 章节头
- 场次头
- 对白
- 动作
- 舞台指示
- 人物行

这里按用途区分为：

- `HIGHLIGHT`
- `PARSE`
- `STATS`

不要在页面或解析器里再单独手写一套同语义 regex。

### `script-fixtures.ts`

维护共享样本源。

用途：

- 给测试复用
- 作为当前支持语法的标准输入样例集合

### `parseScript.test.ts`

验证解析器是否能正确输出结构化 block。

### `script-syntax/patterns.test.ts`

验证共享语法 regex 是否仍然匹配预期样本。

## 设计原则

### 1. 共享语法层是单一来源

高亮、解析、统计都应优先复用 `script-syntax/*` 中的语法定义。

允许不同用途使用不同 regex 版本，例如：

- `SCENE_HEADER_HIGHLIGHT_REGEX`
- `SCENE_HEADER_PARSE_REGEX`

但它们必须来自同一套语法设计，而不是各写各的。

### 2. 高亮与解析不要求完全同一条 regex

这是刻意设计：

- 高亮可以稍宽松，目标是让用户看得见结构
- 解析可以更严格，目标是让结构化结果稳定

### 3. 方括号事件优先走标签表驱动

新增类似：

- `[直播提示：...]`
- `[人群声：...]`

时，优先修改标签表，而不是直接在业务文件里新增一条独立 regex。

### 4. 未识别的强标记先兜底，不要误判

对于未知的 `[...]` 或 `【...】`，优先进入：

- `bracketNote`

而不是误判成：

- `dialogue`
- `character`

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

例如新增：

```text
[人群声：会场逐渐喧闹]
```

修改顺序：

1. 改 `script-syntax/constants.ts`
2. 看 `parseScript.test.ts` 是否需要补样例
3. 运行测试

### 场景 2：新增一个 UI 事件标签

例如新增：

```text
[直播提示：主播已上线]
```

修改顺序：

1. 改 `script-syntax/constants.ts`
2. 补 `script-fixtures.ts`
3. 补测试
4. 运行测试

### 场景 3：新增一种新的文本结构

例如新增“转场”。

修改顺序建议：

1. 在 `script-syntax/patterns.ts` 定义 regex
2. 在 `TextEditorPage.tsx` 接入高亮 token
3. 在 `parseScript.ts` 接入结构化解析
4. 在 `ScriptPreview.tsx` 增加展示
5. 在 fixtures 和测试中补样例

## 测试方式

运行定向测试：

```bash
pnpm --filter @drama-editor/web test -- src/pages/text-editor/parseScript.test.ts src/pages/text-editor/script-syntax/patterns.test.ts
```

## 不建议做的事

- 不要在 `TextEditorPage.tsx` 重新堆一套独立 regex
- 不要在 `parseScript.ts` 再复制共享语法常量
- 不要把导出模块那套 `parseScript` 混进这个子模块
- 不要把 Theme 配置和语法定义混为一层

## 一句话理解

如果你要修改 `text-editor`：

- **改语法，先看 `script-syntax`**
- **改解析，去 `parseScript.ts`**
- **改预览，去 `ScriptPreview.tsx`**
- **改样例，去 `script-fixtures.ts` 和测试**
