## ADDED Requirements

### Requirement: Scene nodes display with enhanced visual design
The system SHALL display scene nodes with improved visual hierarchy and modern styling.

#### Scenario: Scene displays with visual indicators
- **WHEN** user creates or views a scene node
- **THEN** system displays it with a distinct background color, icon, and left border

#### Scenario: Scene shows type label
- **WHEN** user views a scene node
- **THEN** system displays a "场景" label at the top left of the node

#### Scenario: Scene node is fully editable
- **WHEN** user clicks on the scene heading text
- **THEN** system allows inline editing of the heading content

#### Scenario: Scene node shows selection state
- **WHEN** user clicks on a scene node
- **THEN** system displays a selection ring or border to indicate focus

### Requirement: Dialogue nodes display with enhanced visual design
The system SHALL display dialogue nodes with character attribution and improved readability.

#### Scenario: Dialogue displays character name prominently
- **WHEN** user creates or views a dialogue node
- **THEN** system displays the character name in a distinct style above the dialogue text

#### Scenario: Dialogue shows type label
- **WHEN** user views a dialogue node
- **THEN** system displays a "对白" label at the top left of the node

#### Scenario: Dialogue text is clearly separated
- **WHEN** user views a dialogue node
- **THEN** system displays dialogue text with appropriate indentation and spacing

#### Scenario: Dialogue node is fully editable
- **WHEN** user clicks on the character name or dialogue text
- **THEN** system allows inline editing of both fields

#### Scenario: Dialogue node shows selection state
- **WHEN** user clicks on a dialogue node
- **THEN** system displays a selection ring or border to indicate focus

### Requirement: Action nodes display with enhanced visual design
The system SHALL display action nodes with clear differentiation from dialogue.

#### Scenario: Action displays with distinct styling
- **WHEN** user creates or views an action node
- **THEN** system displays it with a distinct background color and icon

#### Scenario: Action shows type label
- **WHEN** user views an action node
- **THEN** system displays a "动作" label at the top left of the node

#### Scenario: Action text uses appropriate font
- **WHEN** user views an action node
- **THEN** system displays action text in regular font (not monospace)

#### Scenario: Action node is fully editable
- **WHEN** user clicks on the action text
- **THEN** system allows inline editing

#### Scenario: Action node shows selection state
- **WHEN** user clicks on an action node
- **THEN** system displays a selection ring or border to indicate focus

### Requirement: Transition nodes display with enhanced visual design
The system SHALL display transition nodes with emphasis on the transition type.

#### Scenario: Transition displays right-aligned
- **WHEN** user creates or views a transition node
- **THEN** system displays it right-aligned with uppercase text

#### Scenario: Transition shows type label
- **WHEN** user views a transition node
- **THEN** system displays a "转场" label at the top left of the node

#### Scenario: Transition displays with distinct styling
- **WHEN** user views a transition node
- **THEN** system displays it with a distinct background color and icon

#### Scenario: Transition node is fully editable
- **WHEN** user clicks on the transition text
- **THEN** system allows inline editing

#### Scenario: Transition node shows selection state
- **WHEN** user clicks on a transition node
- **THEN** system displays a selection ring or border to indicate focus

### Requirement: Nodes have interactive hover states
The system SHALL provide visual feedback when users hover over custom nodes.

#### Scenario: Node shows hover state
- **WHEN** user hovers over a custom node (scene, dialogue, action, transition)
- **THEN** system displays a subtle background color change or border highlight

#### Scenario: Node toolbar appears on hover
- **WHEN** user hovers over a custom node
- **THEN** system displays a toolbar with quick actions (delete, move up/down)

#### Scenario: Toolbar hides when not hovering
- **WHEN** user moves cursor away from the node
- **THEN** system hides the toolbar

### Requirement: Nodes support quick actions via toolbar
The system SHALL provide a toolbar for common node operations.

#### Scenario: Delete node via toolbar
- **WHEN** user clicks the delete button in the node toolbar
- **THEN** system removes the node and its content

#### Scenario: Move node up via toolbar
- **WHEN** user clicks the up arrow in the node toolbar
- **THEN** system moves the node up one position in the document

#### Scenario: Move node down via toolbar
- **WHEN** user clicks the down arrow in the node toolbar
- **THEN** system moves the node down one position in the document

#### Scenario: Toolbar actions disabled at boundaries
- **WHEN** user views the toolbar for the first node
- **THEN** system disables the "move up" button
- **WHEN** user views the toolbar for the last node
- **THEN** system disables the "move down" button

#### Scenario: Toolbar displays icons with tooltips
- **WHEN** user hovers over toolbar buttons
- **THEN** system displays a tooltip explaining the action (e.g., "删除", "上移", "下移")

### Requirement: All custom nodes maintain consistent design language
The system SHALL ensure all custom nodes follow a unified visual design system.

#### Scenario: Consistent spacing and padding
- **WHEN** user views multiple custom node types
- **THEN** system displays them with consistent padding and spacing

#### Scenario: Consistent border radius
- **WHEN** user views multiple custom node types
- **THEN** system displays them with the same border radius

#### Scenario: Consistent label positioning
- **WHEN** user views multiple custom node types
- **THEN** system displays type labels in the same position (top left)

#### Scenario: Color-coded by type
- **WHEN** user views multiple custom node types
- **THEN** system uses distinct colors for each type while maintaining visual harmony
