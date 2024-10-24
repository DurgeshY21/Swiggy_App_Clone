import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import restroImg from "../../assets/restropic.jpg";
import { TiTick } from "react-icons/ti";
import { GiPublicSpeaker } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

// Custom Previous Arrow
// Custom Previous Arrow
const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-arrow`} onClick={onClick}>
        <FaArrowLeft className="text-3xl text-gray-600 hover:text-black bg-gray-300 pl-2 pr-2 rounded-full" />
      </div>
    );
  };
  
  // Custom Next Arrow
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-arrow`} onClick={onClick}>
        <FaArrowRight className="text-3xl text-gray-600 hover:text-black bg-gray-300 pl-2 pr-2 rounded-full mr-7" />
      </div>
    );
  };

const RestaurantSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow: <PrevArrow />,  
    nextArrow: <NextArrow />, 
    
  };

  const restaurants = [
    {
      name: "Jayka Restaurant",
      rating: "4.4",
      cuisine: "Chinese, North Indian",
      costForTwo: "₹800 for two",
      location: "Civil Lines, Ludhiana",
      distance: "5km",
      tableBooking: true,
      liveEvents: true,
      offerText: "Flat 25% Off on pre-booking",
      extraOffers: "+2 more",
      bankOffer: "Upto 15% Off with bank offers",
    },
    
    {
      name: "Spicy Treat",
      rating: "4.1",
      cuisine: "South Indian, Chinese",
      costForTwo: "₹700 for two",
      location: "Model Town, Ludhiana",
      distance: "4km",
      tableBooking: true,
      liveEvents: false,
      offerText: "Flat 20% Off on pre-booking",
      extraOffers: "+1 more",
      bankOffer: "10% Off with specific cards",
    },

    {
        name: "Tatva Cafe",
        rating: "4.1",
        cuisine: "North Indian, Chinese",
        costForTwo: "₹700 for two",
        location: "Metro , Zirakpur",
        distance: "4km",
        tableBooking: true,
        liveEvents: false,
        offerText: "Flat 20% Off on pre-booking",
        extraOffers: "+1 more",
        bankOffer: "10% Off with specific cards",
      },
    
      {
        name: "Gopal's Restaurant",
        rating: "4.1",
        cuisine: "North Indian, Italian",
        costForTwo: "₹700 for two",
        location: "Lohgarh, Zirakpur",
        distance: "4km",
        tableBooking: true,
        liveEvents: false,
        offerText: "Flat 20% Off on pre-booking",
        extraOffers: "+1 more",
        bankOffer: "10% Off with specific cards",
      },
    
      {
        name: "Zings Bar & Restaurant",
        rating: "4.1",
        cuisine: "Korean Food, Chinese",
        costForTwo: "₹700 for two",
        location: "Lohgarh, Zirakpur",
        distance: "4km",
        tableBooking: true,
        liveEvents: false,
        offerText: "Flat 20% Off on pre-booking",
        extraOffers: "+1 more",
        bankOffer: "10% Off with specific cards",
      },
    
    
      {
        name: "Rahul Sweets & Namkeen",
        rating: "4.1",
        cuisine: "North Indian, Desi Chinese",
        costForTwo: "₹700 for two",
        location: "Metro , Zirakpur",
        distance: "4km",
        tableBooking: true,
        liveEvents: false,
        offerText: "Flat 20% Off on pre-booking",
        extraOffers: "+1 more",
        bankOffer: "10% Off with specific cards",
      },
    
    
      {
        name: "Quality Restro & Cafe",
        rating: "4.1",
        cuisine: "North Indian, Chinese",
        costForTwo: "₹700 for two",
        location: "Sector 24, Chandigarh",
        distance: "4km",
        tableBooking: true,
        liveEvents: false,
        offerText: "Flat 20% Off on pre-booking",
        extraOffers: "+1 more",
        bankOffer: "10% Off with specific cards",
      },
    
    
  ];

  return (
    <div className="px-28">
   
    <div className="flex flex-row items-center  mt-20 mb-6">
  
    {/* Title */}
    <p className="text-4xl font-bold flex-grow ">
      Deliver best restaurants on Dineout
    </p>

    

  </div>

      {/* react slick slider */}
      <div className="slider-container relative ">
        <Slider {...settings}>
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white w-[25%] h-auto rounded-2xl border-2 ">
              <img
                src={restroImg}
                alt={restaurant.name}
                className="rounded-tl-2xl rounded-tr-2xl"
              />

              <div className="flex flex-row justify-between pl-2 pr-2 pt-2">
                <p className="text-lg font-semibold">{restaurant.name}</p>
                <p className="text-lg font-semibold">{restaurant.rating}</p>
              </div>

              <div className="flex flex-row justify-between pl-2 pr-2 pt-2">
                <p className="text-sm font-medium text-gray-400">
                  {restaurant.cuisine}
                </p>
                <p className="text-sm font-medium text-gray-400">
                  {restaurant.costForTwo}
                </p>
              </div>

              <div className="flex flex-row justify-between pl-2 pr-2 pt-2">
                <p className="text-sm font-medium text-gray-400">
                  {restaurant.location}
                </p>
                <p className="text-sm font-medium text-gray-400">
                  {restaurant.distance}
                </p>
              </div>

              <div className="flex flex-row items-center w-full">
                {restaurant.tableBooking && (
                  <div className="flex flex-row items-center space-x-1 pl-2 pr-2 pt-2 bg-gray-200 pb-2 ml-2 rounded-lg mt-2">
                    <p className="text-sm font-medium text-gray-400 border-[1px] border-gray-400 rounded">
                      <TiTick />
                    </p>
                    <p className="text-xs font-medium text-gray-400">
                      Table Booking
                    </p>
                  </div>
                )}

                {restaurant.liveEvents && (
                  <div className="flex flex-row items-center space-x-1 pl-2 pr-2 pt-2 bg-gray-200 pb-2 ml-2 rounded-lg mt-2">
                    <p className="text-sm font-medium text-gray-400 border-[1px] rounded">
                      <GiPublicSpeaker />
                    </p>
                    <p className="text-xs font-medium text-gray-400">
                      Live Events
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-row justify-between bg-[#2E8555] m-2 p-2 rounded-xl">
                <div className="flex flex-row space-x-2">
                  <p className="text-sm font-bold bg-white pl-1 pr-1 rounded-full text-[#2E8555]">
                    %
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {restaurant.offerText}
                  </p>
                </div>

                <p className="text-sm font-semibold text-white">
                  {restaurant.extraOffers}
                </p>
              </div>

              <div className="text-sm font-semibold text-[#2E8555] bg-[#C8F9E5] m-2 p-2 rounded-xl">
                {restaurant.bankOffer}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RestaurantSection;
