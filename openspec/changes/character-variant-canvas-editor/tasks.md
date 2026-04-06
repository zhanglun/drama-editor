# 实现任务列表

## 1. 数据库迁移

- [x] 1.1 创建数据库迁移文件 `supabase/migrations/002_character_variants.sql`，包含：扩展 `characters` 表（添加 traits、color、canvas_position 字段）、创建 `character_variants` 表（邻接表模式，含 parent_variant_id）、创建 `variant_scenes` 关联表及相关索引
- [x] 1.2 编写迁移回滚脚本（down migration）
- [ ] 1.3 在本地 Supabase 实例上验证迁移执行成功（待 Supabase 环境就绪后验证）

## 2. 后端 API - 数据模型

- [x] 2.1 在 `apps/server/internal/models/` 中创建 `variant.go`，定义 Variant（含 ParentVariantID 字段）、VariantScene GORM 模型
- [x] 2.2 扩展 `apps/server/internal/models/script.go` 中的 Character 模型，添加 Traits、Color、CanvasPosition 字段
- [x] 2.3 定义请求/响应 DTO（CreateVariantRequest、UpdateVariantRequest、VariantResponse、CanvasStateResponse）

## 3. 后端 API - 服务层

- [x] 3.1 创建 `apps/server/internal/services/variant_service.go`，实现 Variant CRUD 操作
- [x] 3.2 实现层级管理逻辑：创建形象时设置 parent_variant_id、查询层级树使用递归 CTE、删除形象时处理子形象（级联或提升）
- [x] 3.3 实现形象-场景关联 CRUD：添加关联、删除关联、批量操作
- [x] 3.4 实现画布状态保存和加载：保存节点位置和视口状态到 JSONB 字段
- [x] 3.5 实现角色更新：扩展 character_service.go 支持更新 color、canvas_position 字段

## 4. 后端 API - 处理器层

- [x] 4.1 创建 `apps/server/internal/handlers/variant_handler.go`，注册路由：
  - `POST /api/scripts/:id/variants` - 创建形象
  - `GET /api/scripts/:id/variants` - 获取形象列表
  - `GET /api/scripts/:id/variants/:vid` - 获取形象详情
  - `PUT /api/scripts/:id/variants/:vid` - 更新形象
  - `DELETE /api/scripts/:id/variants/:vid` - 删除形象
  - `POST /api/scripts/:id/variants/:vid/links` - 添加场景关联
  - `DELETE /api/scripts/:id/variants/:vid/links/:sceneId` - 删除场景关联
- [x] 4.2 扩展角色处理器，支持角色 color 和 canvas_position 更新
- [x] 4.3 添加画布状态端点：
  - `GET /api/scripts/:id/canvas` - 获取画布状态
  - `PUT /api/scripts/:id/canvas` - 保存画布状态
- [x] 4.4 编写 API 请求验证和错误处理

## 5. 前端 - 依赖安装与类型定义

- [x] 5.1 在 `apps/web/` 中安装 `@xyflow/react` 依赖
- [x] 5.2 扩展 `apps/web/src/shared/types/character.ts`，添加 Variant（含 parentVariantId）、VariantScene 类型定义
- [x] 5.3 添加 React Flow 自定义节点类型：CharacterNodeData、VariantNodeData
- [x] 5.4 添加画布状态类型：CanvasState、CanvasViewport

## 6. 前端 - API 层

- [x] 6.1 创建 `apps/web/src/features/character-canvas/api/variants.ts`，封装形象相关 API 调用（CRUD、层级操作、场景关联）
- [x] 6.2 创建画布状态 API 调用（保存/加载）

## 7. 前端 - 状态管理

- [x] 7.1 创建 `apps/web/src/features/character-canvas/model/store.ts`（Zustand store），管理画布状态（nodes、edges、viewport、loading、error）
- [x] 7.2 实现节点操作方法：addNode、updateNode、removeNode、addEdge、removeEdge
- [x] 7.3 实现数据同步方法：syncToServer（防抖保存）、loadFromServer
- [x] 7.4 创建 `apps/web/src/features/character-canvas/model/useNodeOperations.ts` hook，封装节点创建、编辑、删除的交互逻辑
- [x] 7.5 创建 `apps/web/src/features/character-canvas/model/useCanvasSync.ts` hook，处理自动保存和加载

## 8. 前端 - 画布 UI 组件

- [x] 8.1 创建 `CharacterNode.tsx` 自定义节点组件：显示角色头像、名称、形象数量徽章
- [x] 8.2 创建 `VariantNode.tsx` 自定义节点组件：显示形象图片、名称、场景数量徽章、特征标签
- [x] 8.3 创建 `Canvas.tsx` 主画布组件：集成 React Flow、注册自定义节点类型、处理节点和边的变更事件
- [x] 8.4 创建 `NodeToolbar.tsx` 节点工具栏：编辑、删除、添加子形象、关联场景按钮
- [x] 8.5 创建 `CanvasControls.tsx` 画布控制组件：缩放按钮、适应画布、迷你地图开关
- [x] 8.6 实现节点右键上下文菜单
- [x] 8.7 实现键盘快捷键支持（Delete 删除、Ctrl+A 全选、Escape 取消选中）

## 9. 前端 - 页面和路由

- [ ] 9.1 创建 `apps/web/src/pages/CharacterCanvasPage.tsx` 页面组件，布局画布和侧边栏
- [ ] 9.2 添加路由配置：`/scripts/:id/characters/canvas`
- [ ] 9.3 在现有角色列表页面添加"画布视图"切换按钮
- [ ] 9.4 实现画布视图和列表视图的双向切换

## 10. 前端 - 形象编辑面板

- [ ] 10.1 创建形象详情侧边栏面板：显示/编辑名称、描述、图片 URL、颜色、特征属性
- [ ] 10.2 创建场景关联面板：展示已关联场景列表、添加/移除关联
- [ ] 10.3 创建特征属性编辑器：支持动态添加/编辑/删除键值对
- [ ] 10.4 实现从形象跳转到剧本编辑器对应场景的功能

## 11. 集成测试

- [ ] 11.1 验证数据库迁移执行和回滚
- [ ] 11.2 验证后端 API 端点的 CRUD 操作
- [ ] 11.3 验证形象层级关系的创建、查询和删除
- [ ] 11.4 验证形象-场景关联的创建和删除
- [ ] 11.5 验证画布状态的保存和恢复
- [ ] 11.6 验证画布编辑器的基本交互（创建节点、连线、移动、缩放）
- [ ] 11.7 验证与现有角色列表功能的兼容性
