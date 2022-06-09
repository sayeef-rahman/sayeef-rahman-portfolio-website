import React from 'react';
import bg from "../../assets/bg.jpg"


const Home = () => {
    return (
        <div className="hero min-h-screen bg-opacity-100" style={{ backgroundImage: `url(${bg})`}}>
            <div className="px-6">
                <div className="text-slate-800 lg:w-1/2">
                    <h1 className="mb-5 text-3xl font-bold ">I'm Sayeef Rahman</h1>
                    <p className="mb-5  text-justify">Hand tools have been used by humans since the Stone Age when stones were used for hammering & cutting. In the Bronze Age tools were made by casting the copper & tin alloys. Bronze tools were sharper & harder than those made of stone.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;