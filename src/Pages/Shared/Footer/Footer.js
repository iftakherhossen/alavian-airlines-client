import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />

    return (
        <div className="footer">
            <Container>
                <div>
                    <div className="d-flex justify-content-center pt-2 pb-5">
                        <div className="w-40 ps-5">
                            <h6 className="font-color-1">Want to know about our offers first?</h6>
                            <h4>Subscribe our newsletter</h4>
                        </div>
                        <div className="w-60 my-1">
                            <input type="email" placeholder="type your email..." className="footer-email" />
                            <input type="submit" value="SUBSCRIBE" className="footer-button bg-color-1" />
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex flex-column align-items-center pt-5">
                        <img src="https://i.ibb.co/HgXxY2z/logo.png" alt="logo" />
                        <p className="text-center w-60 my-5">Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.</p>
                        <div className="text-center">
                            <span className="fs-4">{twitter}</span>
                            <span className="mx-4 fs-4">{facebook}</span>
                            <span className="fs-4">{instagram}</span>
                        </div>
                    </div>
                    <div className="mt-5 pt-5">
                        <p className="text-center text-white-50">Alavia Airlines © All Rights Reserved - 2021 - Iftakher Hossen</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;