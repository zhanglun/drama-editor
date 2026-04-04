## Overview

用户需要在剧本列表页面查看和管理剧本。

项目已有 `ScriptList` 和 `ScriptCard` 组件，虽然功能已完整实现，但未被集成到 `App.tsx` 的 `ScriptsPage` 跑由。
此外，需要将删除功能从物理删除改为逻辑删除（软删除），以符合数据安全最佳实践。

- 保留删除记录便于审计
- 支持误删恢复
- 维护数据完整性

- 界面显示剧本的标题、创建时间、最后修改时间

- 支持搜索和排序功能（已存在于 `ScriptList` 组件中）
- 保持加载状态和错误处理
- 添加空状态处理

- 集成到 `App.tsx` 中 `ScriptsPage` 路由
- 替换当前的占位符

- 显示剧本卡片列表
- 点击卡片跳转到剧本详情页
- 支持删除操作，删除时显示二次确认对话框
- 后端实现逻辑删除
- 添加 `deleted_at` 字段
- 修改查询逻辑过滤已删除记录
- 前端处理删除响应，更新本地状态

## API Endpoints
- `GET /api/scripts` - 获取剧本列表
- `DELETE /api/scripts/:id` - 逻辑删除剧本

## Data Models
- `Script` 模型添加 `deleted_at` 字段
- 前端 `Script` 类型添加 `deleted_at` 可选字段

## UI Components
### ScriptListPage
- 使用现有的 `ScriptList` 组件
- 显示标题、创建时间、最后修改时间
- 支持搜索和排序
- 处理加载和错误状态
- 空状态展示

### 搜索功能 (已实现)
- **搜索字段**：
  - 标题 (title)
  - 描述 (description)
  - 内容 (content.text)
- **搜索行为**：
  - 不区分大小写
  - 实时搜索（onChange 触发）
  - 支持模糊匹配
  - 显示搜索结果数量（"X of Y scripts"）
- **空搜索结果**：
  - 显示 "No results found" 提示
  - 提供 "Clear search" 按钮

### 排序功能 (已实现)
- **排序字段**：
  - `title` - 按标题字母顺序
  - `updated_at` - 按最后修改时间（默认）
  - `created_at` - 按创建时间
- **排序方向**：
  - 升序 (asc)
  - 降序 (desc)
  - 点击同一字段时切换方向
  - 切换字段时默认降序
- **UI 交互**：
  - 显示当前排序字段（高亮按钮）
  - 显示排序方向图标（上下箭头）
  - 活动排序字段使用 indigo 色彩标识

### ScriptCard
- 显示剧本标题、预览内容、时间信息
- 悬停显示删除按钮
- 点击跳转到详情页
- 支持删除确认对话框

### DeleteConfirmationDialog
- 使用 Radix UI Dialog 组件
- 显示删除确认消息
- 簡洁的按钮样式
- 确认和取消操作

## Error Handling
- API 错误时显示错误提示
- 删除失败时显示错误消息
- 网络错误时显示重试选项
## States
- scripts: Script[] - 剧本列表
- isLoading: boolean - 加载状态
- error: string | null - 错误信息
- searchQuery: string - 搜索关键词
- sortBy: 'title' | 'updated_at' | 'created_at' - 排序字段
- sortOrder: 'asc' | 'desc' - 排序方向
## Component Integration
在 `App.tsx` 中的 `ScriptsPage` 组件:
```tsx
function ScriptsPage() {
  return <ScriptList />
}
```
