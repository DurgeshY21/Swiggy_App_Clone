import logo from "../assets/logo.png";
import { FaLocationArrow } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-[#FF5200] p-5 flex flex-row justify-between items-center px-28">
      
    <div>
       <img src={logo} alt="" className="w-40" />
    </div>

    <div className="flex flex-row justify-between space-x-10 items-center">
      <p className="text-white text-md font-bold">Swiggy Corporate</p>
      <p className="text-white text-md font-bold">Partner With Us</p>
       
      <div className="flex flex-row items-center space-x-2 border-2 rounded-xl px-6 py-3 ">
      <button className="text-white text-md font-bold ">Get the App </button>
      <p className="text-white pt-1"><FaLocationArrow size={24}/></p>
      </div>
     
      <button className="text-white text-md font-bold bg-black rounded-xl px-10 py-3">Sign in</button>
    </div> 
    </div>
  )
}

export default Navbar
