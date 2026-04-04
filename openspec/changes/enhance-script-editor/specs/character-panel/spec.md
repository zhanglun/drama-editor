## ADDED Requirements

### Requirement: Character panel display
The system SHALL display a character panel showing all characters in the current script.

#### Scenario: Panel shows character list
- **WHEN** user opens the editor page
- **THEN** system displays character panel on the right side
- **AND** panel shows all characters from the script

#### Scenario: Panel can be collapsed
- **WHEN** user clicks collapse button on character panel
- **THEN** panel collapses to a minimal width
- **AND** expand button is visible

#### Scenario: Panel can be expanded
- **WHEN** user clicks expand button on collapsed panel
- **THEN** panel expands to full width
- **AND** character list is visible

### Requirement: Add new character
The system SHALL allow users to add new characters from the character panel.

#### Scenario: Add character via input
- **WHEN** user types character name in the input field
- **AND** user presses Enter or clicks "Add" button
- **THEN** system adds the character to the list
- **AND** system saves the change to backend

#### Scenario: Empty name is rejected
- **WHEN** user tries to add character with empty name
- **THEN** system does NOT add the character
- **AND** add button is disabled

### Requirement: Edit character name
The system SHALL allow users to edit existing character names.

#### Scenario: Edit character inline
- **WHEN** user clicks edit button on a character
- **THEN** character name becomes editable input
- **AND** user can modify the name

#### Scenario: Save edited name
- **WHEN** user presses Enter or clicks outside the input
- **THEN** system saves the new name
- **AND** system updates all references in the script content

### Requirement: Delete character
The system SHALL allow users to delete characters from the list.

#### Scenario: Delete with confirmation
- **WHEN** user clicks delete button on a character
- **THEN** system shows confirmation dialog
- **AND** user can confirm or cancel

#### Scenario: Confirmed deletion
- **WHEN** user confirms deletion
- **THEN** system removes character from the list
- **AND** system saves the change to backend

### Requirement: Character count display
The system SHALL display the total number of characters in the panel header.

#### Scenario: Count updates on add
- **WHEN** user adds a new character
- **THEN** character count increases by 1

#### Scenario: Count updates on delete
- **WHEN** user deletes a character
- **THEN** character count decreases by 1
