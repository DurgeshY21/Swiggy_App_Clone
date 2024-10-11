import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { HeroSection } from "./layout";

function App() {
  

  return (
    <div>
      <Router>
         <Routes>
            <Route path="/" element={<HeroSection/>} />
            <Route path="/hero" element={<HeroSection/>} />
         </Routes>
      </Router>
     
    </div>
  )
}

export default App
