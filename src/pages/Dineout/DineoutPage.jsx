import { useState } from "react";
import Navbar from "../../layout/Navbar";
import RestroImg from "../../assets/restropic.jpg";
import Footer from "../../layout/Footer";

const DineoutPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
      <div>
        <Navbar />
      </div>

      <div className="bg-black h-full">
        <div className="flex flex-col  items-center">
          <p className="text-3xl font-bold text-white pt-24">
            Its Now Safe to Crave
          </p>
          <div className="w-[1100px] pt-6">
            <form onSubmit={handleSubmit} className="mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search for restaurant, Cuisines, Locations...."
                  className="w-full pl-10 pr-24 py-5 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#FF645A]"
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

                {/* Button inside the input box */}
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF645A] text-white px-8 py-2 rounded-md text-md font-bold hover:bg-blue-600 transition duration-300"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <p className="text-3xl text-white font-bold mt-16 px-52 ">
            Best Offers
          </p>

          <div className="flex flex-row space-x-2 mt-8 px-52">
            <div className="bg-white p-4 shadow-md shadow-white">
              <p className="bg-[#F06459] text-center text-white rounded-lg w-[70%] font-bold">
                FLAT
              </p>

              <div className="flex flex-row item-center mt-2">
                <div className="text-5xl font-bold text-[#F06459]">30</div>
                <div className="flex flex-col justify-center leading-none ">
                  <p className="text-2xl text-[#F06459] font-bold ">%</p>
                  <p className="text-xl text-[#F06459] font-bold ">OFF</p>
                </div>
              </div>
              <p className="text-lg text-[#F06459] font-bold leading-tight mt-2">
                INSTANT <br /> DISCOUNT
              </p>
            </div>

            <div className="bg-white p-4 shadow-md shadow-white">
              <p className="bg-purple-600 text-center text-white rounded-lg w-[70%] font-bold">
                FLAT
              </p>

              <div className="flex flex-row item-center mt-2">
                <div className="text-5xl font-bold text-purple-600">30</div>
                <div className="flex flex-col justify-center leading-none ">
                  <p className="text-2xl text-purple-600 font-bold ">%</p>
                  <p className="text-xl text-purple-600 font-bold ">OFF</p>
                </div>
              </div>
              <p className="text-lg text-purple-600 font-bold leading-tight mt-2">
                INSTANT <br /> DISCOUNT
              </p>
            </div>

            <div className="bg-white p-4 shadow-md shadow-white">
              <p className="bg-green-600 text-center text-white rounded-lg w-[70%] font-bold">
                FLAT
              </p>

              <div className="flex flex-row item-center mt-2">
                <div className="text-5xl font-bold text-green-600">30</div>
                <div className="flex flex-col justify-center leading-none ">
                  <p className="text-2xl text-green-600 font-bold ">%</p>
                  <p className="text-xl text-green-600 font-bold ">OFF</p>
                </div>
              </div>
              <p className="text-lg text-green-600 font-bold leading-tight mt-2">
                INSTANT <br /> DISCOUNT
              </p>
            </div>

            <div className="bg-white p-4 shadow-md shadow-white">
              <p className="bg-blue-600 text-center text-white rounded-lg w-[70%] font-bold">
                FLAT
              </p>

              <div className="flex flex-row item-center mt-2">
                <div className="text-5xl font-bold text-blue-600">30</div>
                <div className="flex flex-col justify-center leading-none ">
                  <p className="text-2xl text-blue-600 font-bold ">%</p>
                  <p className="text-xl text-blue-600 font-bold ">OFF</p>
                </div>
              </div>
              <p className="text-lg text-blue-600 font-bold leading-tight mt-2">
                INSTANT <br /> DISCOUNT
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 px-52">
          <div className="flex flex-row justify-between items-center">
            <div className="text-white font-bold text-3xl">
              Restaurants Near Me
            </div>
            <div className="text-white font-semibold text-lg">See All</div>
          </div>

          <div className="flex flex-row space-x-6 justify-between w-full mt-6 pb-8">
            <div className="w-[25%] border-[1px]  border-gray-800 rounded-tr-xl rounded-tl-xl">
              <img
                src={RestroImg}
                alt=""
                className="rounded-tr-xl rounded-tl-xl"
              />

              <div className="flex flex-row justify-between items-center pt-4 px-2 pb-4">
                <div>
                  <p className="text-lg font-bold text-white">
                    Barbaque Nation
                  </p>
                  <p className="text-sm font-semibold text-gray-400">
                    Connaught Place, Central Delhi
                  </p>
                </div>

                <div className="bg-[#8CBB0F] text-white pl-2 pr-2 pt-1 pb-1">
                  4.3
                </div>
              </div>
            </div>

            <div className="w-[25%] border-[1px]  border-gray-800 rounded-tr-xl rounded-tl-xl">
              <img
                src={RestroImg}
                alt=""
                className="rounded-tr-xl rounded-tl-xl"
              />

              <div className="flex flex-row justify-between items-center pt-4 px-2 pb-4">
                <div>
                  <p className="text-lg font-bold text-white">
                    Barbaque Nation
                  </p>
                  <p className="text-sm font-semibold text-gray-400">
                    Connaught Place, Central Delhi
                  </p>
                </div>

                <div className="bg-[#8CBB0F] text-white pl-2 pr-2 pt-1 pb-1">
                  4.3
                </div>
              </div>
            </div>

            <div className="w-[25%] border-[1px]  border-gray-800 rounded-tr-xl rounded-tl-xl">
              <img
                src={RestroImg}
                alt=""
                className="rounded-tr-xl rounded-tl-xl"
              />

              <div className="flex flex-row justify-between items-center pt-4 px-2 pb-4">
                <div>
                  <p className="text-lg font-bold text-white">
                    Barbaque Nation
                  </p>
                  <p className="text-sm font-semibold text-gray-400">
                    Connaught Place, Central Delhi
                  </p>
                </div>

                <div className="bg-[#8CBB0F] text-white pl-2 pr-2 pt-1 pb-1">
                  4.3
                </div>
              </div>
            </div>

            <div className="w-[25%] border-[1px]  border-gray-800 rounded-tr-xl rounded-tl-xl">
              <img
                src={RestroImg}
                alt=""
                className="rounded-tr-xl rounded-tl-xl"
              />

              <div className="flex flex-row justify-between items-center pt-4 px-2 pb-4">
                <div>
                  <p className="text-lg font-bold text-white">
                    Barbaque Nation
                  </p>
                  <p className="text-sm font-semibold text-gray-400">
                    Connaught Place, Central Delhi
                  </p>
                </div>

                <div className="bg-[#8CBB0F] text-white pl-2 pr-2 pt-1 pb-1">
                  4.3
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 px-52 pb-20">

         <div className="flex flex-row space-x-5 w-full">
         <div className="bg-white border-[1px] border-white rounded-lg flex flex-row space-x-4 w-[25%] p-4 shadow-md shadow-white">
         <p></p>
         <p>Buffet</p>
         </div>

         <div className="bg-white border-[1px] border-white rounded-lg flex flex-row space-x-4 w-[25%] p-4 shadow-md shadow-white">
         <p></p>
         <p>Buffet</p>
         </div>

         <div className="bg-white border-[1px] border-white rounded-lg flex flex-row space-x-4 w-[25%] p-4 shadow-md shadow-white">
         <p></p>
         <p>Buffet</p>
         </div>

        <div className="bg-white border-[1px] border-white rounded-lg flex flex-row space-x-4 w-[25%] p-4 shadow-md shadow-white">
         <p></p>
         <p>Buffet</p>
         </div>

         </div>

         <div className="flex flex-row space-x-5 w-full mt-5">
         <div className="bg-white border-[1px] border-white rounded-lg flex flex-row space-x-4 w-[25%] p-4 shadow-md shadow-white">
         <p></p>
         <p>Buffet</p>
         </div>

         <div className="bg-white border-[1px] border-white rounded-lg flex flex-row space-x-4 w-[25%] p-4 shadow-md shadow-white">
         <p></p>
         <p>Buffet</p>
         </div>

         <div className="bg-white border-[1px] border-white rounded-lg flex flex-row space-x-4 w-[25%] p-4 shadow-md shadow-white">
         <p></p>
         <p>Buffet</p>
         </div>

        <div className="bg-white border-[1px] border-white rounded-lg flex flex-row space-x-4 w-[25%] p-4 shadow-md shadow-white">
         <p></p>
         <p>Buffet</p>
         </div>
         
         </div>
        </div>

        <div >
         <Footer/>
        </div>
      </div>
    </div>
  );
};

export default DineoutPage;
