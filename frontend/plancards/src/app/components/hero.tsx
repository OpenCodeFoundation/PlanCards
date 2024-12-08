"use client";
import React from "react";
import { useRouter } from "next/navigation";

const HeroSection: React.FC = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/new-game");
    }
  return (
    <div className="bg-gray-50 text-center py-16 h-screen">
      {/* Title */}
      <h1 className="text-6xl font-bold text-gray-800">
        Plan Cards for <span className="text-black">agile teams</span>
      </h1>
      {/* Subtitle */}
      <p className="mt-4 text-lg text-gray-600">
        Easy-to-use and fun story point estimations.
      </p>
      {/* Call to Action */}
      <div className="mt-8">
        <a
          href="#start-new-game"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
          onClick={handleClick}
        >
          Start new game
        </a>
      </div>
      {/* Trusted By Logos */}
      <div className="mt-12">
        <p className="text-sm font-medium text-gray-600 mb-4">TRUSTED BY TEAMS AT</p>
        <div className="flex justify-center items-center space-x-6">
          <img src="/logos/microsoft.png" alt="Microsoft" className="h-6" />
          <img src="/logos/google.png" alt="Google" className="h-6" />
          <img src="/logos/hp.png" alt="HP" className="h-6" />
          <img src="/logos/figma.png" alt="Figma" className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
