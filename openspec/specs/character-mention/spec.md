## ADDED Requirements

### Requirement: Mention trigger for characters
The system SHALL display a character selection menu when user types "@" in the editor.

#### Scenario: Show menu on at sign
- **WHEN** user types "@" in the editor
- **THEN** system displays a dropdown menu with available characters

#### Scenario: Menu filters by query
- **WHEN** user types "@" followed by text (e.g., "@张")
- **THEN** system filters characters to match the query
- **AND** matching is case-insensitive

#### Scenario: No matching characters
- **WHEN** user types "@" followed by text that matches no characters
- **THEN** system shows "No characters found" message

### Requirement: Character selection
The system SHALL allow selecting a character from the mention menu.

#### Scenario: Select with mouse
- **WHEN** user clicks on a character in the menu
- **THEN** system inserts the character name as a mention
- **AND** system hides the menu

#### Scenario: Select with keyboard
- **WHEN** user navigates to a character with arrow keys
- **AND** user presses Enter
- **THEN** system inserts the character name as a mention
- **AND** system hides the menu

### Requirement: Mention styling
The system SHALL style character mentions distinctly from regular text.

#### Scenario: Mention visual style
- **WHEN** a character mention is inserted
- **THEN** mention has a distinct background color
- **AND** mention has a rounded border
- **AND** mention is non-editable as plain text

### Requirement: Mention data source
The system SHALL use characters from the current script as mention options.

#### Scenario: Dynamic character list
- **WHEN** user triggers mention menu
- **THEN** system shows characters from scriptStore.currentScript.content.characters
- **AND** list updates when characters are added or removed
