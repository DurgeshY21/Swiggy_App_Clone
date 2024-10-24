import FoodCityImg from "../../assets/foodcity.avif";
import FoodImg from "../../assets/food.png";
import RestroImg from "../../assets/restropic.jpg";
import Navbar from "../../layout/Navbar";
import { FaStar } from "react-icons/fa6";
import TopRestaurant from "../Delivery/TopRestaurant";

const RestroDummyData = [
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
    name: "Subway",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    category: "Sandwiches, Fast Food",
    location: "Ranjit Avenue",
    image: RestroImg,
  },
  {
    id: 4,
    name: "Subway",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    category: "Sandwiches, Fast Food",
    location: "Ranjit Avenue",
    image: RestroImg,
  },
]
const FoodCity = () => {
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

    return (
        <div>
        <Navbar/>

        <div className="">

          <div className="flex flex-row justify-between items-center bg-gradient-to-b from-[#ffff] to-[#C6BBEA] px-28 w-full rounded-br-full">
          
          <p className="text-[#3D3F48] text-5xl font-bold w-[30%]"> Order Food <br/>Online in <br/> Chandigarh</p>
          <div className="w-[70%] -mr-80"><img src={FoodCityImg} alt="" className="w-[60%]" /></div>
          </div>
          
          <div className="mt-12 px-28">
            <p className="text-3xl font-bold ">Whats on your mind?</p>

            <div className="flex flex-row justify-between mt-10">
            <p><img src={FoodImg} alt="" className="w-[70%]" /></p>
            <p><img src={FoodImg} alt="" className="w-[70%]" /></p>
            <p><img src={FoodImg} alt="" className="w-[70%]" /></p>
            <p><img src={FoodImg} alt="" className="w-[70%]" /></p>
            <p><img src={FoodImg} alt="" className="w-[70%]" /></p>
            <p><img src={FoodImg} alt="" className="w-[70%]" /></p>
            </div>
          </div>

          <div className="mt-12 px-28">
             <p className="text-3xl font-bold">Top Restaurants Chains in Chandigarh</p>

             <div className="mt-6">
             {chunkArray(RestroDummyData, 4).map((row, rowIndex) => (
               <div
                 key={rowIndex}
                 className="flex flex-row justify-between space-x-8 w-full mb-12"
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
          </div>


          <div className="mt-12  ">
          <TopRestaurant showNavbar={false} paddingX="px-28"/>

          
          </div>
        </div>
        </div>
    )
}

export default FoodCity;