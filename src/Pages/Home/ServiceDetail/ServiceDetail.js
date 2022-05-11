import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId, service } = useParams();

    return (
        <div className='text-center'>
            <h2>Welcome to detail: {serviceId}</h2>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
            <div style={{ height: '540px' }}>

            </div>
        </div>
    );
};

export default ServiceDetail;