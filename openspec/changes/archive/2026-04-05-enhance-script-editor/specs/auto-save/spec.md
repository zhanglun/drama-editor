## ADDED Requirements

### Requirement: Auto-save with debounce
The system SHALL automatically save editor content to backend after user stops typing for 500ms.

#### Scenario: Content changes trigger auto-save
- **WHEN** user types in the editor
- **AND** user stops typing for 500ms
- **THEN** system sends PATCH request to save content
- **AND** system shows "Saving..." indicator

#### Scenario: Rapid changes are debounced
- **WHEN** user types continuously in the editor
- **THEN** system does NOT send save request until user stops for 500ms

#### Scenario: Save failure shows error
- **WHEN** auto-save request fails
- **THEN** system shows error toast notification
- **AND** system retries on next content change

### Requirement: Save status indicator
The system SHALL display current save status in the editor toolbar.

#### Scenario: Idle state
- **WHEN** no unsaved changes exist
- **THEN** system shows no indicator or "Saved" status

#### Scenario: Saving state
- **WHEN** save request is in progress
- **THEN** system shows "Saving..." indicator

#### Scenario: Saved state
- **WHEN** save request succeeds
- **THEN** system shows "Saved" indicator for 2 seconds
- **THEN** indicator returns to idle state

#### Scenario: Error state
- **WHEN** save request fails
- **THEN** system shows "Save failed" indicator
- **AND** system shows retry button

### Requirement: Manual save trigger
The system SHALL allow users to manually trigger save via keyboard shortcut.

#### Scenario: Ctrl+S triggers save
- **WHEN** user presses Ctrl+S (or Cmd+S on Mac)
- **THEN** system immediately saves content
- **AND** prevents browser's default save dialog
