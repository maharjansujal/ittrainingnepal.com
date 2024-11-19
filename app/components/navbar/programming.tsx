// Dropdown.js
'use client';
import { useState } from 'react';

export default function ProgrammingDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative mr-12 flex items-center justify-between">
      <button
        onClick={handleToggleDropdown}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="px-4 py-2 hover:text-[#f39200]"
      >
        Programming <i className="arrow down"></i>
          </button>
      <div
        className={`absolute top-[40px] left-0 bg-white shadow-lg rounded-md w-[500px] ${isOpen ? 'block' : 'hidden'} z-10`}
      >
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="flex flex-col space-y-2 font-sans">
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Rust Programming</span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">C/C++ Programming</span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">C++ Programming</span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Python for Data science</span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Python Django Training</span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Java Training</span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Advanced Java Training</span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">JSP</span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Spring Framework</span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">PHP Training</span>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-2 font-sans">
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Laravel Training</span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Web Development</span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Flutter</span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">MERN Stack Training</span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Android Training</span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Go Programminng </span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Ruby on Rails</span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">ios App Development</span>
            <span className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Asp.Net MVC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
