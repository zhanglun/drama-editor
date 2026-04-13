# Text Editor Conversation Context

## Purpose

This file captures the key decisions, constraints, and implementation status from the recent design and implementation discussion around the `text-editor` module.

It is intended to help resume work later without reconstructing the conversation from scratch.

## Date

- Current workspace date during this session: `2026-04-13`

## Original Product Goal

Target UI pattern:

- left-side episode directory
- right-side full screenplay workspace
- tabs for screenplay editing and screenplay preview

Important clarification:

- the editor must always show the **full script**
- episode selection is **navigation only**
- preview must also show the **full script** and follow episode navigation

## Key Product Constraints Agreed In Conversation

### 1. Use the `text-editor` path

We explicitly chose the `text-editor` implementation path rather than the structured Tiptap editor path.

Reason:

- the target design is closer to full-text screenplay editing
- Monaco + parser + preview fits the design direction better

### 2. Full script is the single source of truth

Rejected behavior:

- splitting the right-side editor content by episode

Accepted behavior:

- keep the entire screenplay text in one editor
- directory click reveals the corresponding episode in the editor
- preview also scrolls to the matching location

Later refinement:

- preview navigation should prefer exact rendered anchors, not only approximate scene matching
- large preview jumps should avoid very long smooth-scroll animations
- editor episode navigation should align the target line near the top edge instead of centering it

### 3. Empty state in the edit tab is business-specific

The latest design requires a business-related upload component in the edit tab empty state.

But there is also another valid business case:

- users may be allowed to start writing directly

Conclusion:

- empty state behavior must be a **strategy**, not a hardcoded rule

## Architecture Decisions

The module was restructured into three layers.

### `model/`

Headless state and parsing.

Later parsing refinement:

- parsed `ScriptBlock` items now carry source `line` numbers for exact reveal behavior in preview

Key exports:

- `useScriptWorkspaceController`
- `extractEpisodeSegments`
- `parseScript`
- `getScriptStats`
- `ScriptWorkspaceProvider`
- `useScriptWorkspaceContext`

### `ui/primitives/`

Reusable low-level components.

Key exports:

- `MonacoScriptEditor`
- `ScriptPreview`
- `EpisodeDirectory`
- `registerScriptMonaco`

These should remain reusable and as business-agnostic as possible.

### `ui/panels/`

Product-level building blocks.

Key exports:

- `ScriptEditPanel`
- `ScriptImportEmptyState`
- `ScriptPreviewPanel`
- `ScriptWorkspaceHeader`

Important rule:

- `MonacoScriptEditor` must not own onboarding or import workflow
- `ScriptEditPanel` owns empty-state strategy

### `ui/workspace/`

Layout shell.

Key export:

- `ScriptWorkspaceShell`

This is responsible for:

- left directory layout
- right tab workspace layout

It is not responsible for:

- text state
- parsing
- imports

## Empty State Strategy Decision

`ScriptEditPanel` now supports:

- `import`
- `editable`
- `custom`

Meaning:

- `import`: show business import empty state
- `editable`: render editor immediately on empty content
- `custom`: let the consumer render a custom empty state

This was introduced specifically to support multiple business scenarios without polluting the editor primitive.

## Navigation Model Decision

Episode directory data is treated as a public model, not an internal implementation detail.

Public type:

- `EpisodeSegment`

Used for:

- left directory rendering
- reveal line behavior
- summary display
- episode-level counts

Shared navigation contract:

- `EpisodeSegment.startLine` is the reveal target shared by editor and preview
- preview should first try to locate an exact rendered block with the matching line
- only fall back to scene-level anchors when an exact block anchor is unavailable

## Reveal Behavior Decisions

### Preview

- rendered blocks expose `data-script-line`
- rendered scene cards expose `data-scene-line` as fallback anchors
- exact block anchor scroll is preferred over scene approximation
- short-distance jumps may remain smooth
- large-distance jumps should switch to direct scrolling
- relative scroll position must be computed against the preview scroller, not naive `offsetTop`

### Editor

- Monaco default centering behavior was rejected for episode navigation
- `revealLineInCenter` and `revealLineNearTop` did not match the intended UX closely enough
- editor reveal now uses explicit `setScrollTop(...)` based on `getTopForLineNumber(...)`
- editor top padding must be accounted for in the computed scroll target

## Props Drilling Decision

We noted that props drilling is currently manageable but likely to grow.

Decision:

- keep headless prop-based composition as the main external API
- provide optional context via `ScriptWorkspaceContext`

