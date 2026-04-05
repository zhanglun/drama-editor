## 1. Setup and Dependencies

- [x] 1.1 Install TipTap rich text extensions (@tiptap/extension-heading, @tiptap/extension-blockquote, @tiptap/extension-bullet-list, @tiptap/extension-ordered-list, @tiptap/extension-code-block, @tiptap/extension-horizontal-rule)
- [x] 1.2 Update TypeScript types if needed for new extensions

## 2. Rich Text Extensions Integration

- [x] 2.1 Configure Heading extension with 6 levels support in ScriptEditor.tsx
- [x] 2.2 Add Blockquote extension to ScriptEditor.tsx
- [x] 2.3 Add BulletList and OrderedList extensions to ScriptEditor.tsx
- [x] 2.4 Add CodeBlock extension to ScriptEditor.tsx
- [x] 2.5 Add HorizontalRule extension to ScriptEditor.tsx
- [x] 2.6 Update StarterKit configuration to disable conflicting features
- [x] 2.7 Add keyboard shortcuts for heading levels (Ctrl/Cmd+Alt+1~6)
- [x] 2.8 Add keyboard shortcut for blockquote (Ctrl/Cmd+Shift+B)
- [x] 2.9 Test all rich text formatting works correctly in editor

## 3. Custom Node Views Enhancement

### 3.1 Scene Node View
- [x] 3.1.1 Redesign SceneNodeView component with improved visual styling
- [x] 3.1.2 Add distinct background color and left border
- [x] 3.1.3 Add "场景" type label with icon
- [x] 3.1.4 Add selection state styling (ring/border on focus)
- [x] 3.1.5 Add hover state styling
- [x] 3.1.6 Test inline editing functionality

### 3.2 Dialogue Node View
- [x] 3.2.1 Redesign DialogueNodeView component with improved visual styling
- [x] 3.2.2 Add prominent character name display
- [x] 3.2.3 Add "对白" type label with icon
- [x] 3.2.4 Add appropriate indentation and spacing for dialogue text
- [x] 3.2.5 Add selection state styling
- [x] 3.2.6 Add hover state styling
- [x] 3.2.7 Test inline editing of both character name and dialogue text

### 3.3 Action Node View
- [x] 3.3.1 Redesign ActionNodeView component with improved visual styling
- [x] 3.3.2 Add distinct background color and icon
- [x] 3.3.3 Add "动作" type label
- [x] 3.3.4 Add selection state styling
- [x] 3.3.5 Add hover state styling
- [x] 3.3.6 Test inline editing functionality

### 3.4 Transition Node View
- [x] 3.4.1 Redesign TransitionNodeView component with improved visual styling
- [x] 3.4.2 Implement right-aligned uppercase text
- [x] 3.4.3 Add "转场" type label with icon
- [x] 3.4.4 Add distinct background color
- [x] 3.4.5 Add selection state styling
- [x] 3.4.6 Add hover state styling
- [x] 3.4.7 Test inline editing functionality

### 3.5 Node Toolbar
- [x] 3.5.1 Create NodeToolbar component with delete/move up/move down actions
- [x] 3.5.2 Add toolbar to SceneNodeView (display on hover)
- [x] 3.5.3 Add toolbar to DialogueNodeView (display on hover)
- [x] 3.5.4 Add toolbar to ActionNodeView (display on hover)
- [x] 3.5.5 Add toolbar to TransitionNodeView (display on hover)
- [x] 3.5.6 Implement delete node functionality
- [x] 3.5.7 Implement move node up functionality
- [x] 3.5.8 Implement move node down functionality
- [x] 3.5.9 Add tooltips to toolbar buttons
- [x] 3.5.10 Disable up/down buttons at document boundaries

## 4. Slash Command Menu Extension

- [x] 4.1 Update SlashCommand.ts to add formatting group
- [x] 4.2 Add heading commands (H1-H6) to slash menu items
- [x] 4.3 Add blockquote command to slash menu items
- [x] 4.4 Add bullet list and numbered list commands to slash menu items
- [x] 4.5 Add code block command to slash menu items
- [x] 4.6 Add horizontal rule command to slash menu items
- [x] 4.7 Update SlashMenu component to display grouped items
- [x] 4.8 Implement search/filter functionality for commands
- [x] 4.9 Add icons for new commands
- [x] 4.10 Test slash command menu displays correctly with all new options

## 5. Toolbar Updates

- [x] 5.1 Add heading level dropdown to toolbar
- [x] 5.2 Add blockquote button to toolbar
- [x] 5.3 Add bullet list and numbered list buttons to toolbar
- [x] 5.4 Implement toolbar button state tracking (highlight active formatting)
- [x] 5.5 Test toolbar buttons work correctly with editor

## 6. Styling and Visual Consistency

- [x] 6.1 Create shared CSS classes or Tailwind utilities for node view styling
- [x] 6.2 Ensure consistent padding, spacing, and border radius across all node types
- [x] 6.3 Define color palette for different node types
- [x] 6.4 Add CSS for heading visual hierarchy (font sizes for H1-H6)
- [x] 6.5 Add CSS for blockquote styling (border, indentation, background)
- [x] 6.6 Add CSS for list styling
- [x] 6.7 Add CSS for code block styling (monospace font, background)
- [x] 6.8 Add CSS for horizontal rule styling
- [x] 6.9 Test visual consistency across all node types and formatting

## 7. Integration and Compatibility

- [x] 7.1 Test script nodes coexist with rich text elements
- [x] 7.2 Test conversion between script nodes and headings
- [x] 7.3 Test conversion between script nodes and other rich text elements
- [x] 7.4 Verify character count includes all text types
- [x] 7.5 Test existing keyboard shortcuts still work (Ctrl+1~4 for script nodes)
- [x] 7.6 Test auto-save functionality with new formatting types
- [x] 7.7 Test undo/redo with new formatting operations
- [x] 7.8 Verify backward compatibility with existing scripts

## 8. Testing and Quality Assurance

- [x] 8.1 Create test cases for all new requirements from specs
- [x] 8.2 Test all keyboard shortcuts work correctly
- [x] 8.3 Test slash command menu filtering works
- [x] 8.4 Test node toolbar actions (delete, move up/down)
- [x] 8.5 Test inline editing in all node types
- [x] 8.6 Test selection and hover states
- [x] 8.7 Test markdown syntax conversion (-, *, 1., ```)
- [x] 8.8 Performance test with large script (100+ scenes)
- [x] 8.9 Browser compatibility test (Chrome, Firefox, Safari)
- [x] 8.10 Fix any bugs found during testing

## 9. Documentation

- [x] 9.1 Update user guide with new formatting features
- [x] 9.2 Update keyboard shortcuts documentation
- [x] 9.3 Add examples of new formatting options
- [x] 9.4 Update README if needed
