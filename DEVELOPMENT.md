# MVP 开发计划

## 项目概述

Drama Editor 是一个基于 Web 的剧本创作和编辑工具，专为短剧创作者设计。

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | React 18 + Vite + Tailwind CSS + TipTap + Zustand + Radix UI |
| 后端 | Go + Gin |
| 数据库 | Supabase (PostgreSQL + JSONB) |

---

## MVP 功能清单

### P0 - 核心功能

| # | 功能 | 描述 | 前端 | 后端 |
|---|------|------|------|------|
| 1 | 剧本在线编辑 | TipTap 富文本编辑器 | ✅ | ✅ |
| 2 | 角色管理 | 角色 CRUD、关联剧本 | ✅ | ✅ |
| 3 | 版本历史 | 每次保存生成版本快照 | ✅ | ✅ |
| 4 | Diff 对比 | 左右对比两个版本差异 | ✅ | ❌ |
| 5 | 导出 | PDF / DOCX / TXT | ✅ | ✅ |

---

## 开发阶段

### 阶段 1：基础设施 (1-2 天)

- [x] Monorepo 项目结构
- [x] 前端项目初始化
- [x] 后端项目初始化
- [x] 数据库 Schema 设计
- [ ] Supabase 项目创建和配置
- [ ] 环境变量配置

### 阶段 2：剧本编辑器 (3-4 天)

#### 后端
- [ ] Scripts API 实现
  - GET /api/scripts - 获取剧本列表
  - GET /api/scripts/:id - 获取单个剧本
  - POST /api/scripts - 创建剧本
  - PUT /api/scripts/:id - 更新剧本
  - DELETE /api/scripts/:id - 删除剧本

#### 前端
- [ ] 剧本列表页面
- [ ] 剧本编辑器组件 (TipTap)
  - [ ] 基础工具栏 (加粗、斜体、标题)
  - [ ] 场景标记扩展
  - [ ] 角色对话扩展
  - [ ] 自动保存功能
- [ ] 剧本编辑页面

### 阶段 3：角色管理 (2-3 天)

#### 后端
- [ ] Characters API 实现
  - GET /api/scripts/:scriptId/characters - 获取角色列表
  - GET /api/scripts/:scriptId/characters/:id - 获取单个角色
  - POST /api/scripts/:scriptId/characters - 创建角色
  - PUT /api/scripts/:scriptId/characters/:id - 更新角色
  - DELETE /api/scripts/:scriptId/characters/:id - 删除角色

#### 前端
- [ ] 角色管理面板组件
- [ ] 角色创建/编辑对话框
- [ ] 角色列表展示
- [ ] 编辑器中快速插入角色

### 阶段 4：版本历史 (2-3 天)

#### 后端
- [ ] Versions API 实现
  - GET /api/scripts/:scriptId/versions - 获取版本列表
  - GET /api/scripts/:scriptId/versions/:id - 获取单个版本
  - POST /api/scripts/:scriptId/versions - 创建版本快照

#### 前端
- [ ] 版本历史侧边栏
- [ ] 版本列表展示
- [ ] 版本快照创建触发
- [ ] 版本恢复功能

### 阶段 5：Diff 对比 (2-3 天)

#### 前端
- [ ] Diff 对比组件
  - [ ] 左右分栏布局
  - [ ] 差异高亮显示
  - [ ] 同步滚动
- [ ] 版本选择器
- [ ] Diff 页面路由

### 阶段 6：导出功能 (2-3 天)

#### 后端
- [ ] 导出 API 实现
  - GET /api/export/scripts/:id/pdf - 导出 PDF
  - GET /api/export/scripts/:id/docx - 导出 DOCX
  - GET /api/export/scripts/:id/txt - 导出 TXT
- [ ] PDF 生成 (使用 go-pdf/fpdf 或类似库)
- [ ] DOCX 生成 (使用 unioffice 或类似库)

#### 前端
- [ ] 导出按钮组件
- [ ] 导出格式选择
- [ ] 导出进度提示

---

