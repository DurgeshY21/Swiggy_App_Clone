import Genie1Img from "../../assets/genie1.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const GeniePage = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="bg-[#1C1E24] w-[50%] h-auto rounded-xl ">
        <div className="flex flex-row justify-between  items-center p-10">
          <div className="flex flex-row space-x-4 items-center">
            <p className="text-white">
              <FaArrowLeftLong size={24} />
            </p>
            <p className="text-white">
              <FaLocationArrow size={24} />
            </p>
            <p className="text-white text-xl font-bold">Other</p>
          </div>

          <div className="">
            <p className="text-white">
              <CgProfile size={36} />
            </p>
          </div>
        </div>

        <div className="flex flex-row">
          <p>
            <img src={Genie1Img} alt="" className="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeniePage;
