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
