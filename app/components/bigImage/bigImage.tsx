import React from "react";
import Image from "next/image";

interface BigImageProps {
  buttonColor: string;
  imageSrc: string;
  bottomText: string;
  buttonText: React.ReactNode;
  className?: string;
}

const BigImage: React.FC<BigImageProps> = ({ buttonColor, imageSrc, bottomText, buttonText }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Use 'fill' for responsive images */}
      <div className="relative w-full h-[400px]"> 
        <Image
          src={imageSrc}
          alt={bottomText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 w-full h-[35%] bg-gradient-to-t from-black to-transparent p-5 flex flex-col justify-end">
        <p className="text-white text-sm">{bottomText}</p>
        <button
          className="w-2/3 mt-3 px-4 py-2 text-sm font-medium rounded-md"
          style={{ backgroundColor: buttonColor }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default BigImage;