## 文件结构

```
apps/web/src/
├── components/
│   ├── Editor/
│   │   ├── ScriptEditor.tsx      # TipTap 编辑器主组件
│   │   ├── Toolbar.tsx           # 工具栏
│   │   ├── extensions/
│   │   │   ├── SceneMark.ts      # 场景标记扩展
│   │   │   └── Dialogue.ts       # 角色对话扩展
│   │   └── hooks/
│   │       └── useAutoSave.ts    # 自动保存 Hook
│   ├── Character/
│   │   ├── CharacterPanel.tsx    # 角色管理面板
│   │   ├── CharacterDialog.tsx   # 角色编辑对话框
│   │   └── CharacterList.tsx     # 角色列表
│   ├── Version/
│   │   ├── VersionSidebar.tsx    # 版本历史侧边栏
│   │   ├── VersionList.tsx       # 版本列表
│   │   └── VersionItem.tsx       # 版本项
│   ├── Diff/
│   │   ├── DiffViewer.tsx        # Diff 对比主组件
│   │   ├── DiffPane.tsx          # 单侧面板
│   │   └── DiffLine.tsx          # 差异行
│   └── Export/
│       ├── ExportButton.tsx      # 导出按钮
│       └── ExportDialog.tsx      # 导出对话框
├── stores/
│   ├── scriptStore.ts            # 剧本状态
│   ├── characterStore.ts         # 角色状态
│   └── versionStore.ts           # 版本状态
└── services/
    ├── api.ts                    # API 基础配置
    ├── scriptService.ts          # 剧本 API
    ├── characterService.ts       # 角色 API
    └── versionService.ts         # 版本 API
```

---

## TipTap 编辑器扩展设计

### 场景标记 (SceneMark)
```typescript
// 场景标记节点
{
  type: 'sceneMark',
  attrs: {
    location: '内景/外景',
    place: '咖啡馆',
    time: '日/夜'
  }
}
```

### 角色对话 (Dialogue)
```typescript
// 角色对话节点
{
  type: 'dialogue',
  attrs: {
    character: '角色ID或名称'
  },
  content: [
    { type: 'text', text: '对话内容' }
  ]
}
```

---

## API 设计

### Scripts

```
GET    /api/scripts           # 获取剧本列表
GET    /api/scripts/:id       # 获取单个剧本
POST   /api/scripts           # 创建剧本
PUT    /api/scripts/:id       # 更新剧本
DELETE /api/scripts/:id       # 删除剧本
```

### Characters

```
GET    /api/scripts/:scriptId/characters           # 获取角色列表
GET    /api/scripts/:scriptId/characters/:id       # 获取单个角色
POST   /api/scripts/:scriptId/characters           # 创建角色
PUT    /api/scripts/:scriptId/characters/:id       # 更新角色
DELETE /api/scripts/:scriptId/characters/:id       # 删除角色
```

### Versions

```
GET    /api/scripts/:scriptId/versions           # 获取版本列表
GET    /api/scripts/:scriptId/versions/:id       # 获取单个版本
POST   /api/scripts/:scriptId/versions           # 创建版本快照
```

### Export

```
GET    /api/export/scripts/:id/pdf    # 导出 PDF
GET    /api/export/scripts/:id/docx   # 导出 DOCX
GET    /api/export/scripts/:id/txt    # 导出 TXT
```

---

## 开发优先级

1. **第一周**：基础设施 + 剧本编辑器基础功能
2. **第二周**：角色管理 + 版本历史
3. **第三周**：Diff 对比 + 导出功能
4. **第四周**：测试 + Bug 修复 + 优化

---

## 环境变量

### 前端 (.env)
```
VITE_API_URL=http://localhost:8080
```

### 后端 (.env)
```
PORT=8080
ENVIRONMENT=development
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-anon-key
```

---

## 下一步行动

1. 创建 Supabase 项目
2. 运行数据库迁移
3. 配置环境变量
4. 安装依赖并启动开发服务器
5. 开始实现剧本编辑器组件
