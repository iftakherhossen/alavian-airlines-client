import React from 'react';
import Testimonial from '../Testimonial/Testimonial';

const AboutUs = () => {
    return (
        <div id="about-us" className="aboutUs text-center ">
            <div className="w-75 mx-auto">
                <h2 className="my-3 text-center">About Us</h2>
                <p>
                    Welcome to Alavian Airlines, your number one source for all things flight tickets. We're dedicated to providing you the best of tickets, with a focus on dependability. customer service.
                    We're working to turn our passion for Flight Tickets into a booming online store. We hope you enjoy our products as much as we enjoy offering them to you.
                    Sincerely, &nbsp; <span className="font-color-1">Iftakher Hossen </span><br />
                </p>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default AboutUs;