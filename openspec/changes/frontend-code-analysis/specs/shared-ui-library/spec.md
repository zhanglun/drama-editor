## ADDED Requirements

### Requirement: Shared UI components must be created
The project SHALL have a shared UI component library in `shared/ui/` directory. Components MUST be:
- Simple and reusable
- Well-typed with TypeScript
- Styled consistently with Tailwind CSS
- Documented with JSDoc comments

#### Scenario: Card component creation
- **WHEN** 15 files use similar card styling patterns (repeated className: `rounded-lg border border-gray-200 bg-white p-6 shadow-sm`)
- **THEN** a shared Card component MUST be created in `shared/ui/Card/` with:
  - Default variant: `rounded-lg border border-gray-200 bg-white p-6 shadow-sm`
  - Interactive variant: adds `transition-all hover:border-indigo-300 hover:shadow-md`
  - Configurable padding (p-4, p-6)
  - Full TypeScript types with `className` prop for customization

#### Scenario: Badge component creation
- **WHEN** multiple components use badge-like elements with different color styles
- **THEN** a shared Badge component MUST be created in `shared/ui/Badge/` with:
  - Multiple color variants (default, indigo, gray, success, warning)
  - Consistent sizing
  - Full TypeScript types

#### Scenario: Loading component creation
- **WHEN** 10+ files implement loading states with inline spinner or skeleton markup (repeated pattern: `animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600`)
- **THEN** shared loading components MUST be created:
  - `LoadingSpinner` in `shared/ui/Loading/LoadingSpinner.tsx` - just the spinner element
  - `LoadingState` in `shared/ui/Loading/LoadingState.tsx` - full-page loading with message
  - Configurable size and color
  - Consistent styling and animations

### Requirement: Shared components must use existing utilities
Shared UI components MUST use existing project utilities for class name management.

#### Scenario: Using clsx and tailwind-merge
- **WHEN** shared components combine className props
- **THEN** they MUST use `clsx` and `tailwind-merge` (already in dependencies) via the `cn` utility function

### Requirement: Shared components must be documented
Each shared UI component MUST include JSDoc comments with:
- Component description
- All props with types and descriptions
- Usage example

#### Scenario: Component documentation
- **WHEN** a new shared component is created
- **THEN** the component file MUST include:
  - JSDoc block at the top
  - `@param` tags for all props
  - `@returns` tag (if applicable)
  - `@example` tag with usage example

### Requirement: Shared components must be tree-shakeable
Shared UI components MUST be tree-shakeable. Exports MUST use named exports, not default exports.

#### Scenario: Component exports
- **WHEN** a shared component is created
- **THEN** the component MUST be exported as:
  - Named export in component file: `export function Component() {}`
  - Re-export in `shared/ui/index.ts`: `export { Component } from './Component'`

### Requirement: NodeView base component must be created
The 4 NodeView components (Dialogue, Action, Scene, Transition) share identical structure (~100 lines duplicated). A BaseNodeView MUST be created.

#### Scenario: BaseNodeView component creation
- **WHEN** 4 NodeView components in `components/Editor/nodeviews/` have identical structure:
  - Same `NodeViewWrapper` → `div` with gradient background
  - Same `NodeToolbar` integration
  - Same type label with icon + text pattern
  - Same `NodeViewContent` usage
- **THEN** a `BaseNodeView` component MUST be created in `components/Editor/nodeviews/BaseNodeView.tsx` with:
  - `type` prop for node type name
  - `icon` prop for the type icon
  - `colorScheme` prop for the gradient/ring color (indigo, amber, blue, purple)
  - `selected` prop for selected state
  - Standard NodeView props (`editor`, `getPos`, `deleteNode`)
  - `children` for type-specific content
- **FILES to refactor**:
  - `DialogueNodeView.tsx` (69 lines)
  - `ActionNodeView.tsx` (31 lines)
  - `SceneNodeView.tsx` (44 lines)
  - `TransitionNodeView.tsx` (31 lines)

### Requirement: Input component must be used consistently
The existing Input component in `shared/ui/Input/` MUST be used instead of inline input styling across the codebase.

#### Scenario: Input styling replacement
- **WHEN** a component uses inline input styling (e.g., in `App.tsx` NewScriptPage)
- **THEN** the component MUST be refactored to use the shared Input component from `shared/ui/Input/`
