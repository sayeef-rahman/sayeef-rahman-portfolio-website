import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className='bg-red-600'>
            <div className="navbar  lg:w-3/4 mx-auto sticky text-white">
                <div className="navbar-start">
                    <div className="dropdown text-black">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Projects</a></li>
                            <li><a>Resume</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl w-64" to={'/'}><img src={logo} alt="Sayeef Rahman" /> </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Projects</a></li>
                        <li><a>Resume</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

