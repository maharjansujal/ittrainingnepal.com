'use client';

import { useState } from 'react';

const SimpleCarousel = () => {
  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-teal-500',
    'bg-orange-500',
    'bg-gray-500',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const handleNext = () => {
    if (currentIndex + visibleCount < colors.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className="max-w-[1224px] my-[100px] mx-auto  overflow-hidden">
      <div className="mx-auto">
        <div className="absolute top-2 right-2 flex gap-2 z-10">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`p-2 rounded-full transition-colors ${currentIndex === 0
            ? 'bg-gray-400'
            : 'bg-gray-200 hover:bg-gray-300'
            }`}
        >
          ←
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + visibleCount >= colors.length}
          className={`p-2 rounded-full transition-colors ${currentIndex + visibleCount >= colors.length
            ? 'bg-gray-400'
            : 'bg-gray-200 hover:bg-gray-300'
            }`}
        >
          →
        </button>
      </div>


        {/* Carousel Content */}
        <div
          className="flex transition-all duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
          }}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-[33.33%] h-48 flex items-center justify-center text-white text-lg font-bold"
              style={{ flexShrink: 0 }}
            >
              <div className={`${color} w-full h-full`}>Div {index + 1}</div>
            </div>
          ))}
        </div></div>

    </div>
  );
};

export default SimpleCarousel;