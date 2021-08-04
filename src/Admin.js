import "../src/App/App.css";
import SideMenu, { itemsList } from "../src/components/SideMenu";
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Employees from "./pages/Employees/Employees";
import PersonalData from "./pages/PersonalData";
import TopHeader from "./components/Header";



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
            <TopHeader/>
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





// import React from 'react';
// import './App.css';
// import SideMenu from "../components/SideMenu";
// import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
// import Header from "../components/Header";
// import PageHeader from '../components/PageHeader';


// import Employees from "../pages/Employees/Employees";
// import Panel from '../components/Panel';



// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#333996",
//       light: '#3c44b126'
//     },
//     secondary: {
//       main: "#f83245",
//       light: '#f8324526'
//     },
//     background: {
//       default: "#f4f5fd"
//     },
//   },
//   overrides:{
//     MuiAppBar:{
//       root:{
//         transform:'translateZ(0)'
//       }
//     }
//   },
//   props:{
//     MuiIconButton:{
//       disableRipple:true
//     }
//   }
// })


// const useStyles = makeStyles({
//   appMain: {
   
//     width: '100%'
//   },
   
// })

// function App() {
//   const classes = useStyles();
  

//   return (
//     <ThemeProvider theme={theme}>
      
//       {/* <Panel/> */}
//       <div className={classes.appMain}>
//         {/* <Header /> */}
//          <SideMenu /> 
//         <Employees />
//       </div>
//       <CssBaseline />
//     </ThemeProvider>
//   );
// }

// export default App;
