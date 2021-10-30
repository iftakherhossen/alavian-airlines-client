import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <Carousel.Caption className="mb-12">
                <h1 className="font-1">404</h1>
                <h2 className="font-color-1">Oops! Page Not Found</h2>
                <p>The page you are looking for was moved, removed, renamed or might never existed.</p>
                <div className="d-flex justify-content-center">
                    <Link to="/home"><button className="px-4 py-3 mx-2 rounded-pill border-0 bg-color-1">FLY TO HOME</button></Link>
                </div>
            </Carousel.Caption>
        </div>
    );
};

export default NotFound;