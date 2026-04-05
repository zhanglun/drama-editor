## ADDED Requirements

### Requirement: Insert scene heading via button
The system SHALL insert a new scene heading block when user clicks the Scene button.

#### Scenario: Insert at cursor position
- **WHEN** user clicks the Scene button
- **THEN** system inserts a new empty scene heading block at cursor position
- **AND** cursor is placed inside the new block

#### Scenario: Insert after current block
- **WHEN** cursor is in the middle of a block
- **AND** user clicks the Scene button
- **THEN** system splits the current block
- **AND** system inserts a new scene heading block between the split parts

### Requirement: Insert dialogue via button
The system SHALL insert a new dialogue block when user clicks the Dialogue button.

#### Scenario: Insert dialogue block
- **WHEN** user clicks the Dialogue button
- **THEN** system inserts a new empty dialogue block at cursor position

### Requirement: Insert action via button
The system SHALL insert a new action block when user clicks the Action button.

#### Scenario: Insert action block
- **WHEN** user clicks the Action button
- **THEN** system inserts a new empty action block at cursor position

### Requirement: Insert transition via button
The system SHALL insert a new transition block when user clicks the Transition button.

#### Scenario: Insert transition block
- **WHEN** user clicks the Transition button
- **THEN** system inserts a new empty transition block at cursor position

### Requirement: Visual feedback on insert
The system SHALL provide visual feedback when an element is inserted.

#### Scenario: Highlight inserted block
- **WHEN** a new block is inserted via button
- **THEN** system briefly highlights the new block (e.g., flash animation)
- **AND** highlight fades after 500ms

### Requirement: Keyboard shortcuts for insert
The system SHALL support keyboard shortcuts for inserting elements.

#### Scenario: Shortcut for scene
- **WHEN** user presses Ctrl+1 (or Cmd+1 on Mac)
- **THEN** system inserts a new scene heading block

#### Scenario: Shortcut for dialogue
- **WHEN** user presses Ctrl+2 (or Cmd+2 on Mac)
- **THEN** system inserts a new dialogue block

#### Scenario: Shortcut for action
- **WHEN** user presses Ctrl+3 (or Cmd+3 on Mac)
- **THEN** system inserts a new action block

#### Scenario: Shortcut for transition
- **WHEN** user presses Ctrl+4 (or Cmd+4 on Mac)
- **THEN** system inserts a new transition block
