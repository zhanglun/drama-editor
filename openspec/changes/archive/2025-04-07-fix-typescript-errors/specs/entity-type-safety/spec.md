## MODIFIED Requirements

### Requirement: Entity Selectors Type Safety

实体 selectors 必须引用实际存在的 store，并且类型定义必须与 store 实现一致。

#### Scenario: Character selectors reference valid store

- **WHEN** 代码调用 `useCharacters()` 或 `useIsLoading()` selectors
- **THEN** selectors 必须成功导入并引用存在的 `useCharacterStore`
- **AND** 返回的类型必须与 store 中定义的状态类型一致

#### Scenario: Version selectors reference valid store

- **WHEN** 代码调用 `useVersions()` 或 `useCurrentVersion()` selectors
- **THEN** selectors 必须成功导入并引用存在的 `useVersionStore`
- **AND** 返回的类型必须与 store 中定义的状态类型一致

### Requirement: Entity Exports Completeness

实体层的顶层导出必须只包含实际存在的成员。

#### Scenario: Entities index exports only existing members

- **WHEN** 代码从 `entities/index.ts` 导入成员
- **THEN** 所有导出的成员必须在其对应的子模块中实际存在
- **AND** 不导出不存在的 store、类型或组件

#### Scenario: Character entity exports are valid

- **WHEN** 代码从 `entities/character` 导入成员
- **THEN** 所有导出的 selectors、types、UI 组件必须实际存在
- **AND** 导出的类型必须与实现一致

#### Scenario: Version entity exports are valid

- **WHEN** 代码从 `entities/version` 导入成员
- **THEN** 所有导出的 selectors、types、API、UI 组件必须实际存在
- **AND** 导出的类型必须与实现一致
