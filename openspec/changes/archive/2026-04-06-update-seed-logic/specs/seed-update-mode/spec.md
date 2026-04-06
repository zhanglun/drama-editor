## ADDED Requirements

### Requirement: Seed script supports force update mode
The seed-runner.ts SHALL accept a `--force` command line argument that updates existing scripts instead of skipping them.

#### Scenario: Default behavior unchanged
- **WHEN** `pnpm seed` is run without `--force`
- **THEN** existing scripts SHALL be skipped (current idempotent behavior preserved)

#### Scenario: Force update triggers update
- **WHEN** `pnpm seed --force` is run
- **THEN** existing scripts SHALL be updated with new content from the seed files

### Requirement: Force update replaces script content
When updating an existing script, the system SHALL replace the script's content and metadata.

#### Scenario: Content updated
- **WHEN** a script with matching title exists and `--force` is used
- **THEN** the script's `content` field SHALL be updated with the new TipTap JSON content

#### Scenario: Characters replaced
- **WHEN** a script with matching title exists and `--force` is used
- **THEN** all existing characters for that script SHALL be deleted and replaced with the new character list

#### Scenario: New version created
- **WHEN** a script with matching title exists and `--force` is used
- **THEN** a new version SHALL be created in `script_versions` with an incremented version number and change summary "Seed 数据更新"

### Requirement: Force update provides clear feedback
The seed runner SHALL clearly indicate which scripts were updated vs created vs skipped.

#### Scenario: Output shows update status
- **WHEN** `pnpm seed --force` completes
- **THEN** the output SHALL show counts of: created, updated, skipped, failed scripts