This keeps the module flexible for both:

- isolated usage
- full workspace integration

## Files Added or Reorganized During This Session

### New or moved model files

- `model/useScriptWorkspaceController.ts`
- `model/ScriptWorkspaceContext.tsx`
- `model/parseScript.ts`
- `model/episode-directory.ts`
- `model/script-stats.ts`
- `model/index.ts`

### New primitives

- `ui/primitives/MonacoScriptEditor.tsx`
- `ui/primitives/ScriptPreview.tsx`
- `ui/primitives/EpisodeDirectory.tsx`
- `ui/primitives/monaco-theme.ts`
- `ui/primitives/index.ts`

### New panels

- `ui/panels/ScriptEditPanel.tsx`
- `ui/panels/ScriptImportEmptyState.tsx`
- `ui/panels/ScriptPreviewPanel.tsx`
- `ui/panels/ScriptWorkspaceHeader.tsx`
- `ui/panels/index.ts`

### New workspace shell

- `ui/workspace/ScriptWorkspaceShell.tsx`
- `ui/workspace/index.ts`

### New docs

- `COMPONENT_DESIGN.md`
- `USAGE.md`

### Updated entrypoints

- `index.ts`
- `TextEditorPage.tsx`
- `README.md`

### Updated during later navigation refinement

- `model/parseScript.ts`
- `parseScript.test.ts`
- `ui/primitives/ScriptPreview.tsx`
- `ui/primitives/MonacoScriptEditor.tsx`

## Current Implementation Status

Implemented:

- full-script editing in Monaco
- episode directory derived from the full text
- editor reveal-line navigation
- preview reveal-line navigation
- preview exact-anchor navigation using parsed block line numbers
- adaptive preview scrolling for near vs long-distance jumps
- editor top-aligned reveal using manual scroll position control
- edit/preview tab shell
- `ScriptEditPanel` with configurable empty-state strategy
- default business import empty state placeholder
- modular public exports
- architecture and usage docs

Verified during session:

- `pnpm --filter @drama-editor/web typecheck`
- `pnpm --filter @drama-editor/web build`
- `pnpm --filter @drama-editor/web test -- src/pages/text-editor/parseScript.test.ts src/pages/text-editor/script-syntax/patterns.test.ts`

Additional verification during later navigation fixes:

- `pnpm --filter @drama-editor/web typecheck`
- `pnpm --filter @drama-editor/web test -- src/pages/text-editor/parseScript.test.ts`

## Recommended Next Steps

### High-priority

1. Replace `ScriptImportEmptyState` placeholder with the real business upload component
2. Consider wrapping the default page composition in `ScriptWorkspaceProvider` to reduce page-level assembly noise

### Nice-to-have

1. Add visual highlighting for the currently selected episode region in editor and preview
2. Evolve `ScriptWorkspaceShell` to support a generic `tabs` API if more tabs are planned
3. Add tests around empty-state strategies in `ScriptEditPanel`
4. Add UI-level tests for episode navigation behavior in both editor and preview
5. Consider centralizing reveal-scroll strategy so editor and preview stay behaviorally aligned

## How To Resume Later

If resuming this work later, start from these files:

- [COMPONENT_DESIGN.md](/Users/zhanglun/Documents/mine/drama-editor/apps/web/src/pages/text-editor/COMPONENT_DESIGN.md)
- [USAGE.md](/Users/zhanglun/Documents/mine/drama-editor/apps/web/src/pages/text-editor/USAGE.md)
- [README.md](/Users/zhanglun/Documents/mine/drama-editor/apps/web/src/pages/text-editor/README.md)
- [useScriptWorkspaceController.ts](/Users/zhanglun/Documents/mine/drama-editor/apps/web/src/pages/text-editor/model/useScriptWorkspaceController.ts)
- [ScriptEditPanel.tsx](/Users/zhanglun/Documents/mine/drama-editor/apps/web/src/pages/text-editor/ui/panels/ScriptEditPanel.tsx)
- [TextEditorPage.tsx](/Users/zhanglun/Documents/mine/drama-editor/apps/web/src/pages/TextEditorPage.tsx)

Recommended short prompt for future continuation:

- Continue from the latest `text-editor` navigation refinements. Keep full-script editing as the single source of truth, preserve episode directory as navigation only, and maintain exact preview anchoring plus top-aligned editor reveal behavior.

> Continue the `text-editor` workspace work from `CONVERSATION_CONTEXT.md`, keeping full-script editing, episode navigation, and configurable edit-tab empty-state strategy.
