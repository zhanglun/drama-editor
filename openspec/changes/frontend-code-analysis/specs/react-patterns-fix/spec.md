## ADDED Requirements

### Requirement: Keys must be stable and unique
List items MUST have stable, unique keys. The index of an item in an array MUST NOT be used as the key.

#### Scenario: Character list rendering
- **WHEN** rendering a list of characters in CharacterList.tsx or CharacterPanel.tsx
- **THEN** each character item MUST use character.id or character.name (if unique) as the key, not the array index

#### Scenario: Line numbers rendering
- **WHEN** rendering line numbers in ScriptEditor.tsx
- **THEN** each line MUST use a unique identifier (e.g., line number) as the key, not the array index

#### Scenario: Diff lines rendering
- **WHEN** rendering diff lines in DiffViewer.tsx
- **THEN** each line MUST use a unique identifier (e.g., `${lineNumber}-${type}`) as the key, not the array index

#### Scenario: Traits rendering
- **WHEN** rendering traits in TraitsEditor.tsx
- **THEN** each trait MUST use trait.id or generate unique ID as the key, not the array index

### Requirement: useEffect dependencies must be complete
All useEffect hooks MUST include all values from the component scope that are used inside the effect in the dependency array.

#### Scenario: Editor effect dependencies
- **WHEN** useEffect in ScriptEditor.tsx uses calculateLineHeights function
- **THEN** calculateLineHeights MUST be:
  - Included in the dependency array, or
  - Wrapped in useCallback with proper dependencies

#### Scenario: Auto-save effect dependencies
- **WHEN** useEffect in use-auto-save.ts uses multiple values
- **THEN** all used values MUST be included in the dependency array
- **AND** ESLint exhaustive-deps rule MUST NOT report warnings

### Requirement: any type must be eliminated
The any type MUST NOT be used except in exceptional circumstances where TypeScript cannot express the type. When any is used, a comment MUST explain why.

#### Scenario: TipTap extension types
- **WHEN** TipTap extension files (SlashCommand.ts, CharacterMention.ts) use any for suggestion props
- **THEN** the files MUST:
  - Import proper types from @tiptap/core
  - Or add a comment explaining why any is necessary

#### Scenario: API response types
- **WHEN** components cast API responses to any
- **THEN** proper types MUST be defined and used instead

#### Scenario: Canvas position types
- **WHEN** Canvas.tsx casts position updates to any
- **THEN** proper types for canvas position MUST be defined

### Requirement: ESLint react-hooks rules must be enabled
The ESLint plugin `eslint-plugin-react-hooks` MUST be configured with the `exhaustive-deps` rule enabled to catch dependency issues automatically.

#### Scenario: ESLint configuration
- **WHEN** the project ESLint configuration is set up
- **THEN** the react-hooks/exhaustive-deps rule MUST be:
  - Enabled in .eslintrc or eslint.config.js
  - Set to "error" level (not "warn")

### Requirement: Derived state must not be in useState
State that can be computed from props or other state MUST NOT be stored in useState. It MUST be computed during render.

#### Scenario: Form derived state
- **WHEN** a component has state that can be computed from other state (e.g., fullName from firstName + lastName)
- **THEN** the derived state MUST be computed during render, not stored in useState

#### Scenario: Filtering derived state
- **WHEN** a component filters a list based on search input
- **THEN** the filtered list MUST be computed during render (no useMemo needed with React Compiler), not stored in useState
