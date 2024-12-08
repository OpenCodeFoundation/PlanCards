import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl">♠️</span>
          <span className="text-lg font-semibold text-gray-800">we agile you</span>
        </div>
        {/* Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-600 hover:text-black">
            Features
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-black">
            Pricing
          </a>
        </div>
        {/* Start New Game Button */}
        <div>
          <a
            href="#start-new-game"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Start new game
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
