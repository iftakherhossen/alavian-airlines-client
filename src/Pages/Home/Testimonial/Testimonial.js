import React from 'react';
import { Carousel } from 'react-bootstrap';

const Testimonial = () => {
    return (
        <div className="mt-5 pt-4">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/fXcNwnB/photo-1582738411706-bfc8e691d1c2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <blockquote className="fs-5 fst-italic text-dark">"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular."</blockquote>
                        <img src="https://i.ibb.co/cXT9QpB/smart.jpg" alt="user" className="user-pic" />
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/fXcNwnB/photo-1582738411706-bfc8e691d1c2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <blockquote className="fs-5 fst-italic text-dark">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."</blockquote>
                        <img src="https://i.ibb.co/vBDCqxc/IMG-20210526-203457-615.jpg" alt="user" className="user-pic" />
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/fXcNwnB/photo-1582738411706-bfc8e691d1c2.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <blockquote className="fs-5 fst-italic text-dark">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto."</blockquote>
                        <img src="https://i.ibb.co/yfL6Py6/unnamed.jpg" alt="user" className="user-pic" />
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Testimonial;