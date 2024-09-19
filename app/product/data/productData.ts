// data/productData.ts
import item1 from '../../assets/images/item_1.jpg';
import item2 from '../../assets/images/item_2.jpg';
import item3 from '../../assets/images/item_3.jpg';
import item4 from '../../assets/images/item_4.jpg';
import item5 from '../../assets/images/item_5.jpg';
import { StaticImageData } from 'next/image';
export interface Product {
  id: number;
  name: string;
  price: number;
  colors: string[];
  imageUrl: StaticImageData;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Modern Chair',
    price: 150,
    colors: ['Red', 'Blue', 'Green'],
    imageUrl: item1,
    description: 'A modern chair with a comfortable design.',
    category: 'Furniture',
  },
  {
    id: 2,
    name: 'Wooden Table',
    price: 300,
    colors: ['Brown', 'Black'],
    imageUrl: item2,
    description: 'A durable wooden table for any living room.',
    category: 'Furniture',
  },
  {
    id: 3,
    name: 'Decorative Lamp',
    price: 75,
    colors: ['White', 'Yellow'],
    imageUrl: item3,
    description: 'A stylish decorative lamp to light up your space.',
    category: 'Lighting',
  },
  {
    id: 4,
    name: 'Sofa Set',
    price: 500,
    colors: ['Gray', 'Blue'],
    imageUrl: item4,
    description: 'A comfortable sofa set for family living rooms.',
    category: 'Furniture',
  },
  {
    id: 4,
    name: 'Sofa Set',
    price: 500,
    colors: ['Gray', 'Blue'],
    imageUrl: item5,
    description: 'A comfortable sofa set for family living rooms.',
    category: 'Furniture',
  },
];
