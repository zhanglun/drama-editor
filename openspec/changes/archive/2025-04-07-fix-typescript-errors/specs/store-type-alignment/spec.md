## MODIFIED Requirements

### Requirement: Store API Call Type Alignment

Store 层调用 API 函数时，必须正确处理 `ApiResponse<T>` 返回类型。

#### Scenario: Store handles ApiResponse correctly

- **WHEN** store 中的 action 调用 API 函数
- **THEN** 必须正确处理 `ApiResponse<T>` 类型
- **AND** 检查 `response.error` 并抛出异常
- **AND** 从 `response.data` 提取实际数据

#### Scenario: createScript action handles API response

- **WHEN** store 的 `createScript` action 调用 `api.createScript`
- **THEN** 必须传递正确的参数格式（对象而非字符串）
- **AND** 必须检查 `response.error`
- **AND** 必须从 `response.data` 提取返回的 script

#### Scenario: updateScript action handles API response

- **WHEN** store 的 `updateScript` action 调用 `api.updateScript`
- **THEN** 必须传递正确的参数格式（包含 content 字段的对象）
- **AND** 必须检查 `response.error`
- **AND** 必须从 `response.data` 提取返回的 script

### Requirement: Store Type Definitions Match Implementation

Store 的 TypeScript 类型定义必须与实际实现一致。

#### Scenario: ScriptStore interface matches store implementation

- **WHEN** 定义 `ScriptStore` 接口
- **THEN** 所有 action 的类型签名必须与实现一致
- **AND** 返回类型必须与实际返回值匹配
- **AND** 参数类型必须与 API 期望的类型匹配
