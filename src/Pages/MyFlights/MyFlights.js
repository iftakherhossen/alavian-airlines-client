import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const MyFlights = () => {
    const [myFlights, setMyFlights] = useState([]);
    const { user } = useAuth();
    const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />;

    useEffect(() => {
        fetch(`https://aqueous-scrubland-00954.herokuapp.com/booking/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyFlights(data)
            });
    }, [user.email])

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
                        const remaining = myFlights.filter(detail => detail._id !== id);
                        setMyFlights(remaining)
                    }
                }
            })
    }

    return (
        <div className="myFlights">
            <Container>
                <div className="text-center">
                    <h2 className="text-white">My Flights</h2>
                    <h4 className="font-color-1">Manage Your Flights Here</h4>
                </div>
                <div className="mt-5">
                    <div className="d-flex flex-column text-white">
                        <div className="d-flex px-2 mb-2">
                            <h5>Your Tickets - {myFlights.length}</h5>
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
                                    myFlights.map(myFlights => (
                                        <tr>
                                            <td>{myFlights.name}</td>
                                            <td>{myFlights.email}</td>
                                            <td>{myFlights.flightDetails.from} - {myFlights.flightDetails.to}</td>
                                            <td>{myFlights.flightDetails.date}</td>
                                            <td>$ {myFlights.flightDetails.price}</td>
                                            <td className="text-end">
                                                <span
                                                    className="deleteIcon"
                                                    onClick={() => handleDelete(myFlights._id)}
                                                >
                                                    {deleteIcon}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>

                        {myFlights.length === 0 ? <p className="text-center mt-5">Book more <HashLink to="/home#booking" className="text-decoration-none font-color-1">Flights</HashLink></p>: <p className="text-center mt-5">Book your tickets from <HashLink to="/home#booking" className="text-decoration-none font-color-1">Alavian Airlines</HashLink> for safe and reasonable price!</p>}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MyFlights;