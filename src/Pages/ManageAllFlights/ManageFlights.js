import React, { useState } from 'react';
import { faEnvelope, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ManageFlights = ({ allFlights }) => {
    const { name, email, order } = allFlights;
    const [details, setDetails] = useState({});

    const tickets = Object.keys(order).length;
    const mailAddress = email;

    const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />
    const mailIcon = <FontAwesomeIcon icon={faEnvelope} />

    const handleDelete = id => {
        console.log('deleted triggard', id)
        const url = `http://localhost:5000/booking/${id}`
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
                        const remaining = details.filter(detail => detail._id !== id);
                        setDetails(remaining)
                    }
                }
            })
    }

    return (
        <div>
            <div className="d-flex my-3 border-bottom py-2 px-3">
                <div className="w-95 table-font">{name} - Tickets: {tickets} <small className="text-muted ms-5">(Status: Pending) | <a href={`mailto${mailAddress}`} className="text-muted text-decoration-none">{mailIcon}</a></small> </div>
                <div className="w-5 table-font text-end deleteIcon" onClick={() => handleDelete(allFlights._id)}>{deleteIcon}</div>
            </div>
        </div>
    );
};

export default ManageFlights;