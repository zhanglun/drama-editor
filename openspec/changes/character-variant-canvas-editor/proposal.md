# 角色形象画布编辑器 (Character Variant Canvas Editor)

## Why

在剧本创作过程中，同一个角色往往会在不同场景、不同时期呈现出不同的形象和状态。例如：
- 主角从青年到中年的形象演变
- 同一角色在不同场景中的服装、妆容变化
- 角色的替身、分身、回忆中的形象

现有的角色管理仅支持扁平的角色列表，无法表达这种复杂的层次关系和演变过程。编剧需要一种直观的方式来管理角色的多个形象及其关系，以便更好地组织和可视化剧本中的角色网络。

## What Changes

### 新增能力

- **角色形象系统**：支持角色衍生出多个形象（Variant），形象可继续衍生子形象，形成树状层级结构
- **形象-场景关联**：每个形象可以关联多个剧本场景，记录该形象在哪些场景中出现
- **无限画布编辑器**：使用 React Flow 实现可视化节点编辑器，支持：
  - 拖拽创建、编辑角色和形象节点
  - 可视化展示角色-形象-场景的关系图谱
  - 缩放、平移、分组等画布操作
  - 节点间的连线表示衍生关系和场景关联

### 数据模型扩展

- **BREAKING**: 扩展现有 `characters` 表，增加形象元数据字段
- 新增 `character_variants` 表：存储形象数据及邻接表层级关系（parent_variant_id）
- 新增 `variant_scenes` 表：存储形象与场景的关联关系

### UI 变更

- 新增 `/scripts/:id/characters/canvas` 路由：角色画布编辑器页面
- 保留现有角色列表页面，作为简化视图入口
- 画布编辑器支持双视图切换：画布视图 / 列表视图

## Capabilities

### New Capabilities

- `character-variant-hierarchy`: 角色形象的层级管理能力，支持角色衍生形象、形象再衍生，形成树状层级结构（单父节点）
- `variant-scene-linking`: 形象与场景的关联能力，支持一个形象关联多个场景，一个场景包含多个形象
- `canvas-based-editor`: 基于 React Flow 的无限画布编辑器，提供节点创建、连线、布局、缩放等可视化交互能力
- `character-graph-persistence`: 角色关系图的持久化存储，支持画布布局状态保存和恢复

### Modified Capabilities

- `character-management`: 现有角色管理能力需要扩展，支持形象数据的创建和编辑（不是简单的增删改，而是支持层级结构）

## Impact

### 前端影响

- 新增依赖：`@xyflow/react`（React Flow v12）
- 新增页面：`apps/web/src/pages/CharacterCanvasPage.tsx`
- 新增 feature：`apps/web/src/features/character-canvas/`
- 扩展 entity：`apps/web/src/entities/character/` 增加形象相关逻辑
- 扩展类型：`apps/web/src/shared/types/character.ts` 增加 Variant 类型

### 后端影响

- 新增数据库迁移：`supabase/migrations/002_character_variants.sql`
- 扩展 models：`apps/server/internal/models/` 增加 Variant 相关模型
- 新增 services：`apps/server/internal/services/variant_service.go`
- 新增 handlers：`apps/server/internal/handlers/variant_handler.go`
- 扩展 API：新增 `/api/scripts/:id/variants` 系列端点

### 数据库影响

- 扩展 `characters` 表：添加 `traits`、`color`、`canvas_position` 等 JSONB 字段
- 新增 `character_variants` 表：邻接表模式，通过 `parent_variant_id` 构建层级树
- 新增 `variant_scenes` 表：存储形象-场景关联

### 兼容性

- 现有角色列表功能保持兼容，形象作为可选扩展数据
- 旧剧本不使用形象系统时，画布编辑器显示扁平角色列表
