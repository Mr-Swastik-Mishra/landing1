import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Fresh Vegetables',
    icon: '🥬',
    image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Fresh Fruits',
    icon: '🍎',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    name: 'Dairy Products',
    icon: '🥛',
    image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    name: 'Bakery & Breads',
    icon: '🍞',
    image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '5',
    name: 'Grains & Pulses',
    icon: '🌾',
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '6',
    name: 'Spices & Herbs',
    icon: '🌿',
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Tomatoes',
    price: 45,
    originalPrice: 55,
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fresh Vegetables',
    rating: 4.5,
    deliveryTime: '10 mins',
    unit: '500g',
    inStock: true,
    discount: 18
  },
  {
    id: '2',
    name: 'Fresh Bananas',
    price: 25,
    image: 'https://images.pexels.com/photos/2238309/pexels-photo-2238309.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fresh Fruits',
    rating: 4.3,
    deliveryTime: '8 mins',
    unit: '1 dozen',
    inStock: true
  },
  {
    id: '3',
    name: 'Pure Cow Milk',
    price: 28,
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy Products',
    rating: 4.7,
    deliveryTime: '12 mins',
    unit: '500ml',
    inStock: true
  },
  {
    id: '4',
    name: 'Whole Wheat Bread',
    price: 35,
    originalPrice: 40,
    image: 'https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Bakery & Breads',
    rating: 4.4,
    deliveryTime: '15 mins',
    unit: '400g',
    inStock: true,
    discount: 12
  },
  {
    id: '5',
    name: 'Green Apples',
    price: 120,
    image: 'https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fresh Fruits',
    rating: 4.6,
    deliveryTime: '10 mins',
    unit: '1kg',
    inStock: true
  },
  {
    id: '6',
    name: 'Organic Carrots',
    price: 32,
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fresh Vegetables',
    rating: 4.2,
    deliveryTime: '12 mins',
    unit: '500g',
    inStock: true
  },
  {
    id: '7',
    name: 'Fresh Paneer',
    price: 85,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy Products',
    rating: 4.8,
    deliveryTime: '8 mins',
    unit: '200g',
    inStock: true
  },
  {
    id: '8',
    name: 'Basmati Rice',
    price: 180,
    originalPrice: 200,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Grains & Pulses',
    rating: 4.5,
    deliveryTime: '15 mins',
    unit: '1kg',
    inStock: true,
    discount: 10
  },
  {
    id: '9',
    name: 'Fresh Spinach',
    price: 20,
    image: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fresh Vegetables',
    rating: 4.3,
    deliveryTime: '10 mins',
    unit: '250g',
    inStock: true
  },
  {
    id: '10',
    name: 'Sweet Oranges',
    price: 60,
    image: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fresh Fruits',
    rating: 4.4,
    deliveryTime: '12 mins',
    unit: '1kg',
    inStock: true
  },
  {
    id: '11',
    name: 'Greek Yogurt',
    price: 45,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy Products',
    rating: 4.6,
    deliveryTime: '10 mins',
    unit: '200g',
    inStock: true
  },
  {
    id: '12',
    name: 'Turmeric Powder',
    price: 25,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Spices & Herbs',
    rating: 4.7,
    deliveryTime: '15 mins',
    unit: '100g',
    inStock: true
  },
  {
    id: '13',
    name: 'Red Onions',
    price: 30,
    image: 'https://images.pexels.com/photos/144248/onions-food-vegetables-healthy-144248.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fresh Vegetables',
    rating: 4.2,
    deliveryTime: '10 mins',
    unit: '1kg',
    inStock: true
  },
  {
    id: '14',
    name: 'Fresh Grapes',
    price: 80,
    image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fresh Fruits',
    rating: 4.5,
    deliveryTime: '12 mins',
    unit: '500g',
    inStock: true
  },
  {
    id: '15',
    name: 'Toor Dal',
    price: 120,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Grains & Pulses',
    rating: 4.4,
    deliveryTime: '15 mins',
    unit: '1kg',
    inStock: true
  },
  {
    id: '16',
    name: 'Fresh Coriander',
    price: 15,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Spices & Herbs',
    rating: 4.3,
    deliveryTime: '10 mins',
    unit: '100g',
    inStock: true
  }
];