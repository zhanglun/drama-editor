## ADDED Requirements

### Requirement: Custom hooks must be created for common patterns
The project SHALL have custom hooks in `shared/hooks/` directory for commonly repeated patterns. Hooks MUST be:
- Well-typed with TypeScript
- Documented with JSDoc comments
- Unit tested

#### Scenario: useAsyncOperation hook creation
- **WHEN** multiple stores and components use similar async operation patterns (loading, error, try-catch)
- **THEN** a useAsyncOperation hook MUST be created in `shared/hooks/useAsyncOperation.ts` with:
  - Execute function that returns a Promise
  - isLoading state
  - error state
  - onSuccess and onError callbacks
  - Full TypeScript types

#### Scenario: useDialog hook creation
- **WHEN** multiple components implement dialog state management (isOpen, open, close, submit)
- **THEN** a useDialog hook MUST be created in `shared/hooks/useDialog.ts` with:
  - isOpen state
  - open and close functions
  - submit function with async support
  - isLoading and error states
  - Form validation support

#### Scenario: useRelativeDate hook creation
- **WHEN** multiple components format dates in different ways (relative, formatted, datetime)
- **THEN** a useRelativeDate hook MUST be created in `shared/hooks/useRelativeDate.ts` with:
  - Input: date string or Date object
  - Output: relative (e.g., "Today"), formatted (e.g., "2024年1月15日"), datetime
  - Memoized for performance

### Requirement: Hooks must follow React best practices
All custom hooks MUST follow React Hooks rules:
- Only call hooks at the top level
- Only call hooks from React function components
- Use correct dependency arrays in useEffect, useMemo, useCallback

- Avoid conditional hooks

#### Scenario: Hook dependency management
- **WHEN** a custom hook uses useEffect, useMemo, or useCallback
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

### Requirement: Hooks must be documented
Each custom hook MUST include JSDoc comments with:
- Hook description
- All parameters with types and descriptions
- Return value with type and description
- Usage example

#### Scenario: Hook documentation
- **WHEN** a new hook is created
- **THEN** the hook file MUST include:
  - JSDoc block at the top
  - `@param` tags for all parameters
  - `@returns` tag with full type
  - `@example` tag with usage example

### Requirement: Hooks must be tested
All custom hooks MUST have unit tests covering:
- Initial state
- State updates
- Async operations (if applicable)
- Error handling (if applicable)

#### Scenario: Hook unit tests
- **WHEN** a custom hook is created
- **THEN** unit tests MUST be created in `shared/hooks/__tests__/useHookName.test.ts` with:
  - Initial state tests
  - State update tests
  - Async operation tests (if applicable)
  - Error handling tests (if applicable)

### Requirement: Date formatting must be consistent
The existing formatDate function in `shared/lib/utils.ts` MUST be used consistently across the codebase instead of inline implementations.

#### Scenario: Date formatting unification
- **WHEN** a component needs to format dates
- **THEN** the component MUST use the formatDate function from `shared/lib/utils.ts` instead of creating a new implementation

### Requirement: Store async patterns must be standardized
All Zustand stores with async operations MUST use the useAsyncOperation hook or follow a consistent pattern.

#### Scenario: Store async operation refactoring
- **WHEN** a store implements async operations with manual loading/error state
- **THEN** the store MUST be refactored to:
  - Use useAsyncOperation hook
  - Or follow the same pattern with setLoading/setError calls
