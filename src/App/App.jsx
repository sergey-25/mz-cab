import "./App.css";
import SideMenu, { menuItems } from "../components/SideMenu";
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Admin from "../Admin";
import Login from "../pages/Login/Login";
import { GuestRoute } from "../Routes/GuestRoute";
import { PrivateRoute } from "../Routes/PrivateRoute";




 function App() {
  

   return (
      <BrowserRouter basename={`/`}>
       <Switch>
         
                        <GuestRoute exact path={`/login`} component={Login} /> 
         <PrivateRoute path={`/`} component={Admin} />
         
                        {/* <Redirect from="/" to={`${process.env.PUBLIC_URL}/dashboard`} /> */}
            
                    </Switch>
                </BrowserRouter>
    )
}
export default App;