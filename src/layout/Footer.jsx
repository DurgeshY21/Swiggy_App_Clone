import logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import GoogleStoreImg from "../assets/GoogleStore.webp";
import AppleStoreImg from "../assets/AppleStore.webp";

const Footer = () => {
  return (
    <div className="bg-[#F0F0F5]  px-40 ">
      <div className="flex flex-row justify-between pt-10">
        <div>
          <img src={logo} alt="" className="w-32" />
          <p className="text-lg font-semibold text-gray-600">
            © 2024 Swiggy Limited
          </p>
        </div>

        <div>
          <p className="text-lg font-bold">Company</p>
          <p className="text-md font-medium pt-4">About Us</p>
          <p className="text-md font-medium pt-2">Swiggy Corperate</p>
          <p className="text-md font-medium pt-2">Career</p>
          <p className="text-md font-medium pt-2">Team</p>
          <p className="text-md font-medium pt-2">Swiggy One</p>
          <p className="text-md font-medium pt-2">Swiggy Instamart</p>
          <p className="text-md font-medium pt-2">Swiggy Dineout</p>
          <p className="text-md font-medium pt-2">Swiggy Gennie</p>
          <p className="text-md font-medium pt-2">Minis</p>
        </div>

        <div>
          <p className="text-lg font-bold">Contact Us</p>
          <p className="text-md font-medium pt-4">Help & Support</p>
          <p className="text-md font-medium pt-2">Partner With Us</p>
          <p className="text-md font-medium pt-2">Ride With Us</p>

          <p className="text-lg font-bold pt-14">Legal</p>
          <p className="text-md font-medium pt-2">Terms & Conditions</p>
          <p className="text-md font-medium pt-2">Cookie Policy</p>
          <p className="text-md font-medium pt-2">Privacy Policy</p>
        </div>

        <div>
          <p className="text-lg font-bold">Available in:</p>
          <p className="text-md font-medium pt-4">Mumbai</p>
          <p className="text-md font-medium pt-2">Delhi</p>
          <p className="text-md font-medium pt-2">Gurugram</p>
          <p className="text-md font-medium pt-2">Bengaluru</p>
          <p className="text-md font-medium pt-2">Chennai</p>
          <p className="text-md font-medium pt-2">Kolkata</p>
          <div className="mt-4 p-1 border-[1px] border-gray-500 rounded-lg flex flex-row items-center">
            <p>595 Cities</p>
            <p>
              <IoIosArrowDown size={20} />
            </p>
          </div>
        </div>

        <div>
          <p className="text-lg font-bold">Life at Swiggy</p>
          <p className="text-md font-medium pt-4">Explore with Swiggy</p>
          <p className="text-md font-medium pt-2">Swiggy News</p>
          <p className="text-md font-medium pt-2">Snackable</p>

          <p className="text-lg font-bold pt-6">Social Links</p>
        </div>
      </div>

      <div className="border-[1px] border-gray-400 mt-8 "></div>

      <div className="flex flex-row items-center justify-between mt-16 w-full  px-12 pb-10">
        <p className="w-1/2 text-xl font-bold ">
          For a better experience, download the Swiggy App now
        </p>
        <div className="flex flex-row space-x-6  w-1/2">
          <img
            src={GoogleStoreImg}
            alt="Google Play Store"
            className="w-[40%] h-auto"
          />
          <img
            src={AppleStoreImg}
            alt="Apple App Store"
            className="w-[40%] h-auto"
          />
        </div>
      </div>

       <p className="border-[1px] border-gray-400 mt-8 "></p>

       <div className="mt-8 pb-20">
         <p className="text-2xl font-bold">Other Cities that we deliver:</p>

         <div className="flex flex-row justify-between mt-4 px-12">
         <div>
         <p className="text-md font-medium pt-2">Bengaluru</p>
         <p className="text-md font-medium pt-2">Gurugram</p>
         <p className="text-md font-medium pt-2">Hyderabad</p>
         <p className="text-md font-medium pt-2">Jaipur</p>
         <p className="text-md font-medium pt-2">Pune</p>
         <p className="text-md font-medium pt-2">Delhi</p>
         <p className="text-md font-medium pt-2">Punjab</p>
         <p className="text-md font-medium pt-2">Rajasthan</p>
         <p className="text-md font-medium pt-2">Kerala</p>
         <p className="text-md font-medium pt-2">Gujrat</p>
         </div>

         <div>
          <p className="text-md font-medium pt-2">Cochi</p>
          <p className="text-md font-medium pt-2">Telangana</p>
          <p className="text-md font-medium pt-2">Lucknow</p>
          <p className="text-md font-medium pt-2">Banaras</p>
          <p className="text-md font-medium pt-2">Ahemdabad</p>
          <p className="text-md font-medium pt-2">Allahabad</p>
          <p className="text-md font-medium pt-2">Kanpur</p>
          <p className="text-md font-medium pt-2">Ghaziabad</p>
          <p className="text-md font-medium pt-2">Noida</p>
          <p className="text-md font-medium pt-2">Basti</p>
         </div>

         <div>
         <p className="text-md font-medium pt-2">Maharastra</p>
         <p className="text-md font-medium pt-2">Bihar</p>
         <p className="text-md font-medium pt-2">Etawah</p>
         <p className="text-md font-medium pt-2">Ranchi</p>
         <p className="text-md font-medium pt-2">Jharkhand</p>
         <p className="text-md font-medium pt-2">Agra</p>
         <p className="text-md font-medium pt-2">Gwalior</p>
         <p className="text-md font-medium pt-2">Gorakhpur</p>
         <p className="text-md font-medium pt-2">Ghazipur</p>
         <p className="text-md font-medium pt-2">Manipur</p>
         </div>

         <div>
         <p className="text-md font-medium pt-2">Rourkela</p>
         <p className="text-md font-medium pt-2">Roorkee</p>
         <p className="text-md font-medium pt-2">Kormangla</p>
         <p className="text-md font-medium pt-2">Chennai</p>
         <p className="text-md font-medium pt-2">Bhutan</p>
         <p className="text-md font-medium pt-2">Nepal</p>
         <p className="text-md font-medium pt-2">Buxar</p>
         <p className="text-md font-medium pt-2">Orissa</p>
         <p className="text-md font-medium pt-2">Bhuvaneshwar</p>
         <p className="text-md font-medium pt-2">Agartala</p>
         </div>
         </div>
         
       </div>
    </div>
  );
};

export default Footer;
