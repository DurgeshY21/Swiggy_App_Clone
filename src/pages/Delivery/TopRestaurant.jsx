import Navbar from "../../layout/Navbar";
import RestroImg from "../../assets/restropic.jpg";
import { TbArrowsExchange2 } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";

import { FaStar } from "react-icons/fa";
import Footer from "../../layout/Footer";

const restaurants = [
  {
    id: 1,
    name: "PizzaExpress",
    rating: 4.4,
    deliveryTime: "30-35 mins",
    category: "Pizzas, Fast Food",
    location: "Guru Arjan Dev Nagar",
    image: RestroImg,
  },
  {
    id: 2,
    name: "Domino's Pizza",
    rating: 4.6,
    deliveryTime: "25-30 mins",
    category: "Pizzas, Italian",
    location: "Model Town",
    image: RestroImg,
  },
  {
    id: 3,
    name: "Burger King",
    rating: 4.2,
    deliveryTime: "20-25 mins",
    category: "Burgers, Fast Food",
    location: "BRS Nagar",
    image: RestroImg,
  },
  {
    id: 4,
    name: "McDonald's",
    rating: 4.3,
    deliveryTime: "15-20 mins",
    category: "Burgers, Fast Food",
    location: "Mall Road",
    image: RestroImg,
  },
  {
    id: 5,
    name: "KFC",
    rating: 4.1,
    deliveryTime: "25-30 mins",
    category: "Fried Chicken, Fast Food",
    location: "Civil Lines",
    image: RestroImg,
  },
  {
    id: 6,
    name: "Subway",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    category: "Sandwiches, Fast Food",
    location: "Ranjit Avenue",
    image: RestroImg,
  },

  {
    id: 6,
    name: "Subway",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    category: "Sandwiches, Fast Food",
    location: "Ranjit Avenue",
    image: RestroImg,
  },

  {
    id: 6,
    name: "Subway",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    category: "Sandwiches, Fast Food",
    location: "Ranjit Avenue",
    image: RestroImg,
  },

  {
    id: 6,
    name: "Subway",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    category: "Sandwiches, Fast Food",
    location: "Ranjit Avenue",
    image: RestroImg,
  },

  {
    id: 6,
    name: "Subway",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    category: "Sandwiches, Fast Food",
    location: "Ranjit Avenue",
    image: RestroImg,
  },

  {
    id: 6,
    name: "Subway",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    category: "Sandwiches, Fast Food",
    location: "Ranjit Avenue",
    image: RestroImg,
  },

  {
    id: 6,
    name: "Subway",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    category: "Sandwiches, Fast Food",
    location: "Ranjit Avenue",
    image: RestroImg,
  },

  {
    id: 6,
    name: "Subway",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    category: "Sandwiches, Fast Food",
    location: "Ranjit Avenue",
    image: RestroImg,
  },

  {
    id: 6,
    name: "Subway",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    category: "Sandwiches, Fast Food",
    location: "Ranjit Avenue",
    image: RestroImg,
  },
  {
    id: 6,
    name: "Subway",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    category: "Sandwiches, Fast Food",
    location: "Ranjit Avenue",
    image: RestroImg,
  },

  {
    id: 6,
    name: "Subway",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    category: "Sandwiches, Fast Food",
    location: "Ranjit Avenue",
    image: RestroImg,
  },
  // Add more restaurant data here if needed
];

