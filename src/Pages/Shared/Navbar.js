import React from 'react';
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div class="navbar bg-base-100 lg:w-3/4 mx-auto sticky">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>About</a></li>
                        <li><a>Resume</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl w-64"><img src={logo} alt="Sayeef Rahman" /> </a>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><a>About</a></li>
                    <li><a>Resume</a></li>
                </ul>
            </div>
            {/* <div class="navbar-end">
                <a class="btn">Get started</a>
            </div> */}
        </div>
    );
};

export default Navbar;

