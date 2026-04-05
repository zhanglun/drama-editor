## ADDED Requirements

### Requirement: User can export script to PDF
The system SHALL allow users to export the script in PDF format with standard screenplay formatting.

#### Scenario: Export to PDF
- **WHEN** user clicks "Export" button and selects "PDF" format
- **THEN** system generates a PDF file with proper screenplay formatting (Courier font, 12pt, proper margins)
- **AND** system prompts user to download the file

#### Scenario: PDF formatting follows industry standards
- **WHEN** script is exported to PDF
- **THEN** system applies standard screenplay formatting:
  - Scene headings: uppercase, bold
  - Character names: uppercase, centered
  - Dialogue: centered under character name
  - Action: left-aligned
  - Transitions: right-aligned, uppercase

#### Scenario: PDF includes metadata
- **WHEN** script is exported to PDF
- **THEN** PDF includes title page with script title, author, and date

#### Scenario: Handle export errors
- **WHEN** PDF generation fails
- **THEN** system displays error message "Failed to export PDF. Please try again."

### Requirement: User can export script to DOCX
The system SHALL allow users to export the script in Microsoft Word (DOCX) format.

#### Scenario: Export to DOCX
- **WHEN** user clicks "Export" button and selects "DOCX" format
- **THEN** system generates a DOCX file with screenplay formatting
- **AND** system prompts user to download the file

#### Scenario: DOCX preserves formatting
- **WHEN** script is exported to DOCX
- **THEN** DOCX file maintains scene structure and text formatting
- **AND** file can be opened and edited in Microsoft Word or compatible applications

#### Scenario: DOCX includes styles
- **WHEN** script is exported to DOCX
- **THEN** system applies Word styles for different script elements (Scene, Dialogue, Action)

### Requirement: User can export script to plain text
The system SHALL allow users to export the script in plain text (TXT) format.

#### Scenario: Export to TXT
- **WHEN** user clicks "Export" button and selects "TXT" format
- **THEN** system generates a plain text file with basic formatting
- **AND** system prompts user to download the file

#### Scenario: TXT preserves structure
- **WHEN** script is exported to TXT
- **THEN** text file maintains scene structure using spacing and capitalization
- **AND** file is readable in any text editor

#### Scenario: TXT formatting conventions
- **WHEN** script is exported to TXT
- **THEN** system applies formatting conventions:
  - Scene headings: ALL CAPS
  - Character names: ALL CAPS, centered with spaces
  - Dialogue: indented
  - Action: standard paragraph format
  - Transitions: ALL CAPS, right-aligned with spaces

### Requirement: Export includes complete script content
The system SHALL include all script content in exported files.

#### Scenario: Export includes all scenes
- **WHEN** script is exported to any format
- **THEN** all scenes in the script are included in the exported file

#### Scenario: Export includes all characters
- **WHEN** script is exported to any format
- **THEN** all character dialogues are included in the exported file

#### Scenario: Export preserves element order
- **WHEN** script is exported to any format
- **THEN** elements appear in the same order as in the editor

### Requirement: User can preview export before downloading
The system SHALL allow users to preview how the exported script will look.

#### Scenario: Preview PDF export
- **WHEN** user clicks "Preview" before exporting
- **THEN** system displays a preview of how the PDF will look
- **AND** user can confirm or cancel the export

#### Scenario: Preview in different formats
- **WHEN** user selects different export format
- **THEN** preview updates to show formatting for that format

### Requirement: Export handles special characters correctly
The system SHALL properly encode special characters and non-ASCII text in exports.

#### Scenario: Export with Unicode characters
- **WHEN** script contains Unicode characters (e.g., Chinese, emoji)
- **THEN** exported file displays characters correctly without encoding errors

#### Scenario: Export with special formatting
- **WHEN** script contains bold, italic, or underlined text
- **THEN** exported file preserves text formatting (where format supports it)
