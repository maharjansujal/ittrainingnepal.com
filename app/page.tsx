import Navbar from "./components/navbar/navbar";
import BigImage from "./components/bigImage/bigImage";
import './globals.css'
export default function Home() {
  return (
    <div className="w-[100vw] m-0 p-0">
      <Navbar/>
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

    </div>

  );
}



