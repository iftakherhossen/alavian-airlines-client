import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const RecentFlight = () => {
    const { ticketId } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/emptyLegs/${ticketId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [ticketId])

    const handleBookNow = () => {
        alert('Our team will connect you soon with further details!')
    }

    return (
        <div className="notFound pt-50 text-center">
            <Card className="text-dark bg-color-1 border-2 border-color-2 w-25 text-center py-3 m-auto">
                <Card.Body>
                    <Card.Title className="fs-3">{details.from} <small>to</small> {details.to}</Card.Title>
                    <hr/>
                    <Card.Text>
                        Date - {details.date} <br />
                        Departure - {details.departure} <br />
                        Arrival - {details.arrival} <br />
                        Empty Sits - {details.sits} <br />
                        Price - {details.price} <br />
                    </Card.Text>
                    <Button onClick={handleBookNow} className="px-4 py-2 mx-2 mt-3 rounded-pill border-1 border-color-2 bg-color-2 empty-font btn-hover">BOOK NOW</Button>
                </Card.Body>
            </Card>
            <Link to="/home"><Button className="px-4 py-2 mx-2 mt-3 rounded-pill border-1 border-color-2 bg-color-1 text-dark btn-hover">GO BACK</Button></Link>
        </div>
    );
};

export default RecentFlight;