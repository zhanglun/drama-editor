# Drama Editor

一个基于 Web 的剧本创作和编辑工具，专为短剧创作者设计。

## 技术栈

### 前端
- React 18
- Vite
- Tailwind CSS
- TipTap (富文本编辑器)
- Zustand (状态管理)
- Radix UI (无样式组件库)

### 后端
- Go
- Gin (Web 框架)

### 数据库
- Supabase (PostgreSQL + JSONB)

## 项目结构

```
drama-editor/
├── apps/
│   ├── web/              # React 前端
│   └── server/           # Go 后端
├── packages/
│   └── shared/           # 共享类型定义
├── supabase/
│   └── migrations/       # 数据库迁移文件
└── package.json
```

## MVP 功能

### 核心功能
- 📝 **剧本在线编辑** - 基于 TipTap 的富文本编辑器，支持场景、对白、动作、转场等元素
- 👥 **角色管理** - 自动提取角色，支持角色面板管理
- 📚 **版本历史** - 创建、浏览、删除版本快照
- 🔍 **Diff 对比** - 左右对比版本差异，支持恢复历史版本
- 📤 **导出功能** - 支持 PDF、DOCX、TXT 三种格式导出

### 编辑器功能
- 场景标题 (Scene Heading)
- 角色对白 (Dialogue)
- 动作描述 (Action)
- 转场 (Transition)
- 富文本格式化（粗体、斜体）
- 撤销/重做
- 字符计数

### UI/UX
- 响应式设计
- 加载状态骨架屏
- 错误边界
- Toast 通知
- 确认对话框
- 键盘快捷键

## 开发指南

### 前置要求

- Node.js >= 18
- pnpm >= 8
- Go >= 1.21

### 安装依赖

```bash
pnpm install
```

### 环境配置

创建 `.env` 文件：

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

### 启动前端开发服务器

```bash
pnpm dev
```

### 启动后端服务

```bash
pnpm server
```

## 用户指南

### 创建剧本
1. 点击「新建剧本」按钮
2. 输入剧本标题
3. 开始编写内容

### 编辑剧本
- 使用工具栏插入场景、对白、动作、转场
- 支持粗体 (Ctrl+B)、斜体 (Ctrl+I) 格式化
- 内容会自动保存

### 版本管理
1. 点击「保存版本」创建版本快照
2. 在版本历史中浏览所有版本
3. 使用 Diff 功能对比版本差异
4. 可恢复到任意历史版本

### 导出剧本
1. 点击「导出」按钮
2. 选择导出格式（PDF/DOCX/TXT）
3. 下载文件

## 键盘快捷键

| 快捷键 | 功能 |
|--------|------|
| Ctrl/Cmd + S | 保存剧本 |
| Ctrl/Cmd + B | 粗体 |
| Ctrl/Cmd + I | 斜体 |
| Ctrl/Cmd + Z | 撤销 |
| Ctrl/Cmd + Shift + Z | 重做 |

## License

MIT
