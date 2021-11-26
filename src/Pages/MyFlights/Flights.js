import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Flights = (props) => {
    const { _id, from, to, departure, date, price } = props.flight;
    const { handleDelete } = props;

    const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />

    return (
        <div>
            <div className="d-flex my-3 border-bottom py-2 px-3">
                <div className="w-95 table-font">{from} to {to} - {date} - {departure} - {price}</div>
                <div className="w-5 empty-font">Pending</div>
                <div className="w-5 table-font text-end deleteIcon" onClick={() => handleDelete(_id)}>{deleteIcon}</div>
            </div>
        </div>
    );
};

export default Flights;