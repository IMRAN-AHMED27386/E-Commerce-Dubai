import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartOpen }) => {
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">ModernStore</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Products</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Categories</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>
            <button 
              onClick={onCartOpen}
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">Products</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">Categories</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">Contact</a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <User className="w-5 h-5" />
                </button>
                <button 
                  onClick={onCartOpen}
                  className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;