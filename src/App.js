import { Route, Routes } from "react-router-dom";
import HandTools from "./Pages/Home/HandTools";
import HeroSection from "./Pages/Home/HeroSection";
import Home from "./Pages/Home/Home";
import PiscDiary from "./Pages/Home/PiscDiary";
import ToffparkWarehouse from "./Pages/Home/ToffparkWarehouse";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";


function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects/hand-tools" element={<HandTools />}></Route>
        <Route path="/projects/toffpar-warehouse" element={<ToffparkWarehouse />}></Route>
        <Route path="/projects/pics-diary" element={<PiscDiary />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
