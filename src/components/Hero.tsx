import React from 'react';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl lg:text-6xl">
              Discover Amazing{' '}
              <span className="text-blue-600">Products</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Experience premium quality tech products with cutting-edge design. 
              From headphones to laptops, find everything you need to upgrade your lifestyle.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full rounded-lg"
                src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium Products"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-blue-500">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">Fast Delivery</h3>
                <p className="mt-2 text-base text-gray-600">
                  Free shipping on orders over $50. Express delivery available.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-green-500">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">Secure Payment</h3>
                <p className="mt-2 text-base text-gray-600">
                  Your payment information is safe and secure with us.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-purple-500">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">Easy Returns</h3>
                <p className="mt-2 text-base text-gray-600">
                  30-day return policy. No questions asked guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;