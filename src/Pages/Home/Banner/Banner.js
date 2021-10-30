import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner-holder">
            <Carousel fade className="img-fluid">
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src ="https://i.ibb.co/C2y44LF/slide1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="mb-12">
                        <h1 className="font-1">PRIVATE JET CHARTERS</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <div className="d-flex justify-content-center">
                            <Link to="/home#booking"><button className="px-4 py-3 mx-2 rounded-pill border-0 bg-color-1">BOOK NOW</button></Link>
                            <Link to="/home#blog"><button className="px-4 py-3 mx-2 rounded-pill border-0 bg-color-2">READ MORE</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src="https://i.ibb.co/5sjwZNR/slide2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="mb-12">
                        <h1 className="font-1">BOOK YOUR FLIGHT</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <div className="d-flex justify-content-center">
                            <Link to="/home#booking"><button className="px-4 py-3 mx-2 rounded-pill border-0 bg-color-1">BOOK NOW</button></Link>
                            <Link to="/home#blog"><button className="px-4 py-3 mx-2 rounded-pill border-0 bg-color-2">READ MORE</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src="https://i.ibb.co/ph4ZWdV/slide3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="mb-12">
                        <h1 className="font-1">COMFORTABLE TRANSFERS</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <div className="d-flex justify-content-center">
                            <Link to="/home#booking"><button className="px-4 py-3 mx-2 rounded-pill border-0 bg-color-1">BOOK NOW</button></Link>
                            <Link to="/home#blog"><button className="px-4 py-3 mx-2 rounded-pill border-0 bg-color-2">READ MORE</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src="https://i.ibb.co/SX5SPgb/slide4.jpg "
                        alt="Third slide"
                    />
                    <Carousel.Caption className="mb-12">
                        <h1 className="font-1">LUXERY JET FLIGHTS</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <div className="d-flex justify-content-center">
                            <Link to="/home#booking"><button className="px-4 py-3 mx-2 rounded-pill border-0 bg-color-1">BOOK NOW</button></Link>
                            <Link to="/home#blog"><button className="px-4 py-3 mx-2 rounded-pill border-0 bg-color-2">READ MORE</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;