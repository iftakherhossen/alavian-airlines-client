import React from 'react';
import { Redirect, Route } from 'react-router';
import Header from '../../Shared/Header/Header';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = Header();

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