import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-800">
                HealthyPay
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/login"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/loans"
              className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// update
export default Navbar;
