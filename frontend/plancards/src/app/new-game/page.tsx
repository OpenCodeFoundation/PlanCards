import React from "react";
import Image from "next/image";

const PlanningPoker: React.FC = () => {
  return (
    <div className="container mx-auto mt-16 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">Plan Cards</h1>

        {/* User Avatars */}
        <div className="mt-8 flex justify-center space-x-8">
          <div>
            <Image
              src="/avatars/sara.jpg"
              alt="Sara"
              width={80}
              height={80}
              className="rounded-full"
            />
            <p className="mt-2 text-gray-600">Sara</p>
          </div>
          <div>
            <Image
              src="/avatars/michael.jpg"
              alt="Michael"
              width={80}
              height={80}
              className="rounded-full"
            />
            <p className="mt-2 text-gray-600">Michael</p>
          </div>
          <div>
            <Image
              src="/avatars/jennifer.jpg"
              alt="Jennifer"
              width={80}
              height={80}
              className="rounded-full"
            />
            <p className="mt-2 text-gray-600">Jennifer</p>
          </div>
        </div>

        {/* Card Selection */}
        <div className="mt-8 flex justify-center space-x-4">
          {[0, 1, 2, 3, 5, 8, 13, "?", "☕"].map((card, index) => (
            <button
              key={index}
              className="bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              {card}
            </button>
          ))}
        </div>

        {/* Reveal Cards Button */}
        <div className="mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Reveal cards
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanningPoker;
