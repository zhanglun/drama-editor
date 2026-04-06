# 角色关系图持久化 (Character Graph Persistence)

## ADDED Requirements

### Requirement: 自动保存画布状态

系统 SHALL 自动保存画布的布局状态，包括节点位置、视口状态。

#### Scenario: 编辑后自动保存
- **WHEN** 用户在画布上移动节点、缩放或平移视口
- **THEN** 系统在操作后 2 秒内自动保存到服务器

#### Scenario: 防抖保存
- **WHEN** 用户连续快速操作
- **THEN** 系统使用防抖机制，等待 2 秒无新操作后再保存

#### Scenario: 离开页面前保存
- **WHEN** 用户关闭或离开画布页面
- **THEN** 系统尝试保存未保存的更改

### Requirement: 手动保存画布状态

系统 SHALL 允许用户手动触发保存画布状态。

#### Scenario: 点击保存按钮
- **WHEN** 用户点击工具栏的"保存"按钮
- **THEN** 系统立即保存画布状态并显示保存成功提示

#### Scenario: 快捷键保存
- **WHEN** 用户按 Ctrl+S
- **THEN** 系统立即保存画布状态

### Requirement: 加载画布状态

系统 SHALL 在打开画布时自动加载之前保存的状态。

#### Scenario: 打开画布时恢复布局
- **WHEN** 用户打开角色画布编辑器
- **THEN** 系统从服务器加载之前保存的节点位置和视口状态

#### Scenario: 首次打开画布
- **WHEN** 用户首次打开未保存过画布状态的剧本
- **THEN** 系统使用自动布局或默认布局显示节点

#### Scenario: 加载失败回退
- **WHEN** 画布状态加载失败
- **THEN** 系统显示错误提示并使用默认布局

### Requirement: 保存数据格式

系统 SHALL 使用结构化格式保存画布状态。

#### Scenario: 保存节点位置
- **WHEN** 系统保存画布状态
- **THEN** 每个节点保存 id、type、position (x, y)

#### Scenario: 保存视口状态
- **WHEN** 系统保存画布状态
- **THEN** 保存当前视口的 zoom 和 position (x, y)

#### Scenario: 数据格式示例
```json
{
  "nodes": [
    {
      "id": "char-uuid-1",
      "type": "character",
      "position": { "x": 100, "y": 200 }
    },
    {
      "id": "variant-uuid-1",
      "type": "variant",
      "position": { "x": 350, "y": 200 }
    }
  ],
  "viewport": {
    "x": 0,
    "y": 0,
    "zoom": 1.0
  }
}
```

### Requirement: 数据一致性

系统 SHALL 确保画布状态与角色/形象数据的一致性。

#### Scenario: 删除角色时清理画布状态
- **WHEN** 用户删除角色或形象
- **THEN** 系统同时从画布状态中删除对应节点的位置记录

#### Scenario: 处理孤立节点位置
- **WHEN** 画布状态中存在已删除角色的位置记录
- **THEN** 系统加载时忽略孤立记录

### Requirement: 版本兼容性

系统 SHALL 处理不同版本的画布状态数据。

#### Scenario: 向后兼容旧版本数据
- **WHEN** 系统加载旧版本的画布状态（缺少某些字段）
- **THEN** 系统使用默认值填充缺失字段

#### Scenario: 升级数据格式
- **WHEN** 系统保存画布状态
- **THEN** 使用最新版本的数据格式

### Requirement: 并发编辑处理

系统 SHALL 处理多设备并发编辑的情况（非实时协作）。

#### Scenario: 最后写入胜出
- **WHEN** 用户在设备 A 和设备 B 同时编辑画布
- **THEN** 最后保存的更改覆盖之前的更改

#### Scenario: 显示保存时间戳
- **WHEN** 画布加载时
- **THEN** 显示上次保存的时间

### Requirement: 导出和导入

系统 SHALL 支持画布状态的导出和导入（可选功能）。

#### Scenario: 导出画布状态
- **WHEN** 用户点击"导出画布"
- **THEN** 系统下载包含画布状态的 JSON 文件

#### Scenario: 导入画布状态
- **WHEN** 用户点击"导入画布"并选择 JSON 文件
- **THEN** 系统验证文件格式并应用画布状态

### Requirement: 错误处理

系统 SHALL 妥善处理保存和加载过程中的错误。

#### Scenario: 保存失败提示
- **WHEN** 画布状态保存失败（网络错误、服务器错误）
- **THEN** 系统显示错误提示并保留本地状态，允许重试

#### Scenario: 数据损坏恢复
- **WHEN** 加载的画布状态数据损坏或格式错误
- **THEN** 系统使用默认布局并提示用户
