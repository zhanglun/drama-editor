## ADDED Requirements

### Requirement: Line number display
The system SHALL display line numbers alongside the editor content.

#### Scenario: Show continuous line numbers
- **WHEN** line number mode is active
- **THEN** system displays a number for each line in the editor
- **AND** numbers start from 1 and increment by 1

#### Scenario: Line numbers sync with scroll
- **WHEN** user scrolls the editor content
- **THEN** line numbers scroll synchronously
- **AND** line numbers remain aligned with their corresponding lines

### Requirement: Scene number display
The system SHALL display scene numbers instead of line numbers when scene mode is active.

#### Scenario: Show scene numbers
- **WHEN** scene number mode is active
- **THEN** system displays a number for each scene heading
- **AND** numbers start from 1 and increment by 1
- **AND** non-scene lines have no number displayed

### Requirement: Number mode toggle
The system SHALL allow users to toggle between line number and scene number modes.

#### Scenario: Toggle via toolbar
- **WHEN** user clicks line number toggle button in toolbar
- **THEN** system switches between line number and scene number modes

#### Scenario: Mode persistence
- **WHEN** user switches number mode
- **THEN** system remembers the preference
- **AND** preference persists across sessions

### Requirement: Click to navigate
The system SHALL allow clicking on scene numbers to navigate to that scene.

#### Scenario: Navigate to scene
- **WHEN** scene number mode is active
- **AND** user clicks on a scene number
- **THEN** editor scrolls to that scene
- **AND** cursor is placed at the start of the scene
