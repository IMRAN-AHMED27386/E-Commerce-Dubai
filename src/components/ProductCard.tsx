import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group overflow-hidden"
      onClick={() => onProductClick(product)}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            Sale
          </div>
        )}
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200 opacity-0 group-hover:opacity-100">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-600 font-medium">{product.category}</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
            <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 group/btn"
          >
            <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;