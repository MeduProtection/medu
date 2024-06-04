import React from 'react'

function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex items-center space-x-4">
                <img className="h-8 w-auto" src="/path-to-logo.png" alt="Medu Logo" />
                <span className="text-lg font-semibold">Sustainable Medical Protection</span>
              </div>
              <div className="flex space-x-8 mt-4 lg:mt-0">
                <a href="#" className="hover:text-gray-400">Our Products</a>
                <a href="#" className="hover:text-gray-400">How it works</a>
                <a href="#" className="hover:text-gray-400">Industries</a>
                <a href="#" className="hover:text-gray-400">Insights</a>
                <a href="#" className="hover:text-gray-400">About Us</a>
                <button className="bg-white text-blue-900 py-2 px-4 rounded-full hover:bg-gray-100 transition">
                  I'm a Distributor
                </button>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-6 pt-4 flex flex-col lg:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">&copy; 2024 Medu Protection</p>
              <div className="flex space-x-4 mt-4 lg:mt-0">
                <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Terms</a>
                <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Privacy</a>
                <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      );
}

export default Footer