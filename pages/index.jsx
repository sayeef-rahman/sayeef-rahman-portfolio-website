import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Banner from "../components/HomeComponents/Banner";
import ClientReviews from "../components/HomeComponents/ClientReviews/ClientReviews";
import MyExpertise from "../components/HomeComponents/Expertise/MyExpertise";
import Recommendations from "../components/HomeComponents/Recommendations/Recommendations";
import PortfolioSection from "../components/Portfolio/PortfolioSection";

const home = () => {
  return (
    <div className="Home-Page -z-10">
      <Banner />
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
