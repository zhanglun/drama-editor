# Text Editor Usage Guide

## Installation Context

This module is part of the local repository and is exported from:

- [index.ts](/Users/zhanglun/Documents/mine/drama-editor/apps/web/src/pages/text-editor/index.ts)

Use it as a composable library rather than a single monolithic page.

## Quick Start

Use the default workspace composition when you want:

- left-side episode directory
- full-script edit tab
- preview tab
- default workspace header
- shared episode navigation across editor and preview

```tsx
import {
  EpisodeDirectory,
  ScriptEditPanel,
  ScriptPreviewPanel,
  ScriptWorkspaceHeader,
  ScriptWorkspaceShell,
  useScriptWorkspaceController,
} from '@/pages/text-editor'

export function MyScreenplayPage() {
  const workspace = useScriptWorkspaceController()

  return (
    <ScriptWorkspaceShell
      activeTab={workspace.activeTab}
      onTabChange={workspace.setActiveTab}
      sidebar={
        <EpisodeDirectory
          episodes={workspace.episodes}
          activeEpisodeId={workspace.activeEpisode?.id}
          onSelect={workspace.selectEpisode}
        />
      }
      header={
        <ScriptWorkspaceHeader
          fileName={workspace.fileName}
          episodeCount={workspace.episodes.length}
          stats={workspace.stats}
          onImport={workspace.importFile}
        />
      }
      editPane={
        <ScriptEditPanel
          content={workspace.content}
          onChange={workspace.setContent}
          revealLine={workspace.activeEpisode?.startLine}
          emptyStateStrategy="import"
          onImport={workspace.importFile}
        />
      }
      previewPane={
        <ScriptPreviewPanel
          content={workspace.previewContent}
          revealLine={workspace.activeEpisode?.startLine}
        />
      }
    />
  )
}
```

## Usage Patterns

### 1. Full Workspace

Best when you want the complete text-editor experience.

Use:

- `useScriptWorkspaceController`
- `ScriptWorkspaceShell`
- `EpisodeDirectory`
- `ScriptEditPanel`
- `ScriptPreviewPanel`
- `ScriptWorkspaceHeader`

### 2. Editor Only

Use this when you only need a full-text screenplay editor.

```tsx
import { MonacoScriptEditor } from '@/pages/text-editor'

function EditorOnly() {
  const [content, setContent] = useState('')

  return (
    <MonacoScriptEditor
      value={content}
      onChange={setContent}
    />
  )
}
```

### 3. Preview Only

Use this when the page is read-only or review-oriented.

```tsx
import { ScriptPreview } from '@/pages/text-editor'

function PreviewOnly({ content }: { content: string }) {
  return (
    <ScriptPreview content={content} />
  )
}
```

### 4. Directory Only

Use this when you need your own content area but still want generated episode navigation.

```tsx
import { EpisodeDirectory, extractEpisodeSegments } from '@/pages/text-editor'

function DirectoryOnly({ content }: { content: string }) {
  const episodes = extractEpisodeSegments(content)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <EpisodeDirectory
      episodes={episodes}
      activeEpisodeId={episodes[activeIndex]?.id}
      onSelect={setActiveIndex}
    />
  )
}
```

## Empty State Strategies

`ScriptEditPanel` is the recommended component for the edit tab.

### Strategy: `import`

Use when the business flow wants an import-first empty state.

```tsx
<ScriptEditPanel
  content={content}
  onChange={setContent}
  emptyStateStrategy="import"
  onImport={importFile}
/>
```

### Strategy: `editable`

Use when users should be able to type immediately, even with empty content.

```tsx
<ScriptEditPanel
  content={content}
  onChange={setContent}
  emptyStateStrategy="editable"
/>
```

### Strategy: `custom`

Use when business wants a custom entry experience.

```tsx
<ScriptEditPanel
  content={content}
  onChange={setContent}
  emptyStateStrategy="custom"
  renderEmptyState={({ enterEditing, onImport }) => (
    <div>
      <button onClick={enterEditing}>Start Writing</button>
      <button onClick={() => filePicker(onImport)}>Import</button>
    </div>
  )}
/>
```

