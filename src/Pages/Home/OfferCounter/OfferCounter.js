import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

const OfferCounter = () => {
    const rightArrow = <FontAwesomeIcon icon={faArrowRight} />

    return (
        <div>
            <Container>
                <div className="d-flex pic-wrapper">
                    <div className="w-50 pic-1">
                    </div>
                    <img src="http://alavion.like-themes.com/wp-content/uploads/2019/02/special-pilot.png" alt="pilot" className="after-image" />
                    <div className="w-50 pic-2">
                        <div className="text-wrapper">
                            <h5 className="font-color-1">Special Offer</h5>
                            <h2 className="text-white">Meet our <span className="font-color-2">Care Service</span> for business people who appreciate time</h2>
                            <Button className="px-4 py-3 bg-color-2 border-0 half-rounded mt-3">READ MORE &nbsp; &nbsp; {rightArrow}</Button>
                        </div>
                        <div>
                            <img src="http://alavion.like-themes.com/wp-content/uploads/2019/02/airplane-shape.png" alt="plane" className="side-image" />
                        </div>
                    </div>
                </div>
            </Container>
            <Row sm={1} md={2} lg={3} className="bg-color-2 text-whitesmoke p-5 text-center g-0">
                <Col>
                    <h5>Just call to our call-center</h5>
                    <h3><a href="tel:050086500" className="text-decoration-none text-whitesmoke link-hover">0-500-86-500</a></h3>
                </Col>
                <Col>
                    <p>Ut non augue egestas, commodo velit eget, vestibulum tellus. Curabitur vulputate justo elit, at elementum</p>
                </Col>
                <Col>
                    <h2>International ISO Certified</h2>
                </Col>
            </Row>
        </div>
    );
};

export default OfferCounter;