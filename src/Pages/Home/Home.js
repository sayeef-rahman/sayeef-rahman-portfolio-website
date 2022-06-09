import React from 'react';
import ContactUs from './ContactUs';
import HeroSection from './HeroSection';
import MyProjects from './MyProjects';



const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <MyProjects></MyProjects>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;