import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ManageAllFlights = () => {
    const [allFlights, setAllFlights] = useState([]);
    const [allFlightsData, setAllFlightsData] = useState([]);
    const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />

    useEffect(() => {
        fetch('https://aqueous-scrubland-00954.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => {
                setAllFlights(data)
                setAllFlightsData(data)
            });
    }, [])

    const handleDelete = id => {
        const url = `https://aqueous-scrubland-00954.herokuapp.com/booking/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const confirm = window.confirm('Are you sure? You wanna delete it!')

                if (confirm === true) {
                    if (data.deletedCount) {
                        alert('Deleted Successfully!')
                        const remaining = allFlights.filter(detail => detail._id !== id);
                        setAllFlights(remaining)
                    }
                }
            })
    }

    return (
        <div className="myFlights">
            <Container>
                <div className="text-center">
                    <h2 className="text-white">All Flights</h2>
                    <h4 className="font-color-1">Manage All Flights Here</h4>
                </div>
                <div className="mt-5">
                    <div className="d-flex flex-column text-white">
                        <div className="d-flex px-2 mb-2">
                            <h3>All Tickets - {allFlights.length}</h3>
                        </div>

                        <Table className="text-white">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Destination</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allFlightsData.map(allFlights => (
                                        <tr>
                                            <td>{allFlights.name}</td>
                                            <td>{allFlights.email}</td>
                                            <td>{allFlights.flightDetails.from} - {allFlights.flightDetails.to}</td>
                                            <td>{allFlights.flightDetails.date}</td>
                                            <td>$ {allFlights.flightDetails.price}</td>
                                            <td className="text-end">
                                                <span
                                                    className="deleteIcon"
                                                    onClick={() => handleDelete(allFlights._id)}
                                                >
                                                    {deleteIcon}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ManageAllFlights;