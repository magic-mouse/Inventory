CREATE TABLE machines (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,                -- Machine name (e.g., Jigsaw, Sander)
    brand VARCHAR(255),                        -- Machine brand (e.g., Bosch, Makita)
    model VARCHAR(255),                        -- Model (if applicable)
    last_maintenance DATE,                     -- Last maintenance date (for tracking)
    next_maintenance DATE,                     -- Next maintenance date (for tracking)
    description TEXT                           -- Description or notes for the machine
);
