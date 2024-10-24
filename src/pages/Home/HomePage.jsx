import HeroSection from "./HeroSection";
import RestaurantSection from "./RestaurantSection";
import AboutSection from "./AboutSection";
import FoodLocation from "./FoodLocation";
import GroceryLocation from "./GroceryLocation";
import Footer from "../../layout/Footer";

const HomePage = () => {
    return (
        <div>

          <HeroSection />
          <RestaurantSection />
          <AboutSection />
          <FoodLocation />
          <GroceryLocation/>
          <Footer />
        </div>
    )
}

export default HomePage;


