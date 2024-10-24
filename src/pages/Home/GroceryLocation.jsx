import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";


const GroceryLocation = () => {
    return (
        <div className="px-52 mt-24 pb-20">
           <p className="text-3xl font-bold pb-5">Cities with Grocery Delivery</p>

           <div className="flex flex-col justify-center items-center space-y-5 ">
            <div className="flex flex-row items-center space-x-5 justify-between w-full">
                <Link className="w-[25%]" to="/grocery"><button type="button" className=" border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Grocery Online in Kolkata</button></Link>
                <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Grocery Online in Pune</button>
                <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Grocery Online in Gujrat</button>
                <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Grocery Online in Delhi</button>
            </div>
              
            <div className="flex flex-row items-center space-x-5 justify-between w-full">
                <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Grocery Online in Mumbai</button>
                <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Grocery Online in Gurgaon</button>
                <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Grocery Online in Bengaluru</button>
                <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Grocery Online in Chennai</button>
            </div>

            <div className="flex flex-row  space-x-5 justify-between w-full">
            <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Grocery Online in Hyderabad</button>
            <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Grocery Online in Ahemdabad</button>
            <button type="button" className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold">Order Grocery Online in Chandigarh</button>
            <div className="w-[25%] flex flex-row border-[1px] border-gray-400 rounded-xl p-3 items-center justify-center">
            <button type="button" className=" font-semibold text-[#FF5200]">Show More... </button>
            <IoIosArrowDown size={24} color="#FF5200" />
            </div>
            </div>
           </div>
           </div>
    )
}

export default GroceryLocation;