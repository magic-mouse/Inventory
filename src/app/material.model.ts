export interface Material {
    id?: number;
    name: string;
    category: string;
    quantity: number;
    unit: string;
    location: string;
    description: string;
    price: number;
    created_at?: string;
  }

  export interface Category {
    id?: number;
    name: string;
    created_at?: string;
  }

  export interface Attribute {
    id?: number;
    name: string;
    type: string;
    created_at?: string;
  }
