## ADDED Requirements

### Requirement: Components must be smaller than 200 lines
Components SHALL be smaller than 200 lines of code. Any file exceeding this limit MUST be split into smaller, focused modules.

#### Scenario: App.tsx component split (520 lines)
- **WHEN** the App.tsx file contains 520 lines including 6 page components (HomePage, ScriptsPage, NewScriptPage, ScriptEditorPage, VersionsPage, DiffPage)
- **THEN** the file MUST be split into:
  - `App.tsx` containing only routing configuration and layout (target: <50 lines)
  - `pages/HomePage.tsx` for the home page component
  - `pages/ScriptsPage.tsx` for the scripts list page
  - `pages/NewScriptPage.tsx` for the new script creation page
  - `pages/ScriptEditorPage.tsx` for the script editor page
  - `pages/VersionsPage.tsx` for the versions history page
  - `pages/DiffPage.tsx` for the version diff page

#### Scenario: ScriptEditor component split (413 lines)
- **WHEN** `components/Editor/ScriptEditor.tsx` contains 413 lines with toolbar, line numbers, editor logic, and character extraction mixed
- **THEN** the component MUST be split into:
  - `ScriptEditor.tsx` containing only editor core (target: <150 lines)
  - `widgets/editor-toolbar/` for toolbar rendering
  - `useLineNumbers` hook for line number calculation
  - `useEditorConfig` hook for editor configuration

#### Scenario: Canvas component split (344 lines)
- **WHEN** `features/character-canvas/ui/Canvas.tsx` contains 344 lines with event handlers, node positioning, drag logic, and context menus
- **THEN** the component MUST be split using:
  - `useCanvasEvents` hook for event handling and interactions
  - `useNodeDrag` hook for node drag logic
  - `Canvas.tsx` for canvas rendering only (target: <150 lines)

#### Scenario: ScriptList component split (334 lines)
- **WHEN** `components/ScriptList/ScriptList.tsx` contains 334 lines with search, sort, filter, and list rendering
- **THEN** the component MUST be split using:
  - `useScriptFilters` hook for filter logic
  - `useScriptSort` hook for sort logic
  - `ScriptList.tsx` for list rendering only

#### Scenario: CharacterCanvasPage component split (319 lines)
- **WHEN** `pages/CharacterCanvasPage.tsx` contains 319 lines with page layout, state management, dialog management, and sync logic
- **THEN** the component MUST be split using:
  - `useDialog` hook for dialog state management
  - Existing `useCanvasSync` hook
  - `CharacterCanvasPage.tsx` for page layout only

#### Scenario: scriptStore migration (262 lines)
- **WHEN** `stores/scriptStore.ts` is a legacy global Zustand store (262 lines) that duplicates functionality in `entities/script/model/store.ts`
- **THEN** the store MUST be:
  - Merged into `entities/script/model/store.ts` (FSD structure)
  - The `stores/` directory MUST be eliminated

#### Scenario: Character canvas store split (262 lines)
- **WHEN** `features/character-canvas/model/store.ts` contains 262 lines with async operations and state management
- **THEN** the store MUST be refactored to:
  - Use `createAsyncAction` factory to reduce async boilerplate
  - Split complex operations into separate action files if needed

#### Scenario: VariantDetailPanel component split (253 lines)
- **WHEN** `features/character-canvas/ui/VariantDetailPanel.tsx` contains 253 lines with form logic, state management, and UI
- **THEN** the component MUST be split using:
  - Extract form logic to a custom hook
  - Extract sub-sections to smaller components

#### Scenario: docx-export split (236 lines)
- **WHEN** `features/export/lib/docx-export.ts` contains 236 lines with utility functions and export logic
- **THEN** the file MUST be split into:
  - Utility functions (date formatting, text processing)
  - Core export logic

#### Scenario: CharacterPanel component split (219 lines)
- **WHEN** `components/Character/CharacterPanel.tsx` contains 219 lines with character list, editing, and trait management
- **THEN** the component MUST be split using:
  - Extract character list rendering
  - Extract trait editing logic

### Requirement: FSD architecture must be consistent
The project SHALL follow FSD (Feature-Sliced Design) architecture consistently. Legacy directories MUST be migrated to FSD structure.

#### Scenario: Legacy directories must be migrated
- **WHEN** the project contains legacy directories (`components/`, `stores/`, `hooks/`, `lib/`, `types/`, `utils/`, `services/`)
- **THEN** they MUST be migrated as follows:
  - `components/` → content moves to `widgets/` or `features/` based on scope
  - `stores/scriptStore.ts` → merged into `entities/script/model/store.ts`
  - `hooks/` → moves to `shared/hooks/`
  - `lib/` → moves to `shared/lib/`
  - `types/` → moves to `shared/types/`
  - `utils/` → moves to `shared/lib/`
  - `services/` → moves to `shared/api/`
  - `extensions/` → moves to `features/editor/extensions/`

#### Scenario: No parallel structures
- **WHEN** migration is complete
- **THEN** only FSD standard directories MUST exist: `app/`, `pages/`, `widgets/`, `features/`, `entities/`, `shared/`
- **AND** no `components/`, `stores/`, `hooks/`, `lib/`, `types/`, `utils/` directories MUST remain at root level

### Requirement: Component responsibilities must be clear
Each component SHALL have a single, clear responsibility. Components MUST NOT mix multiple concerns like:
- API calls and UI rendering
- State management and presentation
- Business logic and visual components

#### Scenario: ScriptEditorPage API calls mixed with UI
- **WHEN** `ScriptEditorPage` in App.tsx makes direct API calls (`fetch` for metadata update) and renders UI
- **THEN** the API logic MUST be extracted to a hook or the script store

#### Scenario: DiffPage API calls mixed with UI
- **WHEN** `DiffPage` in App.tsx makes direct API calls (`fetch` for version restore) and renders UI
- **THEN** the API logic MUST be extracted to the version store

### Requirement: Large files must be documented
Any file exceeding 150 lines MUST include a header comment explaining:
- The component's purpose
- Why it's large (if applicable)
- Future refactoring plans (if applicable)

#### Scenario: Component size documentation
- **WHEN** a file exceeds 150 lines (currently 21 files)
- **THEN** the file MUST include a header comment with:
  - Purpose
  - Size justification (if temporary)
  - Refactoring plan (if planned)