## Headless Usage

If you want full UI control, use the model layer directly.

```tsx
import {
  getScriptStats,
  parseScript,
  useScriptWorkspaceController,
} from '@/pages/text-editor'

function CustomWorkspace() {
  const workspace = useScriptWorkspaceController({
    initialContent: '第1集\\n1-1 上午 内 客厅',
  })

  const scenes = parseScript(workspace.content)
  const stats = getScriptStats(workspace.content)

  return (
    <div>
      <div>{stats.wordCount}</div>
      <pre>{JSON.stringify(scenes, null, 2)}</pre>
    </div>
  )
}
```

## Context Usage

Use context when many workspace subcomponents need shared state.

```tsx
import {
  ScriptWorkspaceProvider,
  useScriptWorkspaceController,
} from '@/pages/text-editor'

function WorkspaceRoot() {
  const workspace = useScriptWorkspaceController()

  return (
    <ScriptWorkspaceProvider value={workspace}>
      <MyWorkspaceLayout />
    </ScriptWorkspaceProvider>
  )
}
```

This is optional. You do not need context to use the module.

## API Reference

### `useScriptWorkspaceController(options?)`

Options:

```ts
interface UseScriptWorkspaceControllerOptions {
  initialContent?: string
  initialFileName?: string
  initialTab?: 'edit' | 'preview'
}
```

Returns:

- `content`
- `isEmpty`
- `fileName`
- `activeTab`
- `episodes`
- `activeEpisode`
- `previewContent`
- `stats`
- `setContent`
- `setActiveTab`
- `selectEpisode`
- `importFile`

### `MonacoScriptEditor`

Props:

- `value: string`
- `onChange: (value: string) => void`
- `revealLine?: number`

Behavior note:

- `revealLine` is intended for navigation and should place the target line near the top of the editor viewport

### `ScriptPreview`

Props:

- `content: string`
- `revealLine?: number`
- `className?: string`

Behavior note:

- `revealLine` first tries to scroll to an exact rendered block anchor
- when the exact anchor is unavailable, preview falls back to the nearest earlier scene anchor
- large-distance jumps may skip smooth animation to avoid long scrolling

### `EpisodeDirectory`

Props:

- `episodes: EpisodeSegment[]`
- `activeEpisodeId?: string`
- `onSelect: (index: number) => void`

### `ScriptEditPanel`

Props:

- `content: string`
- `onChange: (value: string) => void`
- `revealLine?: number`
- `emptyStateStrategy?: 'import' | 'editable' | 'custom'`
- `onImport?: (file: File) => Promise<void>`
- `renderEmptyState?: (...) => ReactNode`

## Navigation Behavior

Episode selection should be treated as navigation, not filtering.

Expected behavior:

- the editor always shows the full script
- the preview always renders the full script
- selecting an episode scrolls editor and preview to the matching position
- editor navigation should align the target line near the top edge
- preview should prefer exact line anchors over approximate scene-only matching
- preview may smooth-scroll for short jumps but should directly jump for very large jumps

## Testing

Run the focused text-editor tests with:

```bash
pnpm --filter @drama-editor/web test -- src/pages/text-editor/parseScript.test.ts src/pages/text-editor/script-syntax/patterns.test.ts
```

Recommended validation after changes:

1. `typecheck`
2. `build`
3. focused text-editor tests
4. manual navigation check in edit and preview tabs
5. manual near-jump vs far-jump preview behavior check

## Best Practices

- Use `ScriptEditPanel` instead of `MonacoScriptEditor` when business onboarding matters
- Use primitives when you need isolated capabilities
- Keep parsing logic in `model/*`
- Keep UI-specific empty-state behavior out of primitives
- Treat episode data as a public navigation model

## Anti-Patterns

- Do not split the editor content by episode
- Do not move import workflow into `MonacoScriptEditor`
- Do not duplicate syntax regex in page components
- Do not couple preview rendering to workspace-only state
