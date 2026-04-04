-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Scripts table
CREATE TABLE IF NOT EXISTS scripts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    content JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Characters table
CREATE TABLE IF NOT EXISTS characters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    script_id UUID NOT NULL REFERENCES scripts(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Script versions table
CREATE TABLE IF NOT EXISTS script_versions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    script_id UUID NOT NULL REFERENCES scripts(id) ON DELETE CASCADE,
    version_number INTEGER NOT NULL,
    content JSONB NOT NULL,
    change_summary TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(script_id, version_number)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_characters_script_id ON characters(script_id);
CREATE INDEX IF NOT EXISTS idx_script_versions_script_id ON script_versions(script_id);
CREATE INDEX IF NOT EXISTS idx_scripts_created_at ON scripts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_script_versions_created_at ON script_versions(created_at DESC);

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at trigger to scripts
DROP TRIGGER IF EXISTS update_scripts_updated_at ON scripts;
CREATE TRIGGER update_scripts_updated_at
    BEFORE UPDATE ON scripts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) - allow anonymous access for MVP
ALTER TABLE scripts ENABLE ROW LEVEL SECURITY;
ALTER TABLE characters ENABLE ROW LEVEL SECURITY;
ALTER TABLE script_versions ENABLE ROW LEVEL SECURITY;

-- Policies for anonymous access
CREATE POLICY "Allow anonymous read access on scripts" ON scripts
    FOR SELECT USING (true);

CREATE POLICY "Allow anonymous insert access on scripts" ON scripts
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous update access on scripts" ON scripts
    FOR UPDATE USING (true);

CREATE POLICY "Allow anonymous delete access on scripts" ON scripts
    FOR DELETE USING (true);

CREATE POLICY "Allow anonymous read access on characters" ON characters
    FOR SELECT USING (true);

CREATE POLICY "Allow anonymous insert access on characters" ON characters
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous update access on characters" ON characters
    FOR UPDATE USING (true);

CREATE POLICY "Allow anonymous delete access on characters" ON characters
    FOR DELETE USING (true);

CREATE POLICY "Allow anonymous read access on script_versions" ON script_versions
    FOR SELECT USING (true);

CREATE POLICY "Allow anonymous insert access on script_versions" ON script_versions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous update access on script_versions" ON script_versions
    FOR UPDATE USING (true);

CREATE POLICY "Allow anonymous delete access on script_versions" ON script_versions
    FOR DELETE USING (true);
