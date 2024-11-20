'use client';
import { useState } from 'react';
import { civil } from '@/app/utils/constants';

export default function CivilDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className="relative mr-12"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Dropdown Button */}
            <button
                onClick={toggleDropdown}
                className="px-4 py-2 text-sm hover:text-[#f39200] flex items-center"
            >
                Corporate
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>

            {/* Dropdown Content */}
            <div
                className={`absolute top-[40px] left-0 bg-white shadow-lg rounded-md w-[500px] transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                    } z-10`}
            >
                <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="flex flex-col space-y-2 font-sans">
                        {civil.map((item: string, index: number) => (
                            <span key={index} className="hover:bg-gray-100 px-2 py-1 cursor-pointer">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
