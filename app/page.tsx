import Image from "next/image";
import ProgrammingDropdown from "./components/navbar/programming";
import DesigningDropdown from "./components/navbar/designing";
import CertificationDropdown from "./components/navbar/certification";
import CmsDropdown from "./components/navbar/CMS";
import OtherCoursesDropdown from "./components/navbar/other_courses";
import CorporateDropdown from "./components/navbar/corporate";
import CivilDropdown from "./components/navbar/civil";
import BigImage from "./components/bigImage/bigImage";
import EventsSeminars from "./components/events/event_seminar"

export default function Home() {
  return (
    <div className="w-[100vw] h-[1000px] m-0 p-0">
      <div className="bg-[#004e98] w-full">
        <div className="max-w-[1224px] mx-auto flex justify-between font-sans text-xs py-2 text-white">
          <span className="my-auto">
            977-01-5340005 / 9801169144 info@ittrainingnepal.com
          </span>
          <span>
            <button className="mr-5 px-2 py-1 rounded-[4px] bg-[#f39012]">
              Become an Instructor ➔
            </button>
            <button className=" px-2 py-1 rounded-[4px] bg-[#f39012]">
              Send inquiry ➔
            </button>
          </span>
        </div>
      </div>
      <div className="w-full h-[100px]">
        <div className="w-[80%] max-w-[1224px] h-full mx-auto flex justify-between">
          <div className="flex items-center">
            <Image
              src={"/image.png"}
              alt={"ittrainingnepallogo"}
              width={50}
              height={50}
              className="object-contain mr-1"
            />
            <div className="flex flex-col align-middle">
              <span className="font-black text-[#0a4587]">IT TRAINING NEPAL</span>
              <span className="text-xs font-medium">Imparting IT Skills</span>
            </div>
          </div>
          <div className="w-[80%] h-full">
            <div className="w-full h-1/2 flex justify-end items-center">
              <ProgrammingDropdown />
              <DesigningDropdown />
              <CertificationDropdown />
              <CmsDropdown />
              <CorporateDropdown />
              <OtherCoursesDropdown />
              <CivilDropdown />
              <div className="relative">
                <button className="text-sm hover:text-[#f39200] flex items-center">
                  Blog
                </button>
              </div>
            </div>
            <div className="w-full h-1/2"></div>
          </div>

        </div>
      </div>
      <div className="mt-2 sm:flex">
        <div className="md:w-[33%] flex flex-col content-between mr-1 sm:w-full">
          <BigImage
            buttonText={<span className="text-white">Apply ➔</span>}
            imageSrc="/Professional Training_and_Project_work.webp"
            buttonColor="#004f99"
            bottomText="Professional Training and Project"
          />
          <button className="w-full bg-[#004f99] py-2">
            <span className="text-white">Training</span>
          </button>
        </div>
        <div className="md:w-[33%] flex flex-col content-between md:mr-1 sm:w-full">
          <BigImage
            buttonText={<span className="text-white underline"><span className="me-2">Apply Now</span> ➔</span>}
            imageSrc="/Intensive_Internship.webp"
            buttonColor="#f29200"
            bottomText="Intensive Internship"
            className="object-fill"
          />
          <button className="w-full bg-[#f29200] py-2">
            Internship
          </button>
        </div>
        <div className="md:w-[33%] flex flex-col content-between mr-1 sm:w-full">
          <BigImage
            buttonText={<span className="text-white">Apply ➔</span>}
            imageSrc="/Professional Training_and_Project_work.webp"
            buttonColor="#004f99"
            bottomText="Professional Training and Project"
          />
          <button className="w-full bg-[#004f99] py-2">
            <span className="text-white">Placement</span>
          </button>
        </div>
      </div>
      <EventsSeminars/>

    </div>

  );
}
// 'use client';

// import { useState } from 'react';

// const SimpleCarousel = () => {
//   const colors = [
//     'bg-red-500',
//     'bg-blue-500',
//     'bg-green-500',
//     'bg-yellow-500',
//     'bg-purple-500',
//     'bg-pink-500',
//     'bg-teal-500',
//     'bg-orange-500',
//     'bg-gray-500',
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleCount = 3;

//   const handleNext = () => {
//     if (currentIndex + visibleCount < colors.length) {
//       setCurrentIndex(currentIndex + 3);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 3);
//     }
//   };

//   return (
//     <div className="max-w-[1224px] my-[100px] mx-auto  overflow-hidden">
//       <div className="mx-auto">
//         <div className="absolute top-2 right-2 flex gap-2 z-10">
//         <button
//           onClick={handlePrev}
//           disabled={currentIndex === 0}
//           className={`p-2 rounded-full transition-colors ${currentIndex === 0
//             ? 'bg-gray-400'
//             : 'bg-gray-200 hover:bg-gray-300'
//             }`}
//         >
//           ←
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentIndex + visibleCount >= colors.length}
//           className={`p-2 rounded-full transition-colors ${currentIndex + visibleCount >= colors.length
//             ? 'bg-gray-400'
//             : 'bg-gray-200 hover:bg-gray-300'
//             }`}
//         >
//           →
//         </button>
//       </div>


//         {/* Carousel Content */}
//         <div
//           className="flex transition-all duration-500 ease-in-out"
//           style={{
//             transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
//           }}
//         >
//           {colors.map((color, index) => (
//             <div
//               key={index}
//               className="w-[33.33%] h-48 flex items-center justify-center text-white text-lg font-bold"
//               style={{ flexShrink: 0 }}
//             >
//               <div className={`${color} w-full h-full`}>Div {index + 1}</div>
//             </div>
//           ))}
//         </div></div>

//     </div>
//   );
// };

// export default SimpleCarousel;


