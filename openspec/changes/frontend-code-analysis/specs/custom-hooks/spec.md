## ADDED Requirements

### Requirement: Custom hooks must be created for common patterns
The project SHALL have custom hooks in `shared/hooks/` directory for commonly repeated patterns. Hooks MUST be:
- Well-typed with TypeScript
- Documented with JSDoc comments
- Tested with Vitest

#### Scenario: useAsyncOperation hook creation
- **WHEN** 3 stores have 14 occurrences of identical async operation patterns (set loading → try → catch → set error/loading false)
- **THEN** a `useAsyncOperation` hook MUST be created in `shared/hooks/useAsyncOperation.ts` with:
  - Execute function that returns a Promise
  - `isLoading` state
  - `error` state
  - `onSuccess` and `onError` callbacks
  - Full TypeScript types

#### Scenario: createAsyncAction factory for Zustand stores
- **WHEN** 3 Zustand stores (`entities/script/model/store.ts`, `entities/version/model/store.ts`, `features/character-canvas/model/store.ts`) repeat the same async boilerplate ~150 lines total
- **THEN** a `createAsyncAction` factory MUST be created in `shared/lib/create-async-action.ts` with:
  - Automatic `set({ isLoading: true, error: null })` before action
  - Automatic `set({ isLoading: false })` on success
  - Automatic `set({ error, isLoading: false })` on error
  - TypeScript generics for type-safe state updates

#### Scenario: useDialog hook creation
- **WHEN** multiple components (`CharacterCanvasPage.tsx`, `CreateVariantDialog.tsx`, `CreateCharacterDialog.tsx`) implement dialog state management (isOpen, open, close, submit)
- **THEN** a `useDialog` hook MUST be created in `shared/hooks/useDialog.ts` with:
  - `isOpen` state
  - `open` and `close` functions
  - `submit` function with async support
  - `isLoading` and `error` states

#### Scenario: useRelativeDate hook creation
- **WHEN** 10 files have different date formatting implementations (relative time like "Today", formatted date like "2024年1月15日", etc.)
- **THEN** a `useRelativeDate` hook MUST be created in `shared/hooks/useRelativeDate.ts` with:
  - Input: date string or Date object
  - Output: relative (e.g., "Today"), formatted (e.g., "2024年1月15日"), datetime
  - No manual memoization needed (React Compiler handles this)

### Requirement: Hooks must follow React best practices
All custom hooks MUST follow React Hooks rules:
- Only call hooks at the top level
- Only call hooks from React function components
- Use correct dependency arrays in useEffect, useMemo, useCallback
- Avoid conditional hooks

#### Scenario: Hook dependency management
- **WHEN** a custom hook uses useEffect or useCallback
- **THEN** the hook MUST:
  - Include all dependencies in the dependency array
  - Use stable references where possible
  - Document why dependencies are needed

#### Scenario: Hook error handling
- **WHEN** a custom hook performs async operations
- **THEN** the hook MUST:
  - Handle errors gracefully
  - Provide error state to consumers
  - Allow error callbacks

### Requirement: Date formatting must be consistent
The `formatDate` function in `shared/lib/utils.ts` MUST be used consistently across the codebase instead of inline implementations.

#### Scenario: Date formatting unification across 10 files
- **WHEN** a component needs to format dates
- **THEN** the component MUST use the `formatDate` function from `shared/lib/utils.ts` instead of creating a new implementation
- **FILES that need updating**:
  - `entities/script/ui/ScriptCard.tsx` (custom relative date logic, lines 9-28)
  - `components/ScriptList/ScriptCard.tsx` (custom formatDate, lines 16-23)
  - `features/export/lib/pdf-export.ts` (inline date formatting)
  - `features/export/lib/txt-export.ts` (inline date formatting)
  - `App.tsx` (inline `new Date().toLocaleDateString()`)

### Requirement: Store async patterns must be standardized
All Zustand stores with async operations MUST use the `createAsyncAction` factory or `useAsyncOperation` hook for consistent patterns.

#### Scenario: Store async operation refactoring
- **WHEN** a store implements async operations with manual loading/error state
- **THEN** the store MUST be refactored to:
  - Use `createAsyncAction` from `shared/lib/create-async-action.ts`
  - Eliminate the repeated `set({ isLoading: true, error: null }) → try → catch` pattern
- **TARGET STORES**:
  - `entities/script/model/store.ts` (173 lines, multiple async operations)
  - `entities/version/model/store.ts` (89 lines, async operations)
  - `features/character-canvas/model/store.ts` (262 lines, multiple async operations)

### Requirement: Error handling must be consistent
Error handling patterns across the codebase MUST be standardized.

#### Scenario: try/catch pattern standardization
- **WHEN** 18 files use try/catch patterns for error handling
- **THEN** error handling MUST follow a consistent pattern:
  - Store operations: use `createAsyncAction` (automatic error handling)
  - Component-level: use `useAsyncOperation` hook
  - Utility functions: throw errors and let callers handle them
