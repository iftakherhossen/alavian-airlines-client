import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? children : <Redirect
                to={{
                    pathname: "/home",
                    state: { from: location }
                }}
                ></Redirect>
            }
        >
        </Route>
    );
};

export default PrivateRoute;