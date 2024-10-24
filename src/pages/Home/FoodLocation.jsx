import { IoIosArrowDown } from "react-icons/io";

const FoodLocation = () => {
    return (
        <div className="px-52 mt-16">
           <p className="text-3xl font-bold pb-5">Cities with Food Delivery</p>

           <div className="flex flex-col justify-center items-center space-y-5 ">
            <div className="flex flex-row items-center space-x-5 justify-between w-full">
                <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Food Online in Bengalore</button>
                <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Food Online in Pune</button>
                <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Food Online in Chennai</button>
                <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Food Online in Delhi</button>
            </div>
              
            <div className="flex flex-row items-center space-x-5 justify-between w-full">
                <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Food Online in Mumbai</button>
                <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Food Online in Gurgaon</button>
                <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Food Online in Kolkata</button>
                <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Food Online in Gujrat</button>
            </div>

            <div className="flex flex-row space-x-5 justify-between w-full">
            <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Food Online in Hyderabad</button>
            <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Food Online in Ahemdabad</button>
            <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Food Online in Chandigarh</button>
            <div className="w-[25%] flex flex-row border-[1px] border-gray-400 rounded-xl p-3 items-center justify-center">
            <button type="button" className=" font-semibold text-[#FF5200]">Show More... </button>
            <IoIosArrowDown size={24} color="#FF5200" />
            </div>
            </div>
           </div>
        </div>
    )
}

export default FoodLocation;