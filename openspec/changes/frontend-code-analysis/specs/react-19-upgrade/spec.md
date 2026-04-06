## ADDED Requirements

### Requirement: React must be upgraded to version 19
The project MUST be upgraded from React 18.2.0 to React 19.x to leverage React Compiler for automatic optimization.

#### Scenario: Package.json update
- **WHEN** upgrading to React 19
- **THEN** the following packages MUST be updated in `apps/web/package.json`:
  - `react` from `^18.2.0` to `^19.0.0`
  - `react-dom` from `^18.2.0` to `^19.0.0`
  - `@types/react` from `^18.2.0` to `^19.0.0`
  - `@types/react-dom` from `^18.2.0` to `^19.0.0`

#### Scenario: Dependency installation
- **WHEN** package.json is updated
- **THEN** dependencies MUST be reinstalled using `pnpm install`
- **AND** the lockfile MUST be updated

### Requirement: React Compiler must be enabled
React Compiler MUST be enabled via Babel configuration to automatically optimize re-renders and memoization.

#### Scenario: Babel configuration
- **WHEN** setting up React Compiler
- **THEN** a `babel.config.js` file MUST be created in `apps/web/` with:
  - `babel-plugin-react-compiler` plugin
  - Proper presets for TypeScript and React
  - Target browsers configuration

#### Scenario: React Compiler plugin installation
- **WHEN** configuring Babel for React Compiler
- **THEN** the following packages MUST be installed:
  - `@babel/core`
  - `@babel/preset-env`
  - `@babel/preset-react`
  - `@babel/preset-typescript`
  - `babel-plugin-react-compiler`

#### Scenario: Vite configuration (if needed)
- **WHEN** using Vite as the build tool
- **THEN** Vite MUST be configured to use the Babel configuration
- **AND** the `vite.config.ts` MAY need to be updated to include the Babel plugin

### Requirement: Manual memoization must be removed
Manual memoization (React.memo, useMemo, useCallback) MUST be removed as React Compiler handles this automatically.

#### Scenario: React.memo removal
- **WHEN** a component is wrapped with `React.memo()`
- **THEN** the wrapper MUST be removed
- **AND** the component MUST be exported as a regular function component

#### Scenario: useMemo removal
- **WHEN** a value is memoized with `useMemo()`
- **THEN** evaluate if the memoization is still needed:
  - If only for re-render optimization: remove it
  - If for semantic purposes (e.g., preventing object recreation): keep it with a comment

#### Scenario: useCallback removal
- **WHEN** a function is memoized with `useCallback()`
- **THEN** evaluate if the memoization is still needed:
  - If only for re-render optimization: remove it
  - If for dependency array stability: keep it with a comment

### Requirement: Code must be compatible with React 19
All code MUST be reviewed for React 19 compatibility and updated as needed.

#### Scenario: Ref forwarding update
- **WHEN** a component uses `forwardRef()`
- **THEN** the component MUST be updated to use React 19's ref-as-prop pattern:
  - Remove `forwardRef` wrapper
  - Add `ref` to props interface
  - Use `ref` as a regular prop

#### Scenario: Context usage update
- **WHEN** a component uses `useContext()`
- **THEN** consider updating to React 19's `use()` API (optional, for consistency)

#### Scenario: Deprecated APIs removal
- **WHEN** the code uses deprecated React APIs
- **THEN** they MUST be updated to React 19 equivalents

### Requirement: React 19 upgrade must be tested
The upgrade MUST be thoroughly tested to ensure no regressions.

#### Scenario: Development server test
- **WHEN** running `pnpm dev`
- **THEN** the development server MUST start without errors
- **AND** the application MUST load in the browser

#### Scenario: Build test
- **WHEN** running `pnpm build`
- **THEN** the production build MUST complete successfully
- **AND** no React Compiler errors MUST be present

#### Scenario: Runtime test
- **WHEN** using the application
- **THEN** all existing features MUST work as expected
- **AND** no console errors related to React MUST appear

### Requirement: React Compiler optimizations must be verified
React Compiler optimizations MUST be verified to ensure they are working correctly.

#### Scenario: Compiler output verification
- **WHEN** building the application
- **THEN** React Compiler MUST successfully compile all components
- **AND** build logs MUST show compiler success messages

#### Scenario: Performance verification
- **WHEN** the application is running
- **THEN** component re-renders MUST be optimized automatically
- **AND** no unnecessary re-renders MUST be observed in React DevTools
