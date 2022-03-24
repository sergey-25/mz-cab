import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import {AuthService} from "../services/AuthService";

export const GuestRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        // const currentUser = AuthService.currentUserValue;
        // console.log(currentUser);
        // if (currentUser) {
        //     // not logged in so redirect to login page with the return url
        //     return <Redirect to={{ pathname: `${process.env.PUBLIC_URL}/dashboard`, state: { from: props.location } }} />
        // }

        // authorised so return component
        return <Component {...props} />
    }} />
)
