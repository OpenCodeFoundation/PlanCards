"use client";

import { useRouter } from "next/navigation"; // Use next/navigation for routing

const Header = () => {
  const router = useRouter();

  const gotogame = () => {
    // Navigate to the "Create Game" page
    router.push("/create-game");
  };

  return (
    <header className="flex justify-between items-center p-4 shadow-lg bg-white">
      <div className="flex items-center">
        <img src="/game.png" alt="Logo" className="w-10 h-10 mr-2" />
        <h1 className="text-lg font-bold text-gray-800">weagileyou</h1>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600 font-medium">imran ▼</span>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          onClick={gotogame}
        >
          Start new game
        </button>
      </div>
    </header>
  );
};

export default Header;
