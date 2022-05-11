import React from 'react';
import sleeping from '../../../images/Cook-is-Sleeping.jpg';

const NotFound = () => {
    return (
        <div className='text-primary text-center'>
            <h1 className='text-primary mt-2'>Page Not Found 404</h1>
            <h3 className='text-primary mt-2'>Cook is Sleeping</h3>
            <br />
            <img src={sleeping} width={1200} alt="" />
        </div>
    );
};

export default NotFound;