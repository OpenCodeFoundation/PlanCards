/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";

// components/HeroSection.js
const HeroSection = () => {
    const router = useRouter();
  const gotogame = () => {
    // Navigate to the "Create Game" page
    router.push("/create-game");
  };
    return (
      <section className="text-center py-16 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Scrum Poker for agile teams
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Easy-to-use and fun story point estimations.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 text-lg rounded-md hover:bg-blue-700" onClick={gotogame}>
          Start new game
        </button>
        <div className="mt-8">
          <img
            src="/scrum-poker-example.png"
            alt="Scrum Poker Example"
            className="w-3/4 mx-auto rounded-lg shadow-md"
          />
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  