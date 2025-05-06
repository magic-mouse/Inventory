CREATE TABLE materials (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,               -- Name of the material (e.g., Oak Plank, Bottle Opener Kit)
    category VARCHAR(100),                    -- Category (e.g., Wood, Hardware, Finish)
    quantity NUMERIC,                         -- How much of it you have (can be kg, pcs, m², etc.)
    unit VARCHAR(50),                         -- Unit of measure (e.g., pcs, m, kg, ml)
    location VARCHAR(255),                    -- Where it's stored (e.g., Shelf A, Box 2)
    description TEXT,                         -- Optional notes or details
    created_at TIMESTAMP DEFAULT now()        -- Timestamp for tracking when added
);
ALTER TABLE materials ADD COLUMN price NUMERIC(10, 2);

UPDATE materials SET category = NULL, unit = NULL, location = NULL;
-- First make sure columns exist and are the correct type (int or uuid)
-- Assuming they are INTEGER and nullable (optional)
ALTER TABLE materials
ALTER COLUMN category TYPE INTEGER USING category::integer;

ALTER TABLE materials
ALTER COLUMN unit TYPE INTEGER USING unit::integer;

ALTER TABLE materials
ALTER COLUMN location TYPE INTEGER USING location::integer;


ALTER TABLE materials
  ADD CONSTRAINT fk_material_category
    FOREIGN KEY (category) REFERENCES attributes(id) ON DELETE SET NULL;

ALTER TABLE materials
  ADD CONSTRAINT fk_material_unit
    FOREIGN KEY (unit) REFERENCES attributes(id) ON DELETE SET NULL;

ALTER TABLE materials
  ADD CONSTRAINT fk_material_location
    FOREIGN KEY (location) REFERENCES attributes(id) ON DELETE SET NULL;
