import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import vegesImg from "../../assets/veges.avif";

// Dummy data array
const contentData = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  title: `Fresh Vegetable ${index + 1}`,
  image: vegesImg,
}));

const GroceryCity = () => {
  const [searchTerm, setSearchTerm] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search term:", searchTerm);
    // Add your search logic here, e.g., filtering data or making API requests
  };

  // Helper function to chunk the array into rows of 6
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  return (
    <div className="flex flex-col justify-center items-center">

      <div className="bg-gradient-to-b from-[#C12F82] to-[#9A2983] w-[70%] rounded-3xl">
        <div className="flex flex-row  justify-between">
          <div className="flex flex-row justify-between space-x-4">
            <div className="bg-red-700 rounded-xl p-2">17 <br/>mins</div>
            <p>Delivery to Others</p>
          </div>

          <div>
            {" "}
            <CgProfile size={36} />
          </div>
          <div></div>
          <div></div>
        </div>

        <div className="w-[800px] pt-10 px-8">
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

        <div>
          <p>Grocery near you</p>
        </div>
      </div>

      <div className="w-[70%]">
        <div className="flex flex-row items-center">
        <p className="text-gray-700 text-2xl font-bold ">Sort By Category</p>
        <p className="border-[1px] border-gray-700"></p>
        </div>

        <div className="px-10">
      {chunkArray(contentData, 6).map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-row justify-between space-x-6 mb-10"
        >
          {row.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <img src={item.image} alt="" className="w-40" />
              <p className="text-md font-bold">{item.title}</p>
            </div>
          ))}
        </div>
      ))}
    </div>


      </div>
    </div>
  );
};

export default GroceryCity;
