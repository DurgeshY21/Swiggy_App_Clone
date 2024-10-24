import { useState } from "react";
import Navbar from "../../layout/Navbar"
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import foodImg from "../../assets/food.png";
import dineoutImg from "../../assets/dineout.png";
import genieImg from "../../assets/genie.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
    const [selectedLocation, setSelectedLocation] = useState("Enter your delivery location");
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const locations = ["New York", "London", "Tokyo", "Berlin", "Sydney"];
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleSelect = (location) => {
      setSelectedLocation(location);
      setIsOpen(false);
    };

    

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Search term:", searchTerm);
      // Add your search logic here, e.g., filtering data or making API requests
    };

  return (
    <div>
       
    <Navbar/>

    <div className="bg-[#FF5200] h-auto pt-12 pb-12">

      <p className="text-center text-white text-5xl font-bold leading-tight ">Order food & groceries. Discover <br/>best restaurants. Swiggy it!</p>
      
      <div className="flex flex-row justify-center space-x-6 pt-10">

      <div className="relative inline-block text-left w-[300px]">
      
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-start w-full rounded-2xl border border-gray-300 shadow-sm px-4  py-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <IoLocationSharp  className=" h-7 w-7 text-[#FF5200]" />
        <p className=" pt-1">{selectedLocation}</p>
        <IoIosArrowDown  className="ml-8 h-7 w-7" /> {/* Use the icon here */}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-[300px] rounded-2xl shadow-lg text-black bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => handleSelect(location)}
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                {location}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>

    <div className="w-[500px]">
    <form onSubmit={handleSubmit} className="mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for restaurant, item or more"
          className="w-full pl-10 pr-4 py-5 text-sm border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.414-1.414l3.386 3.385a1 1 0 01-1.414 1.414l-3.386-3.385zM8 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </form>
  
    </div>
      </div>


      <div className="flex flex-row justify-center space-x-10 w-full pt-10">

      <Link to="/toprestro" className="w-[20%]">
     
        <div className=" bg-white rounded-2xl p-6 h-[320px] transform transition-transform duration-300 hover:scale-105">
         <p className="text-3xl font-bold text-[#48474C]">FOOD DELIVERY</p>
         <p className="text-lg pt-2 font-semibold text-[#8F8F8F]">FROM RESTAURANTS</p>
         <p className="text-md mt-4 text-[#FF5200] font-bold bg-gradient-to-r from-[#fae3db] to-white rounded-2xl p-2">UPTO 60% OFF</p>
         <div className="pt-6 flex flex-row justify-between items-center">
         <p className="bg-[#FF5200] rounded-full px-4 py-4 text-white"><FaArrowRight size={20}/></p>
         <p><img src={foodImg} alt="" className="ml-16 w-[80%]" /></p>
         </div>
        
        </div>
      
        </Link>
        
        <Link to="" className="w-[20%]">
        <div className=" bg-white rounded-2xl p-6 h-[320px] transform transition-transform duration-300 hover:scale-105">
        <p className="text-3xl font-bold text-[#48474C]">DINEOUT</p>
        <p className="text-lg pt-2 font-semibold text-[#8F8F8F]">EAT OUT & SAVE MORE</p>
        <p className="text-md mt-4 text-[#FF5200] font-bold bg-gradient-to-r from-[#fae3db] to-white rounded-2xl p-2">UPTO 50% OFF</p>
        <div className=" pt-8 flex flex-row justify-between items-center">
         <p className="bg-[#FF5200] rounded-full px-4 py-4 text-white"><FaArrowRight size={20} /></p>
         <p><img src={dineoutImg} alt="" className="ml-10" /></p>
         </div>
        </div>
        </Link>
        
        <Link to="/toprestro" className="w-[20%]">
        <div className=" bg-white rounded-2xl p-6 h-[320px] transform transition-transform duration-300 hover:scale-105">
        <p className="text-3xl font-bold text-[#48474C]">GENIE</p>
        <p className="text-lg pt-2 font-semibold text-[#8F8F8F]">PICK UP & DROP</p>
        <div className="pt-14 flex flex-row justify-between items-center">
         <p className="bg-[#FF5200] rounded-full px-4 py-4 text-white"><FaArrowRight size={20}/></p>
         <p><img src={genieImg} alt="" className="ml-16 " /></p>
         </div>
        </div>
        </Link>
      </div>
      
  
      </div>
    </div>
  )
}

export default HeroSection
