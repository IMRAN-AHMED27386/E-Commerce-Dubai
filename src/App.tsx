import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { Product } from './types';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onCartOpen={handleCartOpen} />
        <Hero />
        <ProductGrid onProductClick={handleProductClick} />
        <Footer />
        
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            isOpen={!!selectedProduct}
            onClose={handleCloseModal}
          />
        )}
        
        <Cart isOpen={isCartOpen} onClose={handleCartClose} />
      </div>
    </CartProvider>
  );
}

export default App;