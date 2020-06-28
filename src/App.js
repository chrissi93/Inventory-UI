import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"


import Inventory from './views/inventory-ui'

import Routes from "./Routes"


function App() {
  
  return (
    <Router>
      <Route path="/" exact component={Inventory}/>
      {Routes.map((prop, key) => {
        return (
        <Route path={prop.path} component={prop.component} key={key}/>);
      })}
    </Router>
  );
}

export default App;
