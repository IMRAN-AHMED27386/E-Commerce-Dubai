import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Electronics",
    description: "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.",
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: ["Active Noise Cancellation", "30-hour Battery", "Wireless Charging", "Premium Build Quality"]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 249.99,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Wearables",
    description: "Track your fitness goals with advanced health monitoring, GPS, and week-long battery life.",
    rating: 4.6,
    reviews: 892,
    inStock: true,
    images: [
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: ["Heart Rate Monitor", "GPS Tracking", "7-day Battery", "Water Resistant"]
  },
  {
    id: 3,
    name: "Ultra-Portable Laptop",
    price: 1299.99,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    category: "Computers",
    description: "Lightweight powerhouse with latest processor, all-day battery, and stunning display perfect for professionals.",
    rating: 4.9,
    reviews: 2156,
    inStock: true,
    images: [
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: ["Latest Processor", "14-hour Battery", "Ultra-lightweight", "4K Display"]
  },
  {
    id: 4,
    name: "Professional Camera Kit",
    price: 899.99,
    originalPrice: 1199.99,
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Photography",
    description: "Capture stunning photos with our professional camera kit including multiple lenses and accessories.",
    rating: 4.7,
    reviews: 743,
    inStock: true,
    images: [
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: ["Multiple Lenses", "4K Video", "Professional Quality", "Complete Kit"]
  },
  {
    id: 5,
    name: "Gaming Mechanical Keyboard",
    price: 159.99,
    image: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Gaming",
    description: "Elevate your gaming experience with tactile mechanical switches and customizable RGB lighting.",
    rating: 4.5,
    reviews: 1087,
    inStock: true,
    images: [
      "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: ["Mechanical Switches", "RGB Lighting", "Gaming Optimized", "Durable Build"]
  },
  {
    id: 6,
    name: "Wireless Bluetooth Speaker",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Audio",
    description: "Portable speaker with rich bass, waterproof design, and 12-hour playtime for any adventure.",
    rating: 4.4,
    reviews: 567,
    inStock: true,
    images: [
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: ["Wireless Bluetooth", "Waterproof", "12-hour Battery", "Rich Bass"]
  }
];

export const categories = [
  "All",
  "Electronics",
  "Wearables", 
  "Computers",
  "Photography",
  "Gaming",
  "Audio"
];