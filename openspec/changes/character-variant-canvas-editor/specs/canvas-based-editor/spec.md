# 画布编辑器 (Canvas Based Editor)

## ADDED Requirements

### Requirement: 画布基础交互

系统 SHALL 提供无限画布，支持平移和缩放操作。

#### Scenario: 平移画布
- **WHEN** 用户在画布空白处拖拽鼠标或使用双指拖动
- **THEN** 画布视图平移到新位置

#### Scenario: 缩放画布
- **WHEN** 用户使用鼠标滚轮或双指捏合
- **THEN** 画布视图缩放，支持 10%-200% 缩放范围

#### Scenario: 重置视图
- **WHEN** 用户点击"适应画布"按钮
- **THEN** 画布自动调整缩放和平移，使所有节点可见

### Requirement: 节点操作

系统 SHALL 允许用户在画布上创建、移动、编辑和删除节点。

#### Scenario: 拖拽创建角色节点
- **WHEN** 用户从工具栏拖拽"角色"图标到画布
- **THEN** 系统在画布上创建新的角色节点

#### Scenario: 移动节点
- **WHEN** 用户拖拽节点到新位置
- **THEN** 节点移动到新位置，连线自动跟随

#### Scenario: 选中节点
- **WHEN** 用户点击节点
- **THEN** 节点显示选中状态，显示操作工具栏

#### Scenario: 多选节点
- **WHEN** 用户按住 Shift 键点击多个节点或在画布上框选
- **THEN** 所有点击的节点被选中，可批量操作

#### Scenario: 删除节点
- **WHEN** 用户选中节点后按 Delete 键或点击删除按钮
- **THEN** 系统删除节点及其关联的连线

### Requirement: 连线操作

系统 SHALL 允许用户创建和管理节点之间的连线。

#### Scenario: 创建层级连线
- **WHEN** 用户从节点 A 的输出端口拖拽到节点 B 的输入端口
- **THEN** 系统创建从 A 到 B 的层级关系连线

#### Scenario: 删除连线
- **WHEN** 用户点击连线并按 Delete 键
- **THEN** 系统删除该连线及对应的关系

#### Scenario: 连线样式区分
- **WHEN** 系统渲染连线时
- **THEN** 层级关系使用实线，场景关联使用虚线

### Requirement: 节点类型和样式

系统 SHALL 提供不同类型和样式的节点以区分角色和形象。

#### Scenario: 角色节点样式
- **WHEN** 系统渲染角色节点
- **THEN** 节点使用较大尺寸、圆角矩形、显示头像和名称

#### Scenario: 形象节点样式
- **WHEN** 系统渲染形象节点
- **THEN** 节点使用中等尺寸、圆角矩形、显示图片和名称

#### Scenario: 节点颜色自定义
- **WHEN** 用户在节点详情中设置颜色
- **THEN** 节点边框和标题背景使用该颜色

### Requirement: 画布工具栏

系统 SHALL 提供画布工具栏，包含常用操作。

#### Scenario: 显示工具栏
- **WHEN** 画布加载完成
- **THEN** 画布左侧或顶部显示工具栏，包含：选择、添加角色、添加形象、缩放控制

#### Scenario: 缩放控制
- **WHEN** 用户点击工具栏的缩放按钮（+/-）
- **THEN** 画布放大或缩小 10%

#### Scenario: 迷你地图
- **WHEN** 画布包含超过 10 个节点
- **THEN** 右下角显示迷你地图，显示当前视口位置

### Requirement: 撤销和重做

系统 SHALL 支持画布操作的撤销和重做。

#### Scenario: 撤销上一步操作
- **WHEN** 用户按 Ctrl+Z 或点击撤销按钮
- **THEN** 系统撤销上一步画布操作（节点创建、移动、删除、连线）

#### Scenario: 重做操作
- **WHEN** 用户按 Ctrl+Shift+Z 或点击重做按钮
- **THEN** 系统重做上一步被撤销的操作

#### Scenario: 撤销步数限制
- **WHEN** 用户执行超过 50 步操作
- **THEN** 最早的撤销记录被丢弃

### Requirement: 键盘快捷键

系统 SHALL 支持常用键盘快捷键。

#### Scenario: 删除选中节点
- **WHEN** 用户选中节点后按 Delete 或 Backspace
- **THEN** 系统删除选中的节点

#### Scenario: 全选节点
- **WHEN** 用户按 Ctrl+A
- **THEN** 系统选中画布上所有节点

#### Scenario: 取消选中
- **WHEN** 用户按 Escape
- **THEN** 系统取消所有选中状态

### Requirement: 上下文菜单

系统 SHALL 提供右键上下文菜单。

#### Scenario: 节点右键菜单
- **WHEN** 用户右键点击节点
- **THEN** 显示菜单：编辑、复制、删除、添加子形象、关联场景

#### Scenario: 画布空白处右键菜单
- **WHEN** 用户右键点击画布空白处
- **THEN** 显示菜单：粘贴、添加角色、适应画布

### Requirement: 触摸设备支持

系统 SHALL 提供基本的触摸设备支持。

#### Scenario: 触摸平移和缩放
- **WHEN** 用户在触摸设备上使用双指
- **THEN** 支持平移和捏合缩放

#### Scenario: 触摸选择节点
- **WHEN** 用户点击节点
- **THEN** 节点被选中并显示操作按钮

### Requirement: 性能要求

系统 SHALL 确保画布在合理规模下流畅运行。

#### Scenario: 渲染性能
- **WHEN** 画布包含 50 个节点和 100 条连线
- **THEN** 交互响应时间 < 100ms

#### Scenario: 大规模画布提示
- **WHEN** 画布节点数超过 100
- **THEN** 系统显示性能提示，建议分组或折叠节点
