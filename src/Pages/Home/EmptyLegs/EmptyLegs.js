import React, { useState, useEffect } from 'react';
import { Alert, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EmptyLeg from './EmptyLeg';

const EmptyLegs = () => {
    const [details, setDetails] = useState([]);
    const [flightDetails, setFlightDetails] = useState([]);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    useEffect(() => {
        fetch('https://aqueous-scrubland-00954.herokuapp.com/emptyLegs')
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                setFlightDetails(data)
            })
    }, []);
    
    return (
        <div id="booking" className="emptyLegs">
            <img src="https://i.ibb.co/yyWhtkG/plane-large.png" alt="plane" className="ms-5 ps-5 mx-auto w-100 pb-5 overflow-x-hidden animate__animated animate__fadeInRight" />
            <div className="emptyLegs-wrapper mt-3">
                <div className="w-30 pt-5 ps-5">
                    <h2>Browse <span className="font-color-2">empty legs</span> of our charters</h2>
                    <p className="mt-3 mb-5">Ut non augue egestas, commodo velit eget, vestibulum tellus. Curabitur vulputate justo elit, at elementum orci pulvinar vel. Pellentesque habitant morbi tristique</p>
                    <Link to="/home" className="font-color-2">READ MORE</Link>
                    {bookingSuccess && <Alert variant="success mt-3">Your Order is Under Processing! Check <Link to="/myFlights">My Flights</Link> to get updates!</Alert>}
                </div>
                <div className="w-70">
                    <Row xs={1} md={2} lg={3} className="g-4 me-5 py-3">
                        {
                            flightDetails.map(details => <EmptyLeg
                                key={details._id}
                                details={details}
                                setBookingSuccess={setBookingSuccess}
                            ></EmptyLeg>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default EmptyLegs;