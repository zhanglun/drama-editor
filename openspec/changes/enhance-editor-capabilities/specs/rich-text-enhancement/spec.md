## ADDED Requirements

### Requirement: User can create multi-level headings
The system SHALL allow users to create headings at 6 different levels (H1-H6) to organize document structure.

#### Scenario: Create heading via slash command
- **WHEN** user types "/" and selects "标题 1" from the menu
- **THEN** system creates an H1 heading at the current cursor position

#### Scenario: Create heading via keyboard shortcut
- **WHEN** user presses Ctrl/Cmd+Alt+1 (for H1) through Ctrl/Cmd+Alt+6 (for H6)
- **THEN** system converts the current line to the corresponding heading level

#### Scenario: Change heading level
- **WHEN** user places cursor in an existing heading and presses a different heading shortcut
- **THEN** system changes the heading to the new level

#### Scenario: Convert heading to paragraph
- **WHEN** user presses Backspace at the beginning of a heading
- **THEN** system converts the heading to a normal paragraph

#### Scenario: Headings display with distinct visual hierarchy
- **WHEN** user creates headings at different levels
- **THEN** system displays them with appropriate font sizes (H1 largest, H6 smallest)

### Requirement: User can create blockquotes
The system SHALL allow users to create blockquote sections for highlighting important text or adding notes.

#### Scenario: Create blockquote via slash command
- **WHEN** user types "/" and selects "引用" from the menu
- **THEN** system creates a blockquote block at the current position

#### Scenario: Create blockquote via keyboard shortcut
- **WHEN** user presses Ctrl/Cmd+Shift+B
- **THEN** system wraps the current selection in a blockquote

#### Scenario: Exit blockquote
- **WHEN** user presses Enter twice in an empty blockquote
- **THEN** system exits the blockquote and creates a new paragraph

#### Scenario: Blockquote displays with distinct styling
- **WHEN** user creates a blockquote
- **THEN** system displays it with left border, indentation, and muted background

#### Scenario: Format text within blockquote
- **WHEN** user selects text within a blockquote and applies formatting (bold, italic)
- **THEN** system applies the formatting correctly within the blockquote

### Requirement: User can create bullet lists
The system SHALL allow users to create unordered (bullet) lists for non-sequential items.

#### Scenario: Create bullet list via slash command
- **WHEN** user types "/" and selects "无序列表" from the menu
- **THEN** system creates a bullet list with the first item

#### Scenario: Create bullet list via markdown syntax
- **WHEN** user types "- " or "* " at the beginning of a line
- **THEN** system automatically converts it to a bullet list item

#### Scenario: Add new list item
- **WHEN** user presses Enter at the end of a bullet list item
- **THEN** system creates a new bullet list item below

#### Scenario: Exit bullet list
- **WHEN** user presses Enter on an empty bullet list item
- **THEN** system exits the list and creates a new paragraph

#### Scenario: Nest bullet lists
- **WHEN** user presses Tab on a bullet list item
- **THEN** system indents the item to create a nested list level

#### Scenario: Unnest bullet lists
- **WHEN** user presses Shift+Tab on a nested bullet list item
- **THEN** system unindents the item to the previous level

### Requirement: User can create numbered lists
The system SHALL allow users to create ordered (numbered) lists for sequential items.

#### Scenario: Create numbered list via slash command
- **WHEN** user types "/" and selects "有序列表" from the menu
- **THEN** system creates a numbered list starting with "1."

#### Scenario: Create numbered list via markdown syntax
- **WHEN** user types "1. " at the beginning of a line
- **THEN** system automatically converts it to a numbered list item

#### Scenario: Add new numbered item
- **WHEN** user presses Enter at the end of a numbered list item
- **THEN** system creates a new numbered list item with the next number

#### Scenario: Exit numbered list
- **WHEN** user presses Enter on an empty numbered list item
- **THEN** system exits the list and creates a new paragraph

#### Scenario: Nest numbered lists
- **WHEN** user presses Tab on a numbered list item
- **THEN** system indents the item and restarts numbering at 1

#### Scenario: Numbering continues correctly
- **WHEN** user deletes a list item in the middle
- **THEN** system renumbers all subsequent items automatically

### Requirement: User can create code blocks
The system SHALL allow users to create code blocks for displaying code or preformatted text.

#### Scenario: Create code block via slash command
- **WHEN** user types "/" and selects "代码块" from the menu
- **THEN** system creates a code block at the current position

#### Scenario: Create code block via markdown syntax
- **WHEN** user types "``` " at the beginning of a line
- **THEN** system creates a code block

#### Scenario: Type in code block
- **WHEN** user types in a code block
- **THEN** system preserves all formatting, spaces, and line breaks

#### Scenario: Exit code block
- **WHEN** user presses Ctrl+Enter or clicks outside the code block
- **THEN** system exits the code block and creates a new paragraph

#### Scenario: Code block displays with monospace font
- **WHEN** user creates a code block
- **THEN** system displays it with monospace font and distinct background color

### Requirement: User can create horizontal rules
The system SHALL allow users to create horizontal rules to visually separate sections.

#### Scenario: Create horizontal rule via slash command
- **WHEN** user types "/" and selects "分割线" from the menu
- **THEN** system inserts a horizontal rule at the current position

#### Scenario: Create horizontal rule via markdown syntax
- **WHEN** user types "---" or "***" on a line and presses Space
- **THEN** system converts it to a horizontal rule

#### Scenario: Horizontal rule displays correctly
- **WHEN** user creates a horizontal rule
- **THEN** system displays a horizontal line spanning the full width

### Requirement: Slash command menu supports rich text formatting
The system SHALL include all new formatting options in the slash command menu.

#### Scenario: Display formatting options in slash menu
- **WHEN** user types "/" to open the slash command menu
- **THEN** system displays options grouped by category (剧本元素, 文本格式)

#### Scenario: Search formatting options
- **WHEN** user types "/" followed by a search term (e.g., "/标题")
- **THEN** system filters the menu to show matching formatting options

#### Scenario: Format group displays first
- **WHEN** user views the slash command menu
- **THEN** system shows 剧本元素 group first, followed by 文本格式 group
