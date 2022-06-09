import React from 'react';
import ContactUs from './ContactUs';
import HeroSection from './HeroSection';
import MyClients from './MyClients';
import MyProjects from './MyProjects';



const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <MyClients></MyClients>
            <MyProjects></MyProjects>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;