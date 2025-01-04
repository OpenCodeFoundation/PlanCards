"use client";
import React from "react";

interface SelectedCardProps {
  selectedCard: number | string | null;
}

const SelectedCard: React.FC<SelectedCardProps> = ({ selectedCard }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-md bg-white shadow-md p-6 mb-4">
      <p className="text-lg text-gray-800 mb-2">Pick your cards!</p>
      <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white text-2xl font-bold">
        {selectedCard !== null ? selectedCard : "?"}
      </div>
      <div className="mt-4 text-gray-600 font-semibold">imran</div>
    </div>
  );
};

export default SelectedCard;
