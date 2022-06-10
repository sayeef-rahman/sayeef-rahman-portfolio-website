import React from 'react';
import ContactUs from './ContactUs';
import HeroSection from './HeroSection';
import MyClients from './MyClients';
import MyProjects from './MyProjects';



const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <MyProjects></MyProjects>
            <MyClients></MyClients>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;