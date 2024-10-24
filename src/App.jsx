import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import TopRestaurant from "./pages/Delivery/TopRestaurant";
import DineoutPage from "./pages/Dineout/DineoutPage";
import GeniePage from "./pages/Genie/GeniePage";
import FoodCity from "./pages/FoodLocation/FoodCity";
import GroceryCity from "./pages/GroceyLocation/GroceryCity";
import Corperate from "./pages/Corperate/Corperate";

function App() {
  

  return (
    <div>
      <Router>
         <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/toprestro" element={<TopRestaurant />} />
            <Route path="/dineout" element={<DineoutPage />}/>
            <Route path="/genie" element={<GeniePage />}/>
            <Route path="/foodcity" element={<FoodCity/>}/>
            <Route path="/grocery" element={<GroceryCity/>} />
            <Route path="/corperate" element={<Corperate />}/>
         </Routes>
      </Router>
     
    </div>
  )
}

export default App
