"use client";
import React, { useState } from "react";
import HeaderGame from "../HeaderGame/HeaderGame";
import SelectedCard from "../HeaderGame/SelectedCard";
import CardSelector from "../HeaderGame/CardSelector";

const PlanningPokerPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | string | null>(null);

  const handleCardClick = (card: number | string) => {
    setSelectedCard(card);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <HeaderGame />
      <main className="flex flex-col items-center w-full max-w-4xl p-4">
        <p className="text-gray-600 mb-4">
          Feeling lonely? <a href="#" className="text-blue-600">Invite players</a>
        </p>
        <SelectedCard selectedCard={selectedCard} />
        <CardSelector selectedCard={selectedCard} onCardClick={handleCardClick} />
      </main>
    </div>
  );
};

export default PlanningPokerPage;
