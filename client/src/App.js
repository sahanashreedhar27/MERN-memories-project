import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

// In order to implement a new functionality each time
// (1) Create a route in the router (Server)
// (2) Implement the funtion in the controller (Server)
// (3) Implement in the API call. (Client)
// (4) Create an action creator function. (Client)
// (5) Create a case in the reducer. (Client)
// (6) Add the action in the front end (either button onClick etc.) (Client)
const App = () => {
  return (
    <BrowserRouter>
      <Container maxidth='lg'>
        {/* Here NavBar is constant therefore it is outside the switch component. 
        Where as the switch, switches between the two routers - Home and Auth (Login)*/}
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
