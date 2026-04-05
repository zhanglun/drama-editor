## ADDED Requirements

### Requirement: User can create a new script
The system SHALL allow users to create a new script with a title and basic metadata.

#### Scenario: Create new script with title
- **WHEN** user clicks "New Script" button and enters a title
- **THEN** system creates a new script with empty content and the provided title

#### Scenario: Default metadata is initialized
- **WHEN** a new script is created
- **THEN** system initializes default metadata including author, created date, and empty characters list

### Requirement: User can edit script content with structured formatting
The system SHALL provide a rich text editor that supports structured script formatting including scenes, dialogues, and actions.

#### Scenario: Add a new scene
- **WHEN** user clicks "Add Scene" or types scene heading format (e.g., "INT. LOCATION - DAY")
- **THEN** system creates a new scene block with proper formatting

#### Scenario: Add character dialogue
- **WHEN** user types a character name in uppercase followed by dialogue text
- **THEN** system formats it as dialogue with character name centered and dialogue text below

#### Scenario: Add action description
- **WHEN** user types descriptive text without character name
- **THEN** system formats it as action/description text

#### Scenario: Add transition
- **WHEN** user types a transition keyword (e.g., "CUT TO:", "FADE OUT")
- **THEN** system formats it as right-aligned transition

### Requirement: User can manage characters
The system SHALL allow users to add, edit, and remove characters from the script.

#### Scenario: Add new character
- **WHEN** user types a new character name in dialogue
- **THEN** system automatically adds the character to the character list

#### Scenario: View character list
- **WHEN** user opens character panel
- **THEN** system displays all characters used in the script

#### Scenario: Edit character name
- **WHEN** user edits a character name in the character panel
- **THEN** system updates all occurrences of that character name in the script

### Requirement: User can save script changes
The system SHALL automatically save script changes and provide manual save option.

#### Scenario: Auto-save on content change
- **WHEN** user makes changes to the script content
- **THEN** system automatically saves changes after 3 seconds of inactivity

#### Scenario: Manual save
- **WHEN** user clicks "Save" button or presses Ctrl/Cmd+S
- **THEN** system immediately saves all changes

#### Scenario: Save indicator
- **WHEN** script has unsaved changes
- **THEN** system displays "Unsaved changes" indicator
- **WHEN** save completes successfully
- **THEN** system displays "Saved" indicator

### Requirement: User can undo and redo edits
The system SHALL support undo/redo functionality for all editing operations.

#### Scenario: Undo last action
- **WHEN** user presses Ctrl/Cmd+Z or clicks "Undo" button
- **THEN** system reverts the last edit operation

#### Scenario: Redo undone action
- **WHEN** user presses Ctrl/Cmd+Shift+Z or clicks "Redo" button after undoing
- **THEN** system reapplies the undone edit operation

#### Scenario: Undo/redo history limit
- **WHEN** user performs more than 100 edit operations
- **THEN** system maintains only the last 100 operations in undo history

### Requirement: Editor supports rich text formatting
The system SHALL support basic rich text formatting within script elements.

#### Scenario: Apply bold formatting
- **WHEN** user selects text and presses Ctrl/Cmd+B
- **THEN** system applies bold formatting to selected text

#### Scenario: Apply italic formatting
- **WHEN** user selects text and presses Ctrl/Cmd+I
- **THEN** system applies italic formatting to selected text

#### Scenario: Remove formatting
- **WHEN** user selects formatted text and presses the formatting shortcut again
- **THEN** system removes the formatting

### Requirement: Editor displays character count
The system SHALL display character count for the current script.

#### Scenario: Show character count
- **WHEN** user views the script
- **THEN** system displays total character count at the bottom of the editor

#### Scenario: Update count on edit
- **WHEN** user edits the script content
- **THEN** system updates character count in real-time

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
