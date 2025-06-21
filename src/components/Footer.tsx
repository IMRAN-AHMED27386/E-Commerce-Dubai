import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ModernStore</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted destination for premium tech products. We're committed to bringing you the latest and greatest in technology.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Categories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Track Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Size Guide</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-300">123 Tech Street, Digital City, DC 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-300">support@modernstore.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left lg:flex lg:items-center lg:justify-between">
            <div>
              <h4 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h4>
              <p className="text-gray-300">Get the latest updates and exclusive offers.</p>
            </div>
            <div className="mt-4 lg:mt-0 lg:ml-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ModernStore. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;