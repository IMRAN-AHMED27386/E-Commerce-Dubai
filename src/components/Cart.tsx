import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, total, itemCount, updateQuantity, removeFromCart, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
        
        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl">
              <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                  <div className="ml-3 h-7 flex items-center">
                    <button
                      onClick={onClose}
                      className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  {items.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
                      <p className="mt-1 text-sm text-gray-500">Start shopping to add items to your cart.</p>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {items.map((item) => (
                          <li key={item.product.id} className="py-6 flex">
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="w-full h-full object-center object-cover"
                              />
                            </div>

                            <div className="ml-4 flex-1 flex flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>{item.product.name}</h3>
                                  <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{item.product.category}</p>
                              </div>
                              <div className="flex-1 flex items-end justify-between text-sm">
                                <div className="flex items-center space-x-2">
                                  <button
                                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                    className="p-1 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                                  >
                                    <Minus className="w-4 h-4" />
                                  </button>
                                  <span className="text-gray-700 font-medium">{item.quantity}</span>
                                  <button
                                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                    className="p-1 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                                  >
                                    <Plus className="w-4 h-4" />
                                  </button>
                                </div>

                                <div className="flex">
                                  <button
                                    onClick={() => removeFromCart(item.product.id)}
                                    className="font-medium text-red-600 hover:text-red-500 transition-colors duration-200"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {items.length > 0 && (
                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal ({itemCount} items)</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping calculated at checkout.</p>
                  
                  <div className="mt-6 space-y-3">
                    <button className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-4 text-base font-medium text-white hover:bg-blue-700 transition-colors duration-200">
                      Checkout
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                    >
                      Clear Cart
                    </button>
                  </div>
                  
                  <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                    <p>
                      or{' '}
                      <button
                        onClick={onClose}
                        className="text-blue-600 font-medium hover:text-blue-500 transition-colors duration-200"
                      >
                        Continue Shopping
                      </button>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;