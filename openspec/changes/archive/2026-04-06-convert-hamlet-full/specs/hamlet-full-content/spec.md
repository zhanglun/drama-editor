## ADDED Requirements

### Requirement: Hamlet full play content in TipTap JSON
The seed file `script-7-hamlet.ts` SHALL contain the complete text of Shakespeare's Hamlet converted to TipTap JSON format, including all 5 acts and 20 scenes with every line of dialogue and stage direction.

#### Scenario: All 20 scenes present
- **WHEN** the seed file is loaded
- **THEN** the content array SHALL contain scene nodes for all 20 scenes: Act I (5 scenes), Act II (2 scenes), Act III (4 scenes), Act IV (7 scenes), Act V (2 scenes)

#### Scenario: All character dialogues included
- **WHEN** the seed file is loaded
- **THEN** all dialogue from the original play SHALL be present as `dialogue` nodes with the correct `attrs.character` value

#### Scenario: Stage directions preserved
- **WHEN** the seed file is loaded
- **THEN** all stage directions (entrances, exits, actions) SHALL be present as `action` nodes

### Requirement: Hamlet character list completeness
The seed file SHALL include all named speaking characters from the play.

#### Scenario: Major characters listed
- **WHEN** the characters array is inspected
- **THEN** it SHALL include at minimum: Hamlet, Claudius, Gertrude, Polonius, Laertes, Ophelia, Horatio, Ghost, Rosencrantz, Guildenstern, Fortinbras, Osric, Marcellus, Barnardo, Francisco, Voltemand, Cornelius, Reynaldo, First Player, First Clown, Second Clown

#### Scenario: Character descriptions provided
- **WHEN** any character entry is inspected
- **THEN** it SHALL have a `name` field matching the `attrs.character` used in dialogue nodes, and a `description` field with a brief role description

### Requirement: TipTap JSON format compliance
All content nodes SHALL follow the established TipTap JSON schema used by the drama editor.

#### Scenario: Node types are valid
- **WHEN** the content array is inspected
- **THEN** every node's `type` SHALL be one of: `doc`, `scene`, `dialogue`, `action`, `transition`

#### Scenario: Dialogue nodes have character attribute
- **WHEN** a `dialogue` node is inspected
- **THEN** it SHALL have `attrs.character` matching a character in the characters array
