import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import { isAuthenticated } from "./index";
import SignUp from '../screen/Signup';

const PrivateRoute = ({ component: Component, ...rest }) => (
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
/*
function PrivateRouteTest({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          fake.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  */
export default PrivateRoute;


