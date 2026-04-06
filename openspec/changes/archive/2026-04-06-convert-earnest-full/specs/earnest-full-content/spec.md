## ADDED Requirements

### Requirement: Earnest full play content in TipTap JSON
The seed file `script-6-importance-being-earnest.ts` SHALL contain the complete text of Oscar Wilde's "The Importance of Being Earnest" converted to TipTap JSON format, including all 3 acts with every line of dialogue and stage direction.

#### Scenario: All 3 acts present
- **WHEN** the seed file is loaded
- **THEN** the content array SHALL contain scene nodes for all 3 acts with their complete content

#### Scenario: All character dialogues included
- **WHEN** the seed file is loaded
- **THEN** all dialogue from the original play SHALL be present as `dialogue` nodes with the correct `attrs.character` value

#### Scenario: Stage directions preserved
- **WHEN** the seed file is loaded
- **THEN** all stage directions (entrances, exits, actions) SHALL be present as `action` nodes

### Requirement: Earnest character list completeness
The seed file SHALL include all named speaking characters from the play.

#### Scenario: All characters listed
- **WHEN** the characters array is inspected
- **THEN** it SHALL include: John Worthing, Algernon Moncrieff, Gwendolen Fairfax, Cecily Cardew, Lady Bracknell, Miss Prism, Dr. Chasuble, Lane, Merriman

### Requirement: TipTap JSON format compliance
All content nodes SHALL follow the established TipTap JSON schema.

#### Scenario: Node types are valid
- **WHEN** the content array is inspected
- **THEN** every node's `type` SHALL be one of: `doc`, `scene`, `dialogue`, `action`, `transition`
