import Image from "next/image";
import ProgrammingDropdown from "./components/navbar/programming";
import DesigningDropdown from "./components/navbar/designing";
import CertificationDropdown from "./components/navbar/certification";
import CmsDropdown from "./components/navbar/CMS";
import OtherTrainingDropdown from "./components/navbar/other_courses";
import CorporateDropdown from "./components/navbar/corporate";
import CivilDropdown from "./components/navbar/civil";
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
      <div className="flex flex-cols align-middle justify-between">
        <div className="flex items-center ml-16">
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
        <div className="flex mr-16">
          <ProgrammingDropdown />
          <DesigningDropdown />
          <CertificationDropdown />
          <CmsDropdown />
          <CorporateDropdown />
          <OtherTrainingDropdown />
          <CivilDropdown />
          <div
            className="relative mr-12"><button
              className="px-4 py-2 text-sm hover:text-[#f39200] flex items-center"
            >
              Blog

            </button></div>

        </div>


      </div>

    </div>
  );
}
