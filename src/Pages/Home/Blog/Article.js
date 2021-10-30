import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Article = ({ article }) => {
    const { img, title, description } = article;
    const rightArrow = <FontAwesomeIcon icon={faArrowRight} />

    return (
        <div>
            <Col>
                <Card className="border-0">
                    <div className="zoom-animation-wrapper"><Card.Img variant="bottom" src={img} alt="article-img" className="zoom-animation" /></div>
                    <Card.Body>
                        <Link to="/home" className="text-dark text-decoration-none article-hover">
                            <Card.Title>{title}</Card.Title>
                        </Link>
                        <Card.Text>{description}</Card.Text>
                        <Link to="/home" className="text-dark text-decoration-none article-hover">
                            <Button className="px-4 py-3 bg-color-2 border-0 half-rounded mt-3">READ MORE &nbsp; &nbsp; {rightArrow}</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Article;