import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './components/Login';

import AdminBoard from './components/AdminBoard'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
     
      <MuiThemeProvider>	
        <BrowserRouter>
        <Switch>
          <Route path = "/Login" component= {Login}/> 
          <Route exact path="/" render={() => (<Redirect to="/login"/>)}/>
          <Route path = "/AdminBoard" component= {AdminBoard}/>
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
      
    );
  }
}


export default App;