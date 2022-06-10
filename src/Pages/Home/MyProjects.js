import React from 'react';
import { useNavigate } from 'react-router-dom';
import hand_tools from '../../assets/project1.png'
import toffpark_warehouse from '../../assets/project2.png'
import pics_diary from '../../assets/project3.png'

const MyProjects = () => {
    const navigate = useNavigate();
    const handTools= () =>{
        navigate('/projects/hand-tools');
    }
    const toffparkWarehouse= () =>{
        navigate('/projects/toffpar-warehouse');
    }
    const picsDiary= () =>{
        navigate('/projects/pics-diary');
    }
    return (
        <div className='mx-auto my-20'>
            <div className='text-center'>
                <h1 className='font-bold text-6xl'>My Latest Project</h1>
                <h6 className='mt-5 text-2xl'>Have a look at my projects to know my strenght of skills</h6>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-20 mt-10'>
                <div class="card w-96 bg-base-100 shadow-xl rounded-sm">
                    <figure><img src={hand_tools} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-2xl">Hand Tools</h2>
                        <p className='my-3'>This is a full-stack responsive react project where dealers can buy tools in bulk. Users can go to the dashboard and pay for or cancel their orders. Only admins see all orders and their payment status in the dashboard. They can also ship paid orders. Admins can make normal users admin and add or delete products.</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary rounded-none w-1/2" onClick={()=>handTools()}>See Details</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl rounded-sm">
                    <figure><img src={toffpark_warehouse} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-2xl">Toffpark Warehouse</h2>
                        <p  className='my-3'>This is another full stack responsive web application to manage store inventory. Where users can update the stock of a product by restocking or delivering products. The user can add or delete products from the list. Users can report bugs from the bug report section on the home page.</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary rounded-none w-1/2" onClick={()=>toffparkWarehouse()}>See Details</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl rounded-sm">
                    <figure><img src={pics_diary} alt="Shoes" /></figure>
                    <div class="card-body bg-slate-100">
                        <h2 class="card-title text-2xl">Pics Diary</h2>
                        <p className='my-3'>This is a simple react website with routing and firebase authentication. Users can log in using email-password or google pop-up. Users cannot access the checkout page without logging in.</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary rounded-none w-1/2" onClick={()=>picsDiary()}>See Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;