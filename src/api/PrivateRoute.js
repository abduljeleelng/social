import React from "react";
import {BrowserRouter, Route } from "react-router-dom";
import { isAuthenticated } from "./index";
import SignUp from '../screen/Signup';

const PrivateRoute = ({ component: Component, ...rest }) => (
    // props means components passed down to this pricate route component
    <BrowserRouter>
        <Route
            {...rest}
            render={props =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <SignUp />
                )
            }
        />
    </BrowserRouter>
);

export default PrivateRoute;
