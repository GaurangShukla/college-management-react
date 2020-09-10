import React from "react";
import { Route, Redirect } from "react-router-dom";
import SecurityService from "./SecurityService";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      SecurityService.isAuth(rest.roles) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
