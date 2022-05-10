import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center bg-dark dark'>
            <p className='pt-2'><small>CopyRight &copy; {year} </small></p>
        </footer>
    );
};

export default Footer;