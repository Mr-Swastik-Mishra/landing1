import React from 'react';
import { Clock, Truck, Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-50 to-green-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Pure Veg Badge */}
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              100% Pure Vegetarian
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Fresh Veg Groceries
              <span className="block text-emerald-600">Daily & Fast</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              Get fresh vegetables, fruits, dairy, and pure vegetarian essentials delivered to your doorstep in minutes. 
              Quality guaranteed, 100% vegetarian, prices unmatched.
            </p>
            
            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 text-emerald-700">
                <Clock className="w-5 h-5" />
                <span className="font-medium">10 Min Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-700">
                <Truck className="w-5 h-5" />
                <span className="font-medium">Free Delivery</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Shop Pure Veg Now
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh vegetarian groceries and delivery"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Pure Vegetarian</p>
                  <p className="text-sm text-gray-600">100% Veg Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;