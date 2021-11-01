import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Flights = ({flight}) => {
    const { from, to, departure, date, price } = flight;

    const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />

    return (
        <div>
            <div className="d-flex my-3 border-bottom py-2 px-3">
                <div className="w-95 table-font">{from} to {to} - {date} - {departure} - {price}</div>
                <div className="w-5 table-font text-end deleteIcon">{deleteIcon}</div>
            </div>
        </div>
    );
};

export default Flights;