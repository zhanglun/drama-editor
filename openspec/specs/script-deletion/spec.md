## Overview
用户需要删除剧本时，系统将数据标记为已删除，而非真正从数据库中移除。这支持：
- 保留数据用于审计和恢复
- 维护数据完整性
- 符合数据保护最佳实践
- 避免误删导致数据丢失

## API Endpoint
- `DELETE /api/scripts/:id` - 软删除剧本，设置 `deleted_at` 时间戳
## Request
- `id` (path parameter) - 剧本 ID
## Response
- `204 No Content` - 删除成功
- `404 Not Found` - 剧本不存在
- `500 Internal Server Error` - 服务器错误
## Implementation
- 后端 `Delete` 方法设置 `deleted_at = gorm.DeletedAt`
- 后端 `List` 方法添加 `deleted_at IS NULL` 过滤条件
- 前端调用删除 API 后更新本地状态
- 显示成功提示
## Security
- 仅允许已认证用户删除自己的剧本
- 后端验证用户权限（如需要)
- 防止批量删除攻击
