"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CreateGame() {
  const [gameName, setGameName] = useState("");
  const [votingSystem, setVotingSystem] = useState("Fibonacci");
  const votingOptions = [
    "Fibonacci (0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ?, ☕)",
    "T-Shirt Sizes (XS, S, M, L, XL)",
    "Custom Values",
  ];
  const router = useRouter();
  const handleCreateGame = () => {
    router.push("/PlanningPoker");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Create Game</h1>
        <div className="mb-4">
          <label
            htmlFor="gameName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Game&apos;s Name
          </label>
          <input
            id="gameName"
            type="text"
            placeholder="Enter game name"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="votingSystem"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Voting System
          </label>
          <select
            id="votingSystem"
            value={votingSystem}
            onChange={(e) => setVotingSystem(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {votingOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4 text-center">
          <button
            onClick={handleCreateGame}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Create Game
          </button>
        </div>
        <div className="text-center">
          <a
            href="#"
            className="text-blue-500 hover:underline text-sm font-medium"
          >
            Show advanced settings...
          </a>
        </div>
      </div>
    </div>
  );
}
