"use client";

import React, { useState } from "react";

export default function CardSelectionGame() {
  const [playerSelections, setPlayerSelections] = useState<(number | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  const [maxCard, setMaxCard] = useState<number[] | null>(null);

  const cards = [1, 2, 3, 5, 8, 13, 21];

  const handleCardSelect = (playerIndex: number, cardValue: number) => {
    const updatedSelections = [...playerSelections];
    updatedSelections[playerIndex] = cardValue;
    setPlayerSelections(updatedSelections);

    // Check if all players have made their selections
    if (updatedSelections.every((selection) => selection !== null)) {
      // Calculate the most selected card
      const cardFrequency: Record<number, number> = {};
      updatedSelections.forEach((card) => {
        if (card !== null) {
          cardFrequency[card] = (cardFrequency[card] || 0) + 1;
        }
      });

      // Find the card(s) with the highest frequency
      const maxFrequency = Math.max(...Object.values(cardFrequency));
      const mostSelectedCards = Object.keys(cardFrequency)
        .filter((key) => cardFrequency[Number(key)] === maxFrequency)
        .map(Number);

      setMaxCard(mostSelectedCards);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Card Selection Game
      </h1>
      <div className="grid grid-cols-2 gap-6">
        {playerSelections.map((selection, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md text-center"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Player {index + 1}
            </h2>
            <div className="flex justify-center gap-2 flex-wrap">
              {cards.map((card) => (
                <button
                  key={card}
                  onClick={() => handleCardSelect(index, card)}
                  className={`px-4 py-2 rounded-lg text-white font-medium ${
                    selection === card
                      ? "bg-blue-500"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                  disabled={selection !== null} // Disable button after selection
                >
                  {card}
                </button>
              ))}
            </div>
            {selection !== null && (
              <p className="mt-4 text-green-600 font-medium">
                Selected Card: {selection}
              </p>
            )}
          </div>
        ))}
      </div>
      {maxCard && (
        <div className="mt-8 bg-blue-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-800">
            Most Selected Card{maxCard.length > 1 ? "s" : ""}:{" "}
            {maxCard.join(", ")}
          </h2>
        </div>
      )}
    </div>
  );
}
