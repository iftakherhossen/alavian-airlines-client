import React from 'react';
import { Card, Col, ListGroup, Button } from 'react-bootstrap';

const EmptyLeg = ({ detail }) => {
    const { from, to, date, departure, arrival, sits, price } = detail;

    return (
        <div>
            <Col>
                <Card className="br-15 mb-4">
                    <Card.Title className="bg-color-3 px-2 py-3 font-color-1 text-center">{from}<small>&nbsp; TO &nbsp;</small>{to}</Card.Title>
                    <Card.Body>
                        <Card.Text>
                            <ListGroup className="text-center">
                                <ListGroup.Item>Flight Date {date}</ListGroup.Item>
                                <ListGroup.Item>Departure {departure}</ListGroup.Item>
                                <ListGroup.Item>Arrival {arrival}</ListGroup.Item>
                                <ListGroup.Item>Sits {sits}</ListGroup.Item>
                                <ListGroup.Item>Price $ {price}</ListGroup.Item>
                            </ListGroup>
                            <div className="d-flex justify-content-center">
                                <Button className="px-4 py-3 mx-2 mt-3 rounded-pill border-0 bg-color-2 empty-font btn-hover">BOOK NOW</Button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default EmptyLeg;