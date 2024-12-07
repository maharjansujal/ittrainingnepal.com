import Image from "next/image";
import ProgrammingDropdown from "./menu/programming";
import DesigningDropdown from "./menu/designing";
import CertificationDropdown from "./menu/certification";
import CmsDropdown from "./menu/CMS";
import OtherCoursesDropdown from "./menu/other_courses";
import CorporateDropdown from "./menu/corporate";
import CivilDropdown from "./menu/civil";
export default function Navbar() {
  return (
    <div>
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
    </div>
  )
}