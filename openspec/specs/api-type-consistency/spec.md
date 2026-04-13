## MODIFIED Requirements

### Requirement: API Response Type Consistency

所有 API 函数必须统一返回 `Promise<ApiResponse<T>>` 类型，其中 `ApiResponse<T>` 包含 `data` 和可选的 `error` 字段。

#### Scenario: Script API returns consistent response type

- **WHEN** 调用 `createScript({ title })` API
- **THEN** 函数必须返回 `Promise<ApiResponse<Script>>`
- **AND** 返回值包含 `{ data: Script, error?: string }`

#### Scenario: Version API returns consistent response type

- **WHEN** 调用 `createVersion(scriptId, content)` API
- **THEN** 函数必须返回 `Promise<ApiResponse<ScriptVersion>>`
- **AND** 返回值包含 `{ data: ScriptVersion, error?: string }`

#### Scenario: API functions accept correct parameter types

- **WHEN** 调用 API 函数
- **THEN** 参数类型必须与函数签名完全匹配
- **AND** 不会出现 `string` 传递给期望 `{ title: string }` 的参数

### Requirement: API Export Correctness

API 层的导出必须正确，不导出不存在的成员。

#### Scenario: Script API exports are valid

- **WHEN** 从 `script/api/index.ts` 导入成员
- **THEN** 所有导出的函数必须实际存在
- **AND** 不会导出不存在的 `getScript`（应从 `get-script.ts` 导入）

#### Scenario: Version API exports are valid

- **WHEN** 从 `version/api/index.ts` 导入成员
- **THEN** 所有导出的函数必须实际存在
- **AND** 函数返回类型必须正确
