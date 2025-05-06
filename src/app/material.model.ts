export interface Material {
    id?: number;
    name: string;
    category?: Attribute;
    quantity: number;
    unit?: Attribute;
    location?: Attribute;
    description?: string;
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
