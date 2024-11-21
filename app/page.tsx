import Image from "next/image";
import ProgrammingDropdown from "./components/navbar/programming";
import DesigningDropdown from "./components/navbar/designing";
import CertificationDropdown from "./components/navbar/certification";
import CmsDropdown from "./components/navbar/CMS";
import OtherTrainingDropdown from "./components/navbar/other_courses";
import CorporateDropdown from "./components/navbar/corporate";
import CivilDropdown from "./components/navbar/civil";
import BigImage from "./components/bigImage/bigImage";
export default function Home() {
  return (
    <div>
      <div className="w-full flex justify-between bg-[#004e98] font-sans text-xs py-2 text-white">
        <span className="ml-16 my-auto">
          977-01-5340005 / 9801169144 info@ittrainingnepal.com
        </span>
        <span>
          <button className="mr-5 bg-[#f39200] px-2 py-1 rounded-[4px]">
            Become an Instructor ➔
          </button>
          <button className="mr-16 bg-[#f39200] px-2 py-1 rounded-[4px]">
            Send inquiry ➔
          </button>
        </span>
      </div>
      <div className="w-[90%] h-[100px] mx-auto bg-yellow-400 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={"/image.png"}
            alt={"ittrainingnepallogo"}
            width={50}
            height={50}
            className="object-contain"
          />
          <div className="flex flex-col align-middle ml-2 ">
            <span className="font-black text-[#0a4587]">IT TRAINING NEPAL</span>
            <span className="text-xs font-medium">Imparting IT Skills</span>
          </div>
        </div>
        <div className="flex flex-col items-center w-[70%] bg-green-400 h-full">
          <div className="flex justify-start w-full h-1/2 bg-blue-400">
            <ProgrammingDropdown />
            <DesigningDropdown />
            <CertificationDropdown />
            <CmsDropdown />
            <CorporateDropdown />
            <OtherTrainingDropdown />
            <CivilDropdown />
            <div className="relative">
              <button className="px-4 py-2 text-sm hover:text-[#f39200] flex items-center">
                Blog
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] mx-auto">
        <div className="">
          <Image
            src={"/image.png"}
            alt={"ittrainingnepallogo"}
            width={50}
            height={50}
            className="object-contain"
          />
          <div className="flex flex-col align-middle ml-2 ">
            <span className="font-black text-[#0a4587]">IT TRAINING NEPAL</span>
            <span className="text-xs font-medium">Imparting IT Skills</span>
          </div>
        </div>
        <div className="flex justify-end space-x-6">
          <ProgrammingDropdown />
          <DesigningDropdown />
          <CertificationDropdown />
          <CmsDropdown />
          <CorporateDropdown />
          <OtherTrainingDropdown />
          <CivilDropdown />
          <div className="relative mr-12">
            <button className="px-4 py-2 text-sm hover:text-[#f39200] flex items-center">
              Blog
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(3,1fr)] gap-5;">
        <BigImage
          buttonText="Apply"
          imageSrc="/Industry_Placement.webp"
          bottomText="Professional Training and Project work"
          buttonColor="blue"
          className="relative overflow-hidden"
        />
        <BigImage
          buttonText={<u>Apply Now</u>}
          imageSrc="/Intensive_Internship.webp"
          buttonColor="blue"
          bottomText="Intensive Internship"
        />
        <BigImage
          buttonText="Read More"
          imageSrc="/Professional Training_and_Project_work.webp"
          buttonColor="blue"
          bottomText="Industry Placement"
          className="relative overflow-hidden"
        />
      </div>
    </div>
  );
}
