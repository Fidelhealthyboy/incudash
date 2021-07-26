import React from 'react';
import Brand from './brand';
import egg from '../images/egg.jpg';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
    const handleToggle = () =>{
        const sideBar = document.getElementById('sidebar');
        if(sideBar.classList.contains('active'))
            sideBar.classList.remove('active');
        else
            sideBar.classList.add('active');
    };

    return (
        <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <Brand/>
            <div className="navbar-menu-wrapper d-flex align-items-center">
                <ul className="navbar-nav">
                    <li className="nav-item font-weight-semibold d-none d-lg-block">Help : +0234 xxx xxx xxxx</li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <a>
                            <img className="img-xs rounded-circle" src={egg} alt="Profile image"/> </a>
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <FaBars onClick={handleToggle} className="mdi mdi-menu"></FaBars>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;