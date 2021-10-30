import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Booking from '../Booking/Booking';
import EmptyLegs from '../EmptyLegs/EmptyLegs';
import OfferCounter from '../OfferCounter/OfferCounter';
import Blog from '../Blog/Blog';

const Home = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const flyHigh = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <Banner></Banner>
            <Booking></Booking>
            <EmptyLegs></EmptyLegs>
            <Blog></Blog>
            <AboutUs></AboutUs>
            <OfferCounter></OfferCounter>


            {/* GO TOP Button */}
            {showButton && (<Button className="fly-up bg-color-1 border-0 rounded-circle p-3 d-flex flex-column" title="Fly High" onClick={flyHigh}>
                <img src="https://i.ibb.co/zFPcBPn/go-top.png" alt="fly High" />
            </Button>)}
        </div>
    );
};

export default Home;