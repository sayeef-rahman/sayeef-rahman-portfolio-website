import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Banner from "../components/HomeComponents/Banner";
import ClientReviews from "../components/HomeComponents/ClientReviews/ClientReviews";
import MyExpertise from "../components/HomeComponents/Expertise/MyExpertise";
import Recommendations from "../components/HomeComponents/Recommendations/Recommendations";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import Background from "./background";

const home = () => {
  return (
    <div className="w-full">
      <Banner />
      <Background />
      <MyExpertise />
      <PortfolioSection />
      <Recommendations />
      <ClientReviews />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default home;
