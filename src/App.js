import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import Login from './components/Login';

class App extends Component {

  render() {
    return (
     
      <MuiThemeProvider>	
        <Login/>
      </MuiThemeProvider>
      
    );
  }
}


export default App;