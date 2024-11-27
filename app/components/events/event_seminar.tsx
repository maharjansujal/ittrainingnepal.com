'use client';

import { useState } from 'react';
import EventComponent from '../events/event_component';

const EventsSeminars: React.FC = () => {
  const events = [
    {
      imageSrc: '/workshop_on_digital_marketing.jpg',
      greyText: 'Location: Putalisadak',
      blackText: 'Free Workshop on UI/UX',
    },
    {
      imageSrc: '/workshop_on_digital_marketing.jpg',
      greyText: 'Location: Putalisadak',
      blackText: 'Advanced Marketing Strategies',
    },
    {
      imageSrc: '/workshop_on_digital_marketing.jpg',
      greyText: 'Location: Putalisadak',
      blackText: 'ReactJS Seminar',
    },
    {
      imageSrc: '/workshop_on_digital_marketing.jpg',
      greyText: 'Location: Putalisadak',
      blackText: 'Node.js Workshop',
    },
    {
      imageSrc: '/workshop_on_digital_marketing.jpg',
      greyText: 'Location: Putalisadak',
      blackText: 'Graphic Design Seminar',
    },
    {
      imageSrc: '/workshop_on_digital_marketing.jpg',
      greyText: 'Location: Putalisadak',
      blackText: 'Career Guidance Event',
    },
    {
      imageSrc: '/workshop_on_digital_marketing.jpg',
      greyText: 'Location: Putalisadak',
      blackText: 'Agile Development Workshop',
    },
    {
      imageSrc: '/workshop_on_digital_marketing.jpg',
      greyText: 'Location: Putalisadak',
      blackText: 'Personal Branding Strategies',
    },
    {
      imageSrc: '/workshop_on_digital_marketing.jpg',
      greyText: 'Location: Putalisadak',
      blackText: 'Team Collaboration Techniques',
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handleNext = () => {
    if (startIndex + visibleCount < events.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

  return (
    <div className="max-w-[1224px] mx-auto mb-10 relative">
          <div className="absolute top-0 right-0 flex gap-2">
          <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        disabled={startIndex + visibleCount >= events.length}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
      >
        →
      </button>
  </div>
      <h2 className="px-3 mb-3 mt-[70px] block text-[1.25em] font-bold">
        Events & Seminars
      </h2>
      <div className="flex justify-evenly mx-auto bg-[#f8f8f8] overflow-hidden">
        {events.slice(startIndex, startIndex + visibleCount).map((event, index) => (
          <EventComponent
            key={index}
            imageSrc={event.imageSrc}
            greyText={event.greyText}
            blackText={event.blackText}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsSeminars;
