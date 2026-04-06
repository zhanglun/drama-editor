-- ============================================================
-- Migration: 002_character_variants.sql
-- Description: Add character variants, scene linking, and canvas state
-- ============================================================

-- ============================================================
-- UP MIGRATION
-- ============================================================

-- 1. Extend characters table with variant metadata
ALTER TABLE characters ADD COLUMN IF NOT EXISTS traits JSONB DEFAULT '{}';
ALTER TABLE characters ADD COLUMN IF NOT EXISTS color VARCHAR(7) DEFAULT '#6366f1';
ALTER TABLE characters ADD COLUMN IF NOT EXISTS canvas_position JSONB DEFAULT '{"x": 0, "y": 0}';

-- 2. Create character_variants table (adjacency list pattern)
CREATE TABLE IF NOT EXISTS character_variants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
    parent_variant_id UUID REFERENCES character_variants(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    image_url TEXT,
    traits JSONB DEFAULT '{}',
    color VARCHAR(7),
    canvas_position JSONB DEFAULT '{"x": 0, "y": 0}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create variant_scenes association table (many-to-many)
CREATE TABLE IF NOT EXISTS variant_scenes (
    variant_id UUID NOT NULL REFERENCES character_variants(id) ON DELETE CASCADE,
    scene_id VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    PRIMARY KEY (variant_id, scene_id)
);

-- 4. Add canvas_state to scripts table (1:1 with script)
ALTER TABLE scripts ADD COLUMN IF NOT EXISTS canvas_state JSONB DEFAULT NULL;

-- 5. Indexes
CREATE INDEX IF NOT EXISTS idx_variants_character ON character_variants(character_id);
CREATE INDEX IF NOT EXISTS idx_variants_parent ON character_variants(parent_variant_id);
CREATE INDEX IF NOT EXISTS idx_variant_scenes_scene ON variant_scenes(scene_id);

-- 6. Updated_at trigger for character_variants
DROP TRIGGER IF EXISTS update_character_variants_updated_at ON character_variants;
CREATE TRIGGER update_character_variants_updated_at
    BEFORE UPDATE ON character_variants
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 7. RLS policies for character_variants
ALTER TABLE character_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE variant_scenes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous read access on character_variants" ON character_variants
    FOR SELECT USING (true);
CREATE POLICY "Allow anonymous insert access on character_variants" ON character_variants
    FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous update access on character_variants" ON character_variants
    FOR UPDATE USING (true);
CREATE POLICY "Allow anonymous delete access on character_variants" ON character_variants
    FOR DELETE USING (true);

CREATE POLICY "Allow anonymous read access on variant_scenes" ON variant_scenes
    FOR SELECT USING (true);
CREATE POLICY "Allow anonymous insert access on variant_scenes" ON variant_scenes
    FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous update access on variant_scenes" ON variant_scenes
    FOR UPDATE USING (true);
CREATE POLICY "Allow anonymous delete access on variant_scenes" ON variant_scenes
    FOR DELETE USING (true);

-- ============================================================
-- DOWN MIGRATION (rollback)
-- To rollback, run the statements below manually:
-- ============================================================
-- DROP POLICY IF EXISTS "Allow anonymous delete access on variant_scenes" ON variant_scenes;
-- DROP POLICY IF EXISTS "Allow anonymous update access on variant_scenes" ON variant_scenes;
-- DROP POLICY IF EXISTS "Allow anonymous insert access on variant_scenes" ON variant_scenes;
-- DROP POLICY IF EXISTS "Allow anonymous read access on variant_scenes" ON variant_scenes;
-- DROP POLICY IF EXISTS "Allow anonymous delete access on character_variants" ON character_variants;
-- DROP POLICY IF EXISTS "Allow anonymous update access on character_variants" ON character_variants;
-- DROP POLICY IF EXISTS "Allow anonymous insert access on character_variants" ON character_variants;
-- DROP POLICY IF EXISTS "Allow anonymous read access on character_variants" ON character_variants;
-- DROP TRIGGER IF EXISTS update_character_variants_updated_at ON character_variants;
-- DROP INDEX IF EXISTS idx_variant_scenes_scene;
-- DROP INDEX IF EXISTS idx_variants_parent;
-- DROP INDEX IF EXISTS idx_variants_character;
-- DROP TABLE IF EXISTS variant_scenes;
-- DROP TABLE IF EXISTS character_variants;
-- ALTER TABLE scripts DROP COLUMN IF EXISTS canvas_state;
-- ALTER TABLE characters DROP COLUMN IF EXISTS canvas_position;
-- ALTER TABLE characters DROP COLUMN IF EXISTS color;
-- ALTER TABLE characters DROP COLUMN IF EXISTS traits;
