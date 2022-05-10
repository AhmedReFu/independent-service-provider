import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'
import banner1 from '../../../images/Banner/penne-pasta-tomato-sauce.png'
import banner2 from '../../../images/Banner/tasty-fresh-appetizing-italian-food.jpg'
import banner3 from '../../../images/Banner/high-angle-fried-chicken-drumsticks.jpg'

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Penne Pasta</h3>
                        <p>Penne Pasta Tomato Sauce</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Fresh Appetizing</h3>
                        <p>Tasty Fresh Appetizing Italian Food</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Fried Chicken</h3>
                        <p>High Angle Fried Chicken Drumsticks.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;