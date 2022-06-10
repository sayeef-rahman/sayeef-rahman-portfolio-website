import React from 'react';
import toffpark_warehouse from '../../assets/project2.png'
import toffpark_warehouse2 from '../../assets/toffpark_warehouse2.jpg'
import toffpark_warehouse3 from '../../assets/toffpark_warehouse3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ToffparkWarehouse = () => {
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Hand Tools</h1>
                <h1 className='text-xl my-2'>Tools manufaturer website for making regular & customised tools.</h1>
            </div>
            <div className='grid lg:grid-cols-3 text-center lg:mx-96 my-5'>
                {/* Live Preview */}
                <div className='my-4'>
                    <button className='border'>
                        <a href="https://toffpark-footwear-user.web.app/" target={'_blank'} className='font-bold font-medium pr-3'> <FontAwesomeIcon icon={faLink} className="text-primary px-3"></FontAwesomeIcon>Live Preview</a>
                    </button>
                </div>

                {/* Github Client */}
                <div className='my-4'>
                    <button className='border'>
                        <a href="https://github.com/sayeef-rahman/toffpark-footwear-inventory-client" target={'_blank'} className='font-bold font-medium pr-3'> <FontAwesomeIcon icon={faLink} className="text-primary px-3"></FontAwesomeIcon>Github-Client</a>
                    </button>
                </div>

                {/* Github Server */}
                <div className='my-4'>
                    <button className='border'>
                        <a href="https://github.com/sayeef-rahman/toffpark-footwear-inventory-server" target={'_blank'} className='font-bold font-medium pr-3'> <FontAwesomeIcon icon={faLink} className="text-primary px-3"></FontAwesomeIcon>Github-Server</a>
                    </button>
                </div>


            </div>
            <h1 className='text-2xl text-center mt-20 lg:mb-10'>Project Screenshots</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-10 mt-5 mb-10'>
                <img src={toffpark_warehouse} alt="" />
                <img src={toffpark_warehouse2} alt="" />
                <img src={toffpark_warehouse3} alt="" />
            </div>

            <div className='lg:ml-20 lg:mb-52 mx-4 mb-20'>
                <h1 className='text-2xl font-semibold mt-20'>Features</h1>
                <ul className='text-justify'>
                    <li># Admin can manage all operations</li>
                    <li># Add new products</li>
                    <li># Check My Items for Specific admin</li>
                    <li># Firebase Authentication</li>
                </ul>
                <h1 className='text-xl font-semibold mt-6'>Technologies Used</h1>
                <p className='text-justify'>React, React Router, Bootstrap, Firebase Authentication, Font awesome, hooks</p>
            </div>
        </div>
    );
};

export default ToffparkWarehouse;