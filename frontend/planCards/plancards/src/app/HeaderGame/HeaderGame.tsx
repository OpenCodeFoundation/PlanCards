"use client";
import React from "react";

const HeaderGame = () => {
  return (
    <header className="flex justify-between items-center w-full bg-white shadow-md p-4">
      <h1 className="text-xl font-bold text-gray-800">Planning Poker Game</h1>
      <div className="flex items-center">
        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
          I
        </div>
        <button className="text-blue-600 font-medium">Invite players</button>
      </div>
    </header>
  );
};

export default HeaderGame;
