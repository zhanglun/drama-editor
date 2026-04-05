## ADDED Requirements

### Requirement: User can apply multi-level headings
The system SHALL support heading levels H1-H6 for document structure organization.

#### Scenario: Apply heading via toolbar
- **WHEN** user selects text and clicks a heading level button in the toolbar
- **THEN** system applies the selected heading level to the text

#### Scenario: Heading shortcuts work alongside script shortcuts
- **WHEN** user presses heading shortcuts (Ctrl/Cmd+Alt+1~6)
- **THEN** system applies heading formatting without interfering with script node shortcuts (Ctrl/Cmd+1~4)

### Requirement: User can apply blockquote formatting
The system SHALL support blockquote formatting for highlighting text.

#### Scenario: Apply blockquote via toolbar
- **WHEN** user clicks the blockquote button in the toolbar
- **THEN** system wraps the current selection in a blockquote

#### Scenario: Toggle blockquote
- **WHEN** user clicks the blockquote button on already quoted text
- **THEN** system removes the blockquote formatting

### Requirement: User can create lists
The system SHALL support both bullet lists and numbered lists.

#### Scenario: Apply bullet list via toolbar
- **WHEN** user clicks the bullet list button in the toolbar
- **THEN** system converts the current line to a bullet list item

#### Scenario: Apply numbered list via toolbar
- **WHEN** user clicks the numbered list button in the toolbar
- **THEN** system converts the current line to a numbered list item

#### Scenario: Toggle list formatting
- **WHEN** user clicks a list button on already formatted text
- **THEN** system removes the list formatting

### Requirement: Toolbar displays rich text formatting options
The system SHALL display rich text formatting buttons alongside script element buttons.

#### Scenario: Toolbar shows formatting section
- **WHEN** user views the editor toolbar
- **THEN** system displays a formatting section with heading, blockquote, and list buttons

#### Scenario: Toolbar buttons reflect current formatting state
- **WHEN** user places cursor in formatted text (e.g., heading, blockquote)
- **THEN** system highlights the corresponding toolbar button

### Requirement: Script elements coexist with rich text elements
The system SHALL allow script elements (scene, dialogue, action, transition) to coexist with rich text elements (headings, lists, blockquotes).

#### Scenario: Mix script nodes and rich text
- **WHEN** user creates a document with both script nodes and headings/lists
- **THEN** system preserves all formatting and allows seamless editing

#### Scenario: Convert between script nodes and rich text
- **WHEN** user applies a script node format to a heading
- **THEN** system converts the heading to the script node type
- **WHEN** user applies a heading format to a script node
- **THEN** system converts the script node to a heading

### Requirement: Character count includes all text types
The system SHALL count characters from all text types including headings, lists, and blockquotes.

#### Scenario: Update character count with rich text
- **WHEN** user adds headings, lists, or blockquotes
- **THEN** system includes these characters in the total count
