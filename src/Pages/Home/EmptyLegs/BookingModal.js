import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const BookingModal = ({ details, openModal, handleModalClose, setBookingSuccess }) => {
    const { from, to, date, price, departure, arrival } = details;
    const { user } = useAuth();
    const name = user.displayName;
    const email = user.email;

    const initialInfo = { name: name, email: email }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }
    const handleSubmit = e => {
        // collect data
        const booking = {
            ...bookingInfo,

            flightDetails: {
                from,
                to,
                date,
                price,
                arrival,
                departure,
            }
        }

        // send data to the server
        fetch('https://aqueous-scrubland-00954.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleModalClose();
                    alert('Your Order is under processing. Check My Flights to get updates!');
                }
            });

        e.preventDefault();
    }
    return (
        <div>
            <Modal
                show={openModal}
                onHide={handleModalClose}
                size="lg"
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className="fs-3">Fly <span className="font-color-2">{from}</span> to <span className="font-color-2">{to}</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <from>
                        <div className="d-flex justify-content-between font-monospace">
                            <div className="w-50 pe-2">
                                <label className="font-color-2">Name</label>
                                <Form.Control
                                    type="text"
                                    placeholder="Departure"
                                    onBlur={handleOnBlur}
                                    defaultValue={user.displayName}
                                    className="mb-3"
                                />
                            </div>
                            <div className="w-50 ps-2">
                                <label className="font-color-2">Email</label>
                                <Form.Control
                                    type="text"
                                    placeholder="Arrival"
                                    onBlur={handleOnBlur}
                                    defaultValue={user.email}
                                    className="mb-3"
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between font-monospace">
                            <div className="w-35 me-1">
                                <label className="font-color-2">From</label>
                                <Form.Control
                                    type="text"
                                    placeholder="From"
                                    onBlur={handleOnBlur}
                                    defaultValue={from}
                                    className="mb-3"
                                    disabled
                                />
                            </div>
                            <div className="w-35 mx-2">
                                <label className="font-color-2">To</label>
                                <Form.Control
                                    type="text"
                                    placeholder="To"
                                    onBlur={handleOnBlur}
                                    defaultValue={to}
                                    className="mb-3"
                                    disabled
                                />
                            </div>
                            <div className="w-35 ms-1">
                                <label className="font-color-2">Date</label>
                                <Form.Control
                                    type="text"
                                    placeholder="Date"
                                    onBlur={handleOnBlur}
                                    defaultValue={date}
                                    className="mb-3"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between font-monospace">
                            <div className="w-35 me-1">
                                <label className="font-color-2">Price</label>
                                <Form.Control
                                    type="text"
                                    placeholder="Price"
                                    onBlur={handleOnBlur}
                                    defaultValue={price}
                                    className="mb-3"
                                    disabled
                                />
                            </div>
                            <div className="w-35 mx-2">
                                <label className="font-color-2">Departure</label>
                                <Form.Control
                                    type="text"
                                    placeholder="Departure"
                                    onBlur={handleOnBlur}
                                    defaultValue={departure}
                                    className="mb-3"
                                    disabled
                                />
                            </div>
                            <div className="w-35 ms-1">
                                <label className="font-color-2">Arrival</label>
                                <Form.Control
                                    type="text"
                                    placeholder="Arrival"
                                    onBlur={handleOnBlur}
                                    defaultValue={arrival}
                                    className="mb-3"
                                    disabled
                                />
                            </div>
                        </div>
                    </from>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between align-items-center">
                    <Button onClick={handleModalClose} className="px-4 btn-danger border-0 fs-6 font-monospace">Cancel</Button>
                    <Button type="submit" onClick={handleSubmit} className="px-4 bg-color-1 border-0 table-font font-color-2 font-monospace fw-bold">Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default BookingModal;