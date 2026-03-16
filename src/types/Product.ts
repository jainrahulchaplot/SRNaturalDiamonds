export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  features: string[];
  specifications: {
    material: string;
    purity: string;
    weight: string;
    certification: string;
  };
}