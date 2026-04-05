## ADDED Requirements

### Requirement: User can view list of all scripts
The system SHALL display a list of all scripts created by the user.

#### Scenario: Display script list
- **WHEN** user opens the application
- **THEN** system displays a list of all scripts with title, last modified date, and preview

#### Scenario: Sort script list
- **WHEN** user clicks on column headers (Title, Date Modified, Date Created)
- **THEN** system sorts the script list by the selected column

#### Scenario: Search scripts
- **WHEN** user types in the search box
- **THEN** system filters the script list to show only scripts matching the search term in title or content

#### Scenario: Empty state
- **WHEN** user has no scripts
- **THEN** system displays "No scripts yet" message with "Create your first script" button

### Requirement: User can create a new script
The system SHALL allow users to create new scripts from the script list view.

#### Scenario: Create script from list view
- **WHEN** user clicks "New Script" button in the script list
- **THEN** system creates a new empty script and navigates to the editor

#### Scenario: Create script with template
- **WHEN** user clicks "New Script" and selects a template (optional feature)
- **THEN** system creates a new script with pre-populated content from the template

### Requirement: User can open an existing script
The system SHALL allow users to open and edit existing scripts.

#### Scenario: Open script from list
- **WHEN** user clicks on a script in the script list
- **THEN** system opens the script in the editor

#### Scenario: Open most recent script
- **WHEN** user opens the application
- **THEN** system offers to open the most recently edited script

#### Scenario: Open script via direct link
- **WHEN** user navigates to a script URL directly (e.g., /scripts/abc123)
- **THEN** system loads and displays that script

### Requirement: User can delete a script
The system SHALL allow users to delete scripts with confirmation.

#### Scenario: Delete script from list
- **WHEN** user clicks "Delete" button on a script in the list
- **THEN** system displays confirmation dialog
- **AND** when confirmed, system moves script to trash or deletes permanently

#### Scenario: Undo delete
- **WHEN** user deletes a script
- **THEN** system displays "Undo" option for 10 seconds
- **AND** if user clicks "Undo", script is restored

#### Scenario: Prevent accidental deletion
- **WHEN** user tries to delete a script with unsaved changes
- **THEN** system warns about unsaved changes before deletion

### Requirement: User can duplicate a script
The system SHALL allow users to create a copy of an existing script.

#### Scenario: Duplicate script
- **WHEN** user clicks "Duplicate" button on a script
- **THEN** system creates a copy of the script with title "Copy of [original title]"
- **AND** system navigates to the duplicated script

#### Scenario: Duplicate preserves all content
- **WHEN** script is duplicated
- **THEN** duplicated script includes all content, characters, and metadata from original

### Requirement: User can rename a script
The system SHALL allow users to rename scripts.

#### Scenario: Rename script from list
- **WHEN** user clicks "Rename" on a script and enters new title
- **THEN** system updates the script title

#### Scenario: Rename script in editor
- **WHEN** user edits the title in the editor header
- **THEN** system updates the script title and saves automatically

#### Scenario: Prevent empty title
- **WHEN** user tries to save a script with empty title
- **THEN** system displays error "Script title cannot be empty"

### Requirement: User can see script metadata
The system SHALL display metadata about each script.

#### Scenario: Display script metadata
- **WHEN** user views script details
- **THEN** system displays:
  - Title
  - Author
  - Creation date
  - Last modified date
  - Character count
  - Scene count
  - Version count

#### Scenario: Edit metadata
- **WHEN** user clicks on metadata fields
- **THEN** system allows editing author, genre, logline, and notes fields

### Requirement: System auto-saves script changes
The system SHALL automatically save script changes to prevent data loss.

#### Scenario: Auto-save on interval
- **WHEN** user is editing a script
- **THEN** system automatically saves changes every 30 seconds if there are unsaved changes

#### Scenario: Auto-save on blur
- **WHEN** user switches to another tab or window
- **THEN** system saves any unsaved changes immediately

#### Scenario: Auto-save indicator
- **WHEN** auto-save is in progress
- **THEN** system displays "Saving..." indicator
- **WHEN** auto-save completes
- **THEN** system displays "All changes saved" message briefly

### Requirement: User can manage script storage
The system SHALL provide information about storage usage.

#### Scenario: Display storage usage
- **WHEN** user views settings or account page
- **THEN** system displays total storage used and storage limit

#### Scenario: Warn on storage limit
- **WHEN** user approaches storage limit (80%)
- **THEN** system displays warning message

#### Scenario: Prevent creation when storage full
- **WHEN** storage is full and user tries to create new script
- **THEN** system displays error "Storage full. Please delete some scripts to create new ones."

### Requirement: User can import scripts (future feature placeholder)
The system SHALL allow users to import scripts from files (post-MVP).

#### Scenario: Import from TXT file
- **WHEN** user clicks "Import" and selects a TXT file
- **THEN** system parses the file and creates a new script (future feature)

#### Scenario: Import from Fountain file
- **WHEN** user clicks "Import" and selects a Fountain file
- **THEN** system parses the file and creates a new script (future feature)

**Note**: This requirement is for future implementation and not part of MVP.

### Requirement: System handles concurrent editing gracefully
The system SHALL prevent data loss when the same script is open in multiple tabs.

#### Scenario: Detect multiple tabs
- **WHEN** user opens the same script in multiple browser tabs
- **THEN** system displays warning "This script is open in another tab"

#### Scenario: Sync changes across tabs
- **WHEN** user makes changes in one tab
- **THEN** system updates other tabs with the changes (if feasible) or warns about conflicts

#### Scenario: Prevent conflicting saves
- **WHEN** user saves in one tab after making changes in another tab
- **THEN** system preserves the most recent changes

### Requirement: User can organize scripts with tags (future feature)
The system SHALL allow users to tag and filter scripts (post-MVP).

#### Scenario: Add tags to script
- **WHEN** user adds tags to a script (e.g., "comedy", "short film")
- **THEN** system saves the tags and displays them in the script list

#### Scenario: Filter by tag
- **WHEN** user clicks on a tag
- **THEN** system filters the script list to show only scripts with that tag

**Note**: This requirement is for future implementation and not part of MVP.
