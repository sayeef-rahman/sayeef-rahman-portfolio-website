import React from 'react';
import hand_tools from '../../assets/project1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';

const HandTools = () => {
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Hand Tools</h1>
                <h1 className='text-xl my-2'>Tools manufaturer website for making regular & customised tools.</h1>
            </div>
            <div className='grid lg:grid-cols-3 text-center lg:mx-96 my-5'>
                {/* Live Preview */}
                <div className='my-4'>
                    <a href="https://hand-tools-50644.web.app/" target={'_blank'} className='font-bold'> <FontAwesomeIcon icon={faLink} className="text-primary px-3 text-xl"></FontAwesomeIcon>Live Preview</a>
                </div>

                {/* Github Client */}
                <div className='my-4'>
                    <a href="https://hand-tools-50644.web.app/" target={'_blank'} className='font-bold'> <FontAwesomeIcon icon={faBroadcastTower} className="text-primary px-3 text-xl"></FontAwesomeIcon>Github-Client </a>
                </div>

                {/* Github Server */}
                <div className='my-4'>                    
                    <a href="https://hand-tools-50644.web.app/" target={'_blank'} className='font-bold'> <FontAwesomeIcon icon={faLink} className="text-primary px-3 text-xl"></FontAwesomeIcon>Github-Server</a>
                </div>
            </div>
            <h1 className='text-2xl text-center mt-10'>Project Screenshots</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 mx-10 mt-5 mb-10'>
                <img src={hand_tools} alt="" />
                <img src={hand_tools} alt="" />
                <img src={hand_tools} alt="" />
            </div>
        </div>
    );
};

export default HandTools;