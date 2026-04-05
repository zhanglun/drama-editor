## ADDED Requirements

### Requirement: Slash command trigger
The system SHALL display a command menu when user types "/" in the editor.

#### Scenario: Show menu on slash
- **WHEN** user types "/" in the editor
- **THEN** system displays a dropdown menu with available commands

#### Scenario: Menu filters by query
- **WHEN** user types "/" followed by text (e.g., "/sc")
- **THEN** system filters menu items to match the query

#### Scenario: Hide menu on escape
- **WHEN** command menu is visible
- **AND** user presses Escape key
- **THEN** system hides the menu
- **AND** cursor remains in place

### Requirement: Slash command navigation
The system SHALL support keyboard navigation in the command menu.

#### Scenario: Navigate with arrow keys
- **WHEN** command menu is visible
- **AND** user presses Down arrow key
- **THEN** system highlights next menu item

#### Scenario: Select with Enter key
- **WHEN** a menu item is highlighted
- **AND** user presses Enter key
- **THEN** system executes the selected command
- **AND** system hides the menu

### Requirement: Insert scene via slash command
The system SHALL allow inserting scene heading via "/scene" command.

#### Scenario: Insert scene heading
- **WHEN** user types "/scene" and selects it
- **THEN** system inserts a new scene heading block at cursor position
- **AND** cursor is placed inside the new block

### Requirement: Insert dialogue via slash command
The system SHALL allow inserting dialogue block via "/dialogue" command.

#### Scenario: Insert dialogue block
- **WHEN** user types "/dialogue" and selects it
- **THEN** system inserts a new dialogue block at cursor position

### Requirement: Insert action via slash command
The system SHALL allow inserting action description via "/action" command.

#### Scenario: Insert action block
- **WHEN** user types "/action" and selects it
- **THEN** system inserts a new action block at cursor position

### Requirement: Insert transition via slash command
The system SHALL allow inserting transition via "/transition" command.

#### Scenario: Insert transition block
- **WHEN** user types "/transition" and selects it
- **THEN** system inserts a new transition block at cursor position
