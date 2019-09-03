import React from 'react';
import './App.css';

import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Details } from './pages/Details';



const App = () =>  {
 
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Details" component={Details} />
      </Switch>
    </BrowserRouter>
  );

}

export default App;
