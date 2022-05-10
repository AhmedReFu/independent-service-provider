import React from 'react';
import ahmed from '../../images/Ahmed-ReFat.png'

const About = () => {
    return (
        <div className='container '>
            <h1 className='text-center text-dark'>Bismillah Hir Rahmanir Rahim</h1>
            <div className="d-flex justify-content-center align-items-center">
                <img className='w-50 p-5' src={ahmed} alt="" />

                <div>
                    <h1>MD. NAZMUL ISLAM</h1>
                    <p className='fs-4 mt-5'>I have 2 years of experience on the web. First I started learning HTML, CSS  and JS then I create some simple websites that are single and different pages. I have already learned 80% HTML,  60% CSS and 50% JS. I can build any simple website in html css and js. I can even teach my grandmother how to create simple websites. My goal is to become an honest and good fullstack web developer.</p>
                </div>
            </div>
        </div>
    );
};

export default About;