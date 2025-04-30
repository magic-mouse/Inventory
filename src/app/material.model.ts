export interface Material {
    id?: number;
    name: string;
    category: string;
    quantity: number;
    unit: string;
    location: string;
    description: string;
    created_at?: string; // optional because it's automatically handled by the database
  }
  