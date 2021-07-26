import React from 'react';
import egg from '../images/egg.svg';
const Brand = () => {
    return (
        <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
            <a className="navbar-brand brand-logo" href="/">
                <img height='50px' src={egg} alt="logo" /> 
                Incubator.io
            </a>
            <a className="navbar-brand brand-logo-mini" href="index.html">
                <img src={egg} alt="logo" /> </a>
        </div>
    );
};

export default Brand;