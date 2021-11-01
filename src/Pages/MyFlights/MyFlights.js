import React from 'react';
import { Container } from 'react-bootstrap';

const MyFlights = () => {
    return (
        <div className="myFlights">
            <Container>
                <div className="text-center">
                    <h2 className="text-white">My Flights</h2>
                    <h4 className="font-color-1">Manage Your Flights Here</h4>
                </div>
                <div className="mt-5">
                    <div className="d-flex flex-column text-white">
                        <div className="d-flex px-2">
                            <div className="w-95 fs-5">Manage Your Tickets</div>
                            <div className="w-5"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MyFlights;