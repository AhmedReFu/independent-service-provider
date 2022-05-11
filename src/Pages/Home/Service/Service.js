import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, id, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToFoodCheckout = (id) => {
        navigate(`/service/${id}`);
    }
    return (

        <div className='service h-75'>
            <img className='w-100 h-50' src={img} alt="" />
            <h2 className='m-2'>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToFoodCheckout(id)} className='btn btn-primary '>Checkout : {name}</button>

        </div >


    );
};

export default Service;