import { Route, Routes } from "react-router-dom";
import HeroSection from "./Pages/Home/HeroSection";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";


function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
