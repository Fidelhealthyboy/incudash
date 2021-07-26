import React from 'react';
import PropTypes from 'prop-types';
import egg from '../images/egg.jpg';
import { Link } from 'react-router-dom';

const SideBar = ({ height, setRefresh }) =>{
    const clicked = () => {
        setRefresh(Math.random());
    };

    return (
        <nav style={{minHeight:height}} className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-profile">

                    <Link onClick={clicked} to="/" className="nav-link">
                        <div className="profile-image">
                            <img className="img-xs rounded-circle" src={egg} alt="profile image"/>
                            <div className="dot-indicator bg-success"></div>
                        </div>
                        <div className="text-wrapper">
                            <p className="profile-name">Egg Master</p>
                            <p className="designation">Premium user</p>
                        </div>
                    </Link>
                </li>
                <li className="nav-item nav-category">Main Menu</li>
                
                <li className="nav-item">
                    <Link onClick={clicked}  className="nav-link" to="/">
                        <i className="menu-icon typcn typcn-document-text"></i>
                        <span className="menu-title">Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link onClick={clicked}  className="nav-link" to="/settings">
                        <i className="menu-icon typcn typcn-shopping-bag"></i>
                        <span className="menu-title">Settings</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

SideBar.propTypes = {
    height: PropTypes.number,
    setRefresh: PropTypes.func
};

export default SideBar;