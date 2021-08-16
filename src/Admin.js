import "../src/App/App.css";
import SideMenu from "../src/components/SideMenu";
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Employees from "./pages/Employees/Employees";
import PersonalData from "./pages/PersonalData";




function Admin() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
          setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          <div>
            {/* <TopHeader/> */}
         </div>
         
  <Switch>
                <Route exact from="/all-statements" render={props => <Employees  {...props} />} />
                 <Route exact from="/personal-data" render={props => <PersonalData {...props} />} /> 
            </Switch>
         
        </div>
      </Router>
    </div>
  );
}

export default Admin;





