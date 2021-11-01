import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ManageFlights from './ManageFlights';

const ManageAllFlights = () => {
    const [allFlights, setAllFlights] = useState([]);
    const [allFlightsData, setAllFlightsData] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-scrubland-00954.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => {
                setAllFlights(data)
                setAllFlightsData(data)
            });
    },[])

    return (
        <div className="myFlights">
            <Container>
                <div className="text-center">
                    <h2 className="text-white">Manage All Flights</h2>
                    <h4 className="font-color-1">Manage All Flights Here</h4>
                </div>
                <div className="mt-5">
                    <div className="d-flex flex-column text-white">
                        <div className="d-flex px-2">
                            <div className="w-95 fs-5">Manage All Tickets - {allFlights.length}</div>
                            <div className="w-5"></div>
                        </div>
                        {
                            allFlightsData.map(allFlights => <ManageFlights
                                key={allFlights._id}
                                allFlights={allFlights}
                            ></ManageFlights>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ManageAllFlights;