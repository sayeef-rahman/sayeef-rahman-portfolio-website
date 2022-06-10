import React from 'react';
import hand_tools from '../../assets/project1.png'

const HandTools = () => {
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>Hand Tools</h1>
                <h1 className='font-bold'>Hand Tools</h1>
            </div>
            <div className='grid grid-cols-3 gap-2 mx-10 my-10'>
                <img src={hand_tools} alt="" />
                <img src={hand_tools} alt="" />
                <img src={hand_tools} alt="" />
            </div>
        </div>
    );
};

export default HandTools;