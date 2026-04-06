## ADDED Requirements

### Requirement: React must be upgraded to version 19
The project MUST be upgraded from React 18.2.0 to React 19.x to leverage React Compiler for automatic optimization.

#### Scenario: Package.json update
- **WHEN** upgrading to React 19
- **THEN** the following packages MUST be updated in `apps/web/package.json`:
  - `react` from `^18.2.0` to `^19.0.0`
  - `react-dom` from `^18.2.0` to `^19.0.0`
  - `@types/react` from `^18.2.43` to `^19.0.0`
  - `@types/react-dom` from `^18.2.17` to `^19.0.0`

#### Scenario: Dependency installation
- **WHEN** package.json is updated
- **THEN** dependencies MUST be reinstalled using `pnpm install`
- **AND** the lockfile MUST be updated

### Requirement: React Compiler must be enabled via Vite plugin
React Compiler MUST be enabled via the Vite plugin system, NOT via Babel. The project currently uses `@vitejs/plugin-react` with esbuild/SWC and MUST NOT introduce Babel.

#### Scenario: Vite configuration for React Compiler
- **WHEN** setting up React Compiler
- **THEN** `apps/web/vite.config.ts` MUST be updated to configure React Compiler via `@vitejs/plugin-react`:
  - Set the `babel` option to include `babel-plugin-react-compiler` as a plugin
  - OR use the Vite-specific React Compiler plugin if available
  - Ensure TypeScript and JSX compilation still works correctly

#### Scenario: React Compiler plugin installation
- **WHEN** configuring React Compiler for Vite
- **THEN** the following package MUST be installed:
  - `babel-plugin-react-compiler` (as devDependency)
  - `@babel/core` (as devDependency, required by the plugin)
  - **NOT** the full Babel toolchain (`@babel/preset-*` are NOT needed)

#### Scenario: No Babel config file
- **WHEN** using React Compiler with Vite
- **THEN** NO `babel.config.js` or `.babelrc` file MUST be created in the project
- **AND** the Babel plugin is configured inline in `vite.config.ts` only

### Requirement: Manual memoization must be removed
Manual memoization (React.memo, useMemo, useCallback) that is used only for performance optimization MUST be removed as React Compiler handles this automatically.

#### Scenario: React.memo removal (1 occurrence)
- **WHEN** a component is wrapped with `React.memo()` (found in `features/character-canvas/ui/HandleMenu.tsx` line 93)
- **THEN** the wrapper MUST be removed
- **AND** the component MUST be exported as a regular function component

#### Scenario: useCallback removal for performance only (30+ occurrences)
- **WHEN** a function is memoized with `useCallback()` for re-render optimization only
- **THEN** the memoization MUST be evaluated:
  - If only for performance optimization: remove `useCallback`, use plain function
  - If for dependency array stability (function passed as dependency to useEffect): keep with a comment explaining why
- **FILES with most useCallback usage**: Canvas.tsx (9), CharacterCanvasPage.tsx (5), useNodeOperations.ts (6), CustomHandle.tsx (5), NodeToolbar.tsx (4)

#### Scenario: useMemo removal for performance only (3 occurrences)
- **WHEN** a value is memoized with `useMemo()` for performance only
- **THEN** evaluate:
  - If only for re-render optimization: remove `useMemo`
  - If for expensive computation or referential equality: keep with a comment
- **FILES**: ScriptList.tsx (1), use-diff.ts (3), Canvas.tsx (1)

### Requirement: Code must be compatible with React 19
All code MUST be reviewed for React 19 compatibility and updated as needed.

#### Scenario: Ref forwarding update
- **WHEN** a component uses `forwardRef()` (none found currently)
- **THEN** the component SHOULD be updated to use React 19's ref-as-prop pattern when convenient

#### Scenario: TipTap React 19 compatibility
- **WHEN** TipTap version `^3.22.2` is used with React 19
- **THEN** compatibility MUST be verified:
  - All editor extensions load correctly
  - NodeViews render properly
  - Slash commands and character mentions work
  - Content serialization/deserialization works

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

#### Scenario: TipTap functionality test
- **WHEN** using the editor after upgrade
- **THEN** all editor features MUST work:
  - Creating/editing scenes, dialogues, actions, transitions
  - Slash command menu
  - Character mention menu
  - Node toolbar (delete, move)
  - Auto-save
  - Version diff and restore

### Requirement: React Compiler optimizations must be verified
React Compiler optimizations MUST be verified to ensure they are working correctly.

#### Scenario: Compiler output verification
- **WHEN** building the application
- **THEN** React Compiler MUST successfully compile all components
- **AND** no compiler warnings or errors MUST be present in build output
