import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';

const Footer = ({setHeight, refresh}) => {
    const footerRef = useRef();
    useEffect(()=>{
        setHeight(footerRef.current.offsetTop);
    },[refresh]);
    return (
        <footer ref={footerRef} className="footer">
            <div className="container-fluid clearfix">
                <span >Copyright © Sonic Labs 2021 </span>
            </div>
        </footer>

    );
};

Footer.propTypes={
    setHeight: propTypes.func,
    refresh: propTypes.number
};

export default Footer;