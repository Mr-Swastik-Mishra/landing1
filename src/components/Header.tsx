import React, { useState } from 'react';
import { Search, ShoppingCart, MapPin, User, Menu, X } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cartItems: CartItem[];
  onCartClick: () => void;
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, onCartClick, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                src="/WhatsApp Image 2025-06-13 at 12.34.32_e949fc8f.jpg"
                alt="FreshAura Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">FreshAura</span>
            </div>
          </div>

          {/* Location */}
          <div className="hidden md:flex items-center text-sm text-gray-600 ml-6">
            <MapPin className="w-4 h-4 mr-1 text-emerald-600" />
            <span>Deliver to</span>
            <span className="ml-1 font-medium text-gray-900">Home - 110001</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-4">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </form>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* User Account */}
            <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">Account</span>
            </button>

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative flex items-center space-x-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-3 py-2 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex items-center space-x-2 text-gray-600 mb-4">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span className="text-sm">Deliver to Home - 110001</span>
            </div>
            <button className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">My Account</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;