import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, FloatingLabel, Form, Tab, Tabs, Button } from 'react-bootstrap';

const Booking = () => {
    const rightArrow = <FontAwesomeIcon icon={faArrowRight} />;

    return (
        <div className="booking">
            <div className="mt-5">
                <Container>
                    <h4 className="font-color-1">Get your flight</h4>
                    <h2>Online request for flight!</h2>
                    <div className="d-flex my-5">
                        <div className="w-60">
                            <Tabs defaultActiveKey="round-trip" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="round-trip" title="Round Trip" className="bg-light p-4 text-black br-15">
                                    <div class="d-flex justify-content-between mt-1">
                                        <FloatingLabel controlId="floatingInput" label="Name">
                                            <Form.Control type="text" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingInput" label="Telephone">
                                            <Form.Control type="tel" />
                                        </FloatingLabel>
                                    </div>
                                    <div class="d-flex justify-content-between my-3">
                                        <FloatingLabel controlId="floatingInput" label="From">
                                            <Form.Control type="text" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingInput" label="To">
                                            <Form.Control type="text" />
                                        </FloatingLabel>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <FloatingLabel controlId="floatingInput" label="Departure Date">
                                            <Form.Control type="date" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingInput" label="Return Date">
                                            <Form.Control type="date" />
                                        </FloatingLabel>
                                    </div>
                                    <div class="d-flex justify-content-between my-3">
                                        <FloatingLabel controlId="floatingSelect" label="Passengers">
                                            <Form.Select aria-label="Floating label select example">
                                                <option>Select Passengers</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6 or More</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingSelect" label="Class">
                                            <Form.Select aria-label="Floating label select example">
                                                <option>Select Flight Class</option>
                                                <option value="1">Economy</option>
                                                <option value="2">Business</option>
                                                <option value="3">VIP</option>
                                            </Form.Select>
                                        </FloatingLabel>

                                    </div>
                                    <p className="text-muted text-center mt-2">
                                        <small>* After sending request our manager will contact you for more details about charter.</small>
                                    </p>
                                    <div className="d-flex justify-content-center mt-5 pt-1">
                                        <Button type="button" className="border-0 bg-color-1 rounded-pill py-3 px-5">SUBMIT</Button>
                                    </div>
                                </Tab>
                                <Tab eventKey="one-way" title="One Way" className="bg-light p-4 text-black br-15">
                                    <div class="d-flex justify-content-between mt-1">
                                        <FloatingLabel controlId="floatingInput" label="Name">
                                            <Form.Control type="text" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingInput" label="Telephone">
                                            <Form.Control type="tel" />
                                        </FloatingLabel>
                                    </div>
                                    <div class="d-flex justify-content-between my-3">
                                        <FloatingLabel controlId="floatingInput" label="From">
                                            <Form.Control type="text" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingInput" label="To">
                                            <Form.Control type="text" />
                                        </FloatingLabel>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <FloatingLabel controlId="floatingInput" label="Departure Date">
                                            <Form.Control type="date" />
                                        </FloatingLabel>
                                    </div>
                                    <div class="d-flex justify-content-between my-3">
                                        <FloatingLabel controlId="floatingSelect" label="Passengers">
                                            <Form.Select aria-label="Floating label select example">
                                                <option>Select Passengers</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6 or More</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingSelect" label="Class">
                                            <Form.Select aria-label="Floating label select example">
                                                <option>Select Flight Class</option>
                                                <option value="1">Economy</option>
                                                <option value="2">Business</option>
                                                <option value="3">VIP</option>
                                            </Form.Select>
                                        </FloatingLabel>

                                    </div>
                                    <p className="text-muted text-center mt-2">
                                        <small>* After sending request our manager will contact you for more details about charter.</small>
                                    </p>
                                    <div className="d-flex justify-content-center mt-5 pt-1">
                                        <Button type="button" className="border-0 bg-color-1 rounded-pill py-3 px-5">SUBMIT</Button>
                                    </div>
                                </Tab>
                                <Tab eventKey="transit" title="Transit Flight" className="bg-light p-4 text-black br-15">
                                    <div class="d-flex justify-content-between mt-1">
                                        <FloatingLabel controlId="floatingInput" label="Name">
                                            <Form.Control type="text" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingInput" label="Telephone">
                                            <Form.Control type="tel" />
                                        </FloatingLabel>
                                    </div>
                                    <div class="d-flex justify-content-between my-3">
                                        <FloatingLabel controlId="floatingInput" label="From">
                                            <Form.Control type="text" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingInput" label="To">
                                            <Form.Control type="text" />
                                        </FloatingLabel>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <FloatingLabel controlId="floatingInput" label="Departure Date">
                                            <Form.Control type="date" />
                                        </FloatingLabel>
                                    </div>
                                    <div class="d-flex justify-content-between my-3">
                                        <FloatingLabel controlId="floatingSelect" label="Passengers">
                                            <Form.Select aria-label="Floating label select example">
                                                <option>Select Passengers</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6 or More</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingSelect" label="Class">
                                            <Form.Select aria-label="Floating label select example">
                                                <option>Select Flight Class</option>
                                                <option value="1">Economy</option>
                                                <option value="2">Business</option>
                                                <option value="3">VIP</option>
                                            </Form.Select>
                                        </FloatingLabel>

                                    </div>
                                    <p className="text-muted text-center mt-2">
                                        <small>* After sending request our manager will contact you for more details about charter.</small>
                                    </p>
                                    <div className="d-flex justify-content-center mt-5 pt-1">
                                        <Button type="button" className="border-0 bg-color-1 rounded-pill py-3 px-5">SUBMIT</Button>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                        <div className="w-40 ms-5">
                            <div className="official-card">
                                <h2>Collect your miles</h2>
                                <h4 className="font-color-1 my-3">and get discount next flights with our card</h4>
                                <button className="bg-color-2 border-0 rounded-pill px-5 py-3 text-white mt-5">GET CARD &nbsp; {rightArrow}</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Booking;