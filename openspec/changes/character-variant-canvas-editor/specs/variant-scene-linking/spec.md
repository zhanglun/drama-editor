# Variant Scene Linking

## ADDED Requirements

### Requirement: Variant can be linked to multiple scenes

The system SHALL allow a variant to be associated with zero or more scenes from the script.

#### Scenario: Link variant to scene
- **WHEN** user links a variant to a scene
- **THEN** system creates an association record between the variant and scene

#### Scenario: Link variant to multiple scenes
- **WHEN** user links a variant to scenes 1, 5, and 10
- **THEN** system creates three association records for the same variant

### Requirement: Scene can have multiple variants

The system SHALL allow a scene to be associated with multiple character variants.

#### Scenario: Multiple variants in one scene
- **WHEN** scene 5 contains variants A, B, and C
- **THEN** system retrieves all three variants when querying scene 5

#### Scenario: Query variants by scene
- **WHEN** user selects a scene in the script editor
- **THEN** system displays all variants linked to that scene

### Requirement: Scene link includes metadata

The system SHALL store creation timestamp for each variant-scene link.

#### Scenario: Track when link was created
- **WHEN** user links a variant to a scene
- **THEN** system records the current timestamp

### Requirement: Scene links are removable

The system SHALL allow users to remove variant-scene associations.

#### Scenario: Remove single scene link
- **WHEN** user removes the link between variant A and scene 5
- **THEN** system deletes the association record

#### Scenario: Variant remains after link removal
- **WHEN** user removes all scene links from a variant
- **THEN** variant still exists but has zero scene associations

### Requirement: Scene deletion removes links

The system SHALL remove variant-scene links when a scene is deleted from the script.

#### Scenario: Delete scene with variant links
- **WHEN** user deletes scene 5 which has linked variants
- **THEN** system removes all links referencing scene 5

### Requirement: Variant deletion removes links

The system SHALL remove variant-scene links when a variant is deleted.

#### Scenario: Delete variant with scene links
- **WHEN** user deletes variant A which is linked to scenes 1, 2, 3
- **THEN** system removes all links referencing variant A

### Requirement: Scene links display in canvas

The system SHALL display scene associations visually in the canvas editor.

#### Scenario: View scene count on variant node
- **WHEN** variant is displayed in canvas
- **THEN** node shows count of linked scenes

#### Scenario: View linked scenes detail
- **WHEN** user hovers or clicks on variant node
- **THEN** system displays list of linked scene names/numbers

### Requirement: Bulk scene linking

The system SHALL allow linking a variant to multiple scenes in a single operation.

#### Scenario: Bulk link operation
- **WHEN** user selects multiple scenes and links them to a variant
- **THEN** system creates all associations in a single transaction
