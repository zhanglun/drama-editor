## ADDED Requirements

### Requirement: Components must be smaller than 200 lines
Components SHALL be smaller than 200 lines of code. Any component exceeding this limit MUST be split into smaller, focused components.

#### Scenario: App.tsx component split
- **WHEN** the App.tsx file contains 520 lines including 6 page components
- **THEN** the file MUST be split into:
  - App.tsx containing only routing configuration
  - Individual page files in pages/ directory for each page component

#### Scenario: ScriptEditor component split
- **WHEN** the ScriptEditor.tsx file contains 396 lines with toolbar, line numbers, and editor logic mixed
- **THEN** the component MUST be split into:
  - ScriptEditor.tsx containing only editor core
  - EditorToolbar.tsx for toolbar rendering
  - useLineNumbers hook for line number calculation
  - useEditorConfig hook for editor configuration

#### Scenario: ScriptList component split
- **WHEN** the ScriptList.tsx file contains 334 lines with search, sort, and filter logic
- **THEN** the component MUST be split using:
  - useScriptFilters hook for filter logic
  - useScriptSort hook for sort logic
  - ScriptList.tsx for list rendering only

### Requirement: FSD architecture must be consistent
The project SHALL follow FSD (Feature-Sliced Design) architecture consistently. The `components/` directory SHALL be treated as `widgets/` layer in the extended FSD architecture.

#### Scenario: Components directory organization
- **WHEN** new complex components are created
- **THEN** they MUST be placed in:
  - `features/` for feature-specific components
  - `entities/` for entity-specific components
  - `widgets/` (formerly `components/`) for reusable complex widgets
  - `shared/ui/` for simple reusable UI components

#### Scenario: Page components organization
- **WHEN** page-level components are extracted from App.tsx
- **THEN** they MUST be placed in the pages/` directory with one file per page

### Requirement: Component responsibilities must be clear
Each component SHALL have a single, clear responsibility. Components MUST NOT mix multiple concerns like:
- API calls and UI rendering
- State management and presentation
- Business logic and visual components

#### Scenario: Component with mixed responsibilities
- **WHEN** a component contains both API calls and UI rendering logic
- **THEN** the component MUST be refactored to:
  - Extract API logic to a hook or store
  - Keep only UI rendering in the component

### Requirement: Large files must be documented
Any file exceeding 150 lines MUST include a header comment explaining:
- The component's purpose
- Why it's large (if applicable)
- Future refactoring plans (if applicable)

#### Scenario: Component size documentation
- **WHEN** a component file exceeds 150 lines
- **THEN** the file MUST include a header comment with:
  - Component purpose
  - Size justification (if temporary)
  - Refactoring plan (if planned)
