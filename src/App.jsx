import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import TopRestaurant from "./pages/Delivery/TopRestaurant";
import DineoutPage from "./pages/Dineout/DineoutPage";

function App() {
  

  return (
    <div>
      <Router>
         <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/toprestro" element={<TopRestaurant />} />
            <Route path="/dineout" element={<DineoutPage />}/>
            
         </Routes>
      </Router>
     
    </div>
  )
}

export default App
