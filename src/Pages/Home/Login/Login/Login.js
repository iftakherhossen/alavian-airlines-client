import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/booking';
    const google = <FontAwesomeIcon icon={faGoogle} />;

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    return (
        <div className="notFound">
            <Container>
                <Button onClick={handleGoogleLogin}>{google} &nbsp; &nbsp; Sign in with Google</Button>
            </Container>
        </div>
    );
};

export default Login;