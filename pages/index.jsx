import Footer from "../components/Footer";
import Banner from "../components/HomeComponents/Banner";
import MyExpertise from "../components/HomeComponents/Expertise/MyExpertise";
import Recommendations from "../components/HomeComponents/Recommendations/Recommendations";
import ClientReviews from "../components/HomeComponents/ClientReviews/ClientReviews";
import ContactSection from "../components/ContactSection";

const home = () => {
  return (
    <div className="Home-Page -z-10">
      <Banner />
      <MyExpertise />
      <Recommendations />
      <ClientReviews />
      <ContactSection />
      {/* <Footer /> */}
    </div>
  );
};

export default home;
