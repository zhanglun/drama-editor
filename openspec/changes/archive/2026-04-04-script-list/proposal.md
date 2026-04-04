## Why

当前 `ScriptsPage` 组件只是一个占位符，显示"剧本列表页面 - 待实现"。用户无法在 `/scripts` 路由下查看和管理剧本列表。虽然项目中已经存在完整的 `ScriptList` 和 `ScriptCard` 组件实现，但未被集成到主应用路由中。

此外，当前的删除功能使用物理删除，不符合数据安全最佳实践。需要改为逻辑删除（软删除），以便：
- 保留删除记录用于审计
- 支持误删恢复
- 维护数据完整性

## What Changes

- **新增** 剧本列表页面实现，将 `ScriptList` 组件集成到 `ScriptsPage`
- **修改** 删除功能从物理删除改为逻辑删除
- **新增** 后端 `deleted_at` 字段支持逻辑删除
- **新增** 卡片展示创建时间和最后修改时间

## Capabilities

### New Capabilities

- `script-list-page`: 剧本列表页面，展示所有剧本卡片，支持点击进入详情、删除操作

### Modified Capabilities

- `script-deletion`: 修改删除逻辑，从物理删除改为逻辑删除（软删除）

## Impact

- **前端代码**:
  - `App.tsx` 中的 `ScriptsPage` 组件
  - 可能需要调整 `ScriptCard` 组件以显示创建时间

- **后端代码**:
  - `models/script.go` 添加 `DeletedAt` 字段
  - `services/script_service.go` 修改 `List` 方法过滤已删除记录
  - `services/script_service.go` 修改 `Delete` 方法为设置 `deleted_at`

- **数据库**:
  - 需要添加 `deleted_at` 列（可通过 GORM 自动迁移）
