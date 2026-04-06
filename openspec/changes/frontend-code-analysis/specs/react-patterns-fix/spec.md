## ADDED Requirements

### Requirement: Keys must be stable and unique
List items MUST have stable, unique keys. The index of an item in an array MUST NOT be used as the key.

#### Scenario: ScriptEditor line numbers rendering
- **WHEN** rendering line numbers in `components/Editor/ScriptEditor.tsx` (line 389)
- **THEN** each line MUST use `lineNumber` as the key, not the array index

#### Scenario: Character list rendering
- **WHEN** rendering a list of characters in `entities/character/ui/CharacterList.tsx` (line 135)
- **THEN** each character item MUST use `character.id` or `character.name` (if unique) as the key

#### Scenario: CharacterPanel trait list rendering
- **WHEN** rendering a list of traits in `components/Character/CharacterPanel.tsx` (line 176)
- **THEN** each trait MUST use `trait.id` or a unique identifier as the key

#### Scenario: DiffViewer diff lines rendering
- **WHEN** rendering diff lines in `features/diff-viewer/ui/DiffViewer.tsx` (line 110)
- **THEN** each line MUST use a unique identifier (e.g., `${lineNumber}-${type}`) as the key

#### Scenario: Skeleton placeholder rendering
- **WHEN** rendering skeleton placeholders in `shared/ui/Skeleton/Skeleton.tsx` (line 52)
- **THEN** each skeleton row MUST use a stable key, not the loop variable `i`

#### Scenario: TraitsEditor traits rendering (2 locations)
- **WHEN** rendering traits in `features/character-canvas/ui/TraitsEditor.tsx` (lines 51 and 65)
- **THEN** each trait MUST use `trait.id` or a generated unique ID as the key

### Requirement: useEffect dependencies must be complete
All useEffect hooks MUST include all values from the component scope that are used inside the effect in the dependency array.

#### Scenario: ScriptEditor calculateLineHeights dependencies (3 effects)
- **WHEN** useEffect in `components/Editor/ScriptEditor.tsx` uses `calculateLineHeights` function (lines 108-113, 153-156, 159-173)
- **THEN** `calculateLineHeights` MUST be:
  - Included in the dependency array, or
  - Wrapped in `useCallback` with proper dependencies

#### Scenario: CanvasContextMenu onClose dependency (2 effects)
- **WHEN** useEffect in `features/character-canvas/ui/CanvasContextMenu.tsx` uses `onClose` callback (lines 28-37, 39-45)
- **THEN** `onClose` MUST be included in the dependency array, or wrapped in `useCallback` at the call site

#### Scenario: HandleMenu onClose dependency
- **WHEN** useEffect in `features/character-canvas/ui/HandleMenu.tsx` uses `onClose` callback (line 19-44)
- **THEN** `onClose` MUST be included in the dependency array

#### Scenario: use-auto-save debouncedSave dependency
- **WHEN** useEffect in `features/auto-save/model/use-auto-save.ts` references `debouncedSave` (line 76-80)
- **THEN** the dependency array MUST correctly reflect all values used inside the effect

### Requirement: any type must be eliminated
The `any` type MUST NOT be used except in exceptional circumstances where TypeScript cannot express the type. When `any` is used, a comment MUST explain why.

#### Scenario: TipTap extension types - CharacterMention (5 occurrences)
- **WHEN** `extensions/CharacterMention.ts` uses `any` for variables (lines 71, 73, 76, 112, 124)
- **THEN** the file MUST:
  - Import proper types from `@tiptap/core` or `@tiptap/suggestion`
  - Replace `component: any`, `editorRef: any`, `props: any`, `view: any`, `range: any` with concrete types

#### Scenario: TipTap extension types - SlashCommand (3 occurrences)
- **WHEN** `extensions/SlashCommand.ts` uses `any` for variables (lines 55, 59, 137)
- **THEN** the file MUST:
  - Import proper types from `@tiptap/core` or `@tiptap/suggestion`
  - Replace `component: any`, `props: any` with concrete types

#### Scenario: ScriptEditor TipTap node types (5 occurrences)
- **WHEN** `components/Editor/ScriptEditor.tsx` uses `any` for TipTap node handling (lines 72, 73, 75, 76, 90)
- **THEN** proper TipTap node types MUST be imported and used instead

#### Scenario: Canvas xyflow types (4 occurrences)
- **WHEN** `features/character-canvas/ui/Canvas.tsx` uses `any` for interaction and position types (lines 132, 211, 214)
- **THEN** proper `@xyflow/react` types MUST be used instead

#### Scenario: CharacterNode and VariantNode data types (2 occurrences)
- **WHEN** `features/character-canvas/ui/CharacterNode.tsx` (line 8) and `VariantNode.tsx` (line 9) use `as any` for node data
- **THEN** proper node data types MUST be defined and used

### Requirement: ESLint react-hooks rules must be enabled
The ESLint plugin `eslint-plugin-react-hooks` MUST be configured with the `exhaustive-deps` rule enabled to catch dependency issues automatically.

#### Scenario: ESLint configuration file
- **WHEN** the project ESLint configuration is set up
- **THEN** a proper ESLint configuration file (`.eslintrc.js` or `eslint.config.js`) MUST exist
- **AND** the `react-hooks/exhaustive-deps` rule MUST be set to "error" level

### Requirement: Derived state must not be in useState
State that can be computed from props or other state MUST NOT be stored in useState. It MUST be computed during render.

#### Scenario: Form derived state
- **WHEN** a component has state that can be computed from other state
- **THEN** the derived state MUST be computed during render, not stored in useState

#### Scenario: Filtering derived state
- **WHEN** a component filters a list based on search input (e.g., CharacterCanvasPage.tsx characters filtering)
- **THEN** the filtered list MUST be computed during render (with React Compiler, no useMemo needed), not stored in useState

### Requirement: Debug logging must not be in production code
`console.log` statements MUST NOT be present in production code. Development-only logging MUST be wrapped in environment checks.

#### Scenario: ScriptEditor debug logging
- **WHEN** `components/Editor/ScriptEditor.tsx` contains `console.log` (line 83)
- **THEN** the statement MUST either be removed or wrapped in `if (import.meta.env.DEV)` check