const TopRestaurant = ({ showNavbar = true, paddingX = "px-48"}) => {
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  return (
    <div className="">
    {
      showNavbar && (
        <div>
        <Navbar />
      </div>
      )
    }
      

      <div className={`${paddingX} mt-8`}>
        <p className="text-2xl font-bold">
          Restaurants with online food delivery in Chandigarh{" "}
        </p>

        <div className="flex flex-row  space-x-4 mt-5 mb-10">
          <div className="flex flex-row space-x-2 items-center border-[1px] border-gray-600 rounded-full p-1 pl-2 pr-2">
            <p className="font-semibold">Filters </p>
            <p>
              <TbArrowsExchange2 />
            </p>
          </div>

          <div className="flex flex-row space-x-2 items-center border-[1px] border-gray-600 rounded-full p-1 pl-2 pr-2">
            <p className="font-semibold">Sort By </p>
            <p>
              <MdKeyboardArrowDown size={24} />
            </p>
          </div>

          <div className="border-[1px] border-gray-600 rounded-full p-1 pl-2 pr-2">
            <p className="font-semibold">Rating 4.0+</p>
          </div>

          <div className="border-[1px] border-gray-600 rounded-full p-1 pl-2 pr-2">
            <p className="font-semibold">Pure Veg</p>
          </div>

          <div className="border-[1px] border-gray-600 rounded-full p-1 pl-2 pr-2">
            <p className="font-semibold">Offers</p>
          </div>

          <div className="border-[1px] border-gray-600 rounded-full p-1 pl-2 pr-2">
            <p className="font-semibold">Rs300 - Rs600</p>
          </div>

          <div className="border-[1px] border-gray-600 rounded-full p-1 pl-2 pr-2">
            <p className="font-semibold ">Less than Rs300</p>
          </div>
        </div>

        <div>
          {chunkArray(restaurants, 4).map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-row justify-between w-full mb-12"
            >
              {row.map((restro) => (
                <div
                  key={restro.id}
                  className="border-[1px] w-[23%] rounded-xl transform transition-transform duration-300 hover:scale-105"
                >
                  <img src={restro.image} alt="" className="rounded-xl " />
                  <div className="pt-4 px-4 pb-4">
                    <p className="text-xl font-bold">{restro.name}</p>

                    <div className="flex flex-row space-x-2 mt-1">
                      <p className="text-white bg-green-700 rounded-full pl-1 pr-1 pt-1">
                        <FaStar />
                      </p>
                      <p className="font-semibold">
                        {restro.rating} * {restro.deliveryTime}
                      </p>
                    </div>
                    <p className="text-gray-500 font-semibold">
                      {restro.category}
                    </p>
                    <p className="text-gray-500 font-semibold">
                      {restro.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-3xl font-bold pb-5">
            Best Places to Eat Across Cities
          </p>

          <div className="flex flex-col justify-center items-center space-y-5 ">
            <div className="flex flex-row items-center space-x-5 justify-between w-full">
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Best Restaurants in Bengalore
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Best Restaurants in Pune
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Best Restaurants in Chennai
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Best Restaurants in Delhi
              </button>
            </div>

            <div className="flex flex-row items-center space-x-5 justify-between w-full">
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Best Restaurants in Mumbai
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Best Restaurants in Gurgaon
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Best Restaurants in Kolkata
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Best Restaurants in Gujrat
              </button>
            </div>

            <div className="flex flex-row space-x-5 justify-between w-full">
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Best Restaurants in Hyderabad
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Best Restaurants in Ahemdabad
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Best Restaurants in Chandigarh
              </button>
              <div className="w-[25%] flex flex-row border-[1px] border-gray-400 rounded-xl p-3 items-center justify-center">
                <button type="button" className=" font-semibold text-[#FF5200]">
                  Show More...{" "}
                </button>
                <MdKeyboardArrowDown size={24} color="#FF5200" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-3xl font-bold pb-5">Best Cuisines Near Me</p>

          <div className="flex flex-col justify-center items-center space-y-5 ">
            <div className="flex flex-row items-center space-x-5 justify-between w-full">
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Chinese Restaurant Near Me
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                North Indian Restaurant Near Me
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                South Indian Restaurant Near Me
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Indian Restaurant Near Me
              </button>
            </div>

            <div className="flex flex-row items-center space-x-5 justify-between w-full">
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Italian Restaurant Near Me
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Korean Restaurant Near Me
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Seafood Restaurant Near Me
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Bengali Restaurant Near Me
              </button>
            </div>

            <div className="flex flex-row space-x-5 justify-between w-full">
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Punjabi Restaurant Near Me
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Andhra Restaurant Near Me
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Desi Restaurant Near Me
              </button>
              <div className="w-[25%] flex flex-row border-[1px] border-gray-400 rounded-xl p-3 items-center justify-center">
                <button type="button" className=" font-semibold text-[#FF5200]">
                  Show More...{" "}
                </button>
                <MdKeyboardArrowDown size={24} color="#FF5200" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 mb-10">
          <p className="text-3xl font-bold pb-5">
            Explore Every Restaurant Near Me
          </p>

          <div className="flex flex-col justify-center items-center space-y-5 ">
            <div className="flex flex-row items-center space-x-5  w-full">
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Explore Restaurant Near Me
              </button>
              <button
                type="button"
                className="w-[25%] border-[1px] border-gray-400 rounded-xl p-3 font-semibold"
              >
                Explore Top Rated Restaurant Near Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default TopRestaurant;
