import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { products } from './data/products';
import { Product, CartItem } from './types';
import { Leaf } from 'lucide-react';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory(''); // Clear category filter when searching
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Clear search when selecting category
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
        onSearch={handleSearch}
      />
      
      {/* Pure Veg Banner */}
      <div className="bg-green-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 text-sm font-medium">
            <Leaf className="w-4 h-4" />
            <span>100% Pure Vegetarian Store - No Non-Veg Items</span>
            <Leaf className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      <Hero />
      
      <Categories onCategorySelect={handleCategorySelect} />
      
      {/* Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedCategory || searchQuery ? (
                  <>
                    {selectedCategory && `${selectedCategory} Products`}
                    {searchQuery && `Search Results for "${searchQuery}"`}
                  </>
                ) : (
                  'Fresh Vegetarian Products for You'
                )}
              </h2>
              <p className="mt-2 text-gray-600 flex items-center">
                <Leaf className="w-4 h-4 text-green-600 mr-1" />
                {filteredProducts.length} pure veg products available
              </p>
            </div>
            {(selectedCategory || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('');
                  setSearchQuery('');
                }}
                className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                Show All Products
              </button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-gray-400">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">
                {searchQuery ? `No results for "${searchQuery}"` : `No products in ${selectedCategory}`}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('');
                  setSearchQuery('');
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Browse All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/WhatsApp Image 2025-06-13 at 12.34.32_e949fc8f.jpg"
                  alt="FreshAura Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="ml-2 text-xl font-bold">FreshAura</span>
              </div>
              <p className="text-gray-400 mb-3">
                Fresh vegetarian groceries delivered to your doorstep in minutes. 100% pure veg guaranteed.
              </p>
              <div className="flex items-center text-green-400 text-sm">
                <Leaf className="w-4 h-4 mr-1" />
                <span>Certified Pure Vegetarian</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pure Veg Promise</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Fresh Vegetables</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fresh Fruits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dairy Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Grains & Pulses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Spices & Herbs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +91 98765 43210</li>
                <li>📧 hello@freshaura.com</li>
                <li>📍 New Delhi, India</li>
                <li>🕐 24/7 Service</li>
                <li className="flex items-center text-green-400">
                  <Leaf className="w-4 h-4 mr-1" />
                  <span>Pure Veg Only</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FreshAura. All rights reserved. Built with ❤️ for pure vegetarian living.</p>
          </div>
        </div>
      </footer>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}

export default App;