## ADDED Requirements

### Requirement: User can view version history
The system SHALL maintain a version history of the script and allow users to view it.

#### Scenario: Display version history
- **WHEN** user clicks "Version History" button
- **THEN** system displays a list of all saved versions with timestamp and optional version name

#### Scenario: Version history entry details
- **WHEN** version history is displayed
- **THEN** each entry shows:
  - Version number or name
  - Date and time of creation
  - Author (if multi-user in future)
  - Brief preview of changes (first 100 characters)

#### Scenario: Version history sorted by date
- **WHEN** version history is displayed
- **THEN** versions are sorted in reverse chronological order (newest first)

### Requirement: User can create version snapshots
The system SHALL allow users to manually create named version snapshots.

#### Scenario: Create version snapshot
- **WHEN** user clicks "Create Version" button and provides a version name
- **THEN** system saves current script state as a new version with the provided name
- **AND** system displays success message

#### Scenario: Version name is optional
- **WHEN** user creates a version without providing a name
- **THEN** system generates default name using timestamp (e.g., "Version at 2024-01-15 14:30")

#### Scenario: Prevent duplicate version names
- **WHEN** user creates a version with a name that already exists
- **THEN** system displays warning and prompts user to choose a different name

### Requirement: User can compare two versions side-by-side
The system SHALL allow users to select two versions and view differences in a side-by-side diff view.

#### Scenario: Select versions to compare
- **WHEN** user selects two versions from version history
- **THEN** system opens diff viewer showing both versions side by side

#### Scenario: Display added content
- **WHEN** diff viewer shows comparison
- **THEN** added text is highlighted in green background

#### Scenario: Display removed content
- **WHEN** diff viewer shows comparison
- **THEN** removed text is highlighted in red background with strikethrough

#### Scenario: Display modified content
- **WHEN** diff viewer shows comparison
- **THEN** modified text shows old version (red strikethrough) and new version (green highlight)

#### Scenario: Display unchanged content
- **WHEN** diff viewer shows comparison
- **THEN** unchanged text appears in normal formatting

### Requirement: Diff viewer supports different comparison modes
The system SHALL allow users to choose different comparison granularity.

#### Scenario: Line-by-line comparison
- **WHEN** user selects "Line-by-line" mode
- **THEN** diff viewer highlights differences at the line level

#### Scenario: Word-by-word comparison
- **WHEN** user selects "Word-by-word" mode
- **THEN** diff viewer highlights differences at the word level within lines

#### Scenario: Character-by-character comparison
- **WHEN** user selects "Character" mode
- **THEN** diff viewer highlights individual character changes

### Requirement: User can navigate diff efficiently
The system SHALL provide navigation controls to move between differences.

#### Scenario: Jump to next difference
- **WHEN** user clicks "Next Difference" button or presses down arrow
- **THEN** diff viewer scrolls to and highlights the next difference

#### Scenario: Jump to previous difference
- **WHEN** user clicks "Previous Difference" button or presses up arrow
- **THEN** diff viewer scrolls to and highlights the previous difference

#### Scenario: Display difference count
- **WHEN** diff viewer is open
- **THEN** system displays total number of differences found

#### Scenario: Display current difference position
- **WHEN** user navigates through differences
- **THEN** system displays current position (e.g., "Difference 3 of 15")

### Requirement: User can restore a previous version
The system SHALL allow users to restore the script to a previous version.

#### Scenario: Restore version from history
- **WHEN** user clicks "Restore" button on a version in history
- **THEN** system displays confirmation dialog
- **AND** when confirmed, system replaces current script with selected version content

#### Scenario: Auto-save before restore
- **WHEN** user restores a previous version
- **THEN** system first creates an auto-save of current state (if unsaved changes exist)
- **AND** system logs the restore action in version history

#### Scenario: Restore creates new version entry
- **WHEN** user restores a previous version
- **THEN** system creates a new version entry noting it was restored from version X

### Requirement: User can delete old versions
The system SHALL allow users to delete version snapshots to manage storage.

#### Scenario: Delete version from history
- **WHEN** user clicks "Delete" on a version entry
- **THEN** system displays confirmation dialog
- **AND** when confirmed, system removes version from history

#### Scenario: Prevent deleting current version
- **WHEN** user tries to delete the current/active version
- **THEN** system displays error message "Cannot delete current version"

#### Scenario: Bulk delete old versions
- **WHEN** user selects "Delete old versions" and specifies criteria (e.g., older than 30 days)
- **THEN** system deletes all matching versions after confirmation

### Requirement: Diff viewer handles large scripts efficiently
The system SHALL maintain acceptable performance when comparing large scripts.

#### Scenario: Handle scripts with 100+ scenes
- **WHEN** user compares versions of a script with 100+ scenes
- **THEN** diff viewer loads within 3 seconds
- **AND** navigation remains responsive

#### Scenario: Virtual scrolling for long diffs
- **WHEN** diff result is very long (1000+ lines)
- **THEN** system uses virtual scrolling to maintain performance
- **AND** only visible portion is rendered

### Requirement: Diff viewer preserves script structure
The system SHALL show differences while maintaining script structure visibility.

#### Scenario: Diff shows scene boundaries
- **WHEN** diff viewer displays comparison
- **THEN** scene headings are clearly marked and distinguishable from content

#### Scenario: Diff shows element types
- **WHEN** diff viewer displays comparison
- **THEN** different element types (dialogue, action, transition) are visually distinguishable
