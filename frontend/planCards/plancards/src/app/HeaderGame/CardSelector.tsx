"use client";
import React from "react";

interface CardSelectorProps {
  selectedCard: number | string | null;
  onCardClick: (card: number | string) => void;
}

const CardSelector: React.FC<CardSelectorProps> = ({ selectedCard, onCardClick }) => {
  const cards: (number | string)[] = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, "?", "☕"];

  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-lg text-gray-700 mb-4">Choose your card 👇</p>
      <div className="grid grid-cols-6 gap-4">
        {cards.map((card, index) => (
          <button
            key={index}
            className={`w-12 h-12 flex items-center justify-center  border text-lg font-bold transition ${
              selectedCard === card
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
            onClick={() => onCardClick(card)}
          >
            {card}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardSelector;
