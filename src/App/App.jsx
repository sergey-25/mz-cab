import "./App.css";
import SideMenu, { menuItems } from "../components/SideMenu";
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Admin from "../Admin";



 function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <Admin />)
}
export default App;