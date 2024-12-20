'use client';
import Image from 'next/image';
interface EventComponentProps {
    imageSrc: string;
    greyText: string;
    blackText: string;

}
const EventComponent: React.FC<EventComponentProps> = ({ imageSrc, greyText, blackText }) => {
    return (
        <div className="py-0 px-3">
            <div className="bg-white">
                <div className="w-full aspect-[16/9] rounded-tl-[0.438em] rounded-tr-[0.438em] overflow-hidden group">
                    <div className="relative w-full h-full">
                        <Image
                            src={imageSrc}
                            alt="Card Image"
                            layout="fill" // Make the image fill the container
                            objectFit="cover" // Make the image cover the container without distortion
                            className="group-hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out"
                        />
                    </div>
                </div>
                <div className="p-4">
                    <p className="text-gray-500 text-sm mt-2 mb-3">{greyText}</p>
                    <p className="text-black text-base mt-1">{blackText}</p>
                    <button className="text-sm mt-4 me-2">Read More ➔</button></div>
            </div>
        </div>

    );
}

export default EventComponent;
