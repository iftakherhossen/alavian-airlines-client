import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button, Dropdown, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from '@firebase/auth';
import { HashLink } from 'react-router-hash-link';
import initializeAuthentication from '../../../Firebase/Firebase.initialize';
import MyFlights from '../../MyFlights/MyFlights';

initializeAuthentication();

const Header = () => {
    const google = <FontAwesomeIcon icon={faGoogle} />;
    const userIcon = <FontAwesomeIcon icon={faUser} />

    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, [auth]);

    return (
        <div className="header">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand to="/home">
                        <Link to="/home"><img
                            src="https://i.ibb.co/HgXxY2z/logo.png"
                            width="150"
                            height="50"
                            className="d-inline-block align-top me-5"
                            alt="Alavia Airlines Logo"
                        /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-5">
                            <Nav.Link as={Link} to="/home" className="text-white nav-hover">HOME</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#booking" className="text-white nav-hover">Booking</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#blog" className="text-white nav-hover">BLOG</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about-us" className="text-white nav-hover">ABOUT US</Nav.Link>
                        </Nav>
                        <Nav className="ms-6">
                            {user.email ? <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className="btn bg-color-1 text-black border-0 px-3 py-2"><span className="fw-bold">{user?.displayName}</span> &nbsp;</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/myFlights">My Flights</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/manageAllFlights">Manage All Flights</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> :
                                <h5 className="text-white ms-3 py-2 px-3">Hello &nbsp; {userIcon}</h5>}
                            {user.email ?
                                <Button className="btn bg-color-2 text-white-grey border-0 px-3 py-0 ms-3" onClick={logOut}>{google} &nbsp; Log out</Button>
                                :
                                <Button onClick={signInUsingGoogle} className="btn bg-color-1 text-black border-0 px-3 py-0">{google} &nbsp; Login</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;