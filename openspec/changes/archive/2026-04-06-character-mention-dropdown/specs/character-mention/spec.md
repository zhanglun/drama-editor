## MODIFIED Requirements

### Requirement: Mention styling
The system SHALL style character mentions as custom inline nodes with distinct visual appearance and non-editable behavior.

#### Scenario: Mention visual style
- **WHEN** a character mention is inserted
- **THEN** mention displays as an inline node with rounded corners (6px border-radius)
- **AND** mention has a distinct background color (light blue)
- **AND** mention is rendered as a custom TipTap node type (not plain text)
- **AND** mention displays with @ prefix before the character name

#### Scenario: Mention non-editable behavior
- **WHEN** user tries to edit a character mention
- **THEN** the entire mention node is selected (internal text is not editable)
- **AND** pressing Backspace deletes the entire mention node
- **AND** the mention behaves as an atomic unit

#### Scenario: Mention node structure
- **WHEN** a character mention is stored in document JSON
- **THEN** the node has type "characterMention"
- **AND** the node contains id and label attributes
- **AND** the node has atom property set to true

## ADDED Requirements

### Requirement: Character mention integration
The system SHALL integrate the CharacterMention extension into the script editor with dynamic character list.

#### Scenario: Extension enabled in editor
- **WHEN** user opens the script editor
- **THEN** the CharacterMention extension is loaded and active
- **AND** the extension is configured with characters from the current script

#### Scenario: Dynamic character list updates
- **WHEN** characters are added or removed from the script
- **THEN** the mention extension's character list updates automatically
- **AND** the @ dropdown menu shows the updated character list

#### Scenario: Mention insertion replaces trigger
- **WHEN** user selects a character from the mention menu
- **THEN** the @ symbol and query text are deleted
- **AND** a characterMention node is inserted at the cursor position
- **AND** the cursor is placed after the mention node
