import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';
import Done from 'material-ui/svg-icons/communication/vpn-key';


import RebrandlyApi from '../services/rebrandlyApi';

const style = {
    margin: 12,
  };


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            apikey: ''
        }
    }
    alignCenter = {
        height: "100vh",
        display: "flex",   
        justifyContent: "center", 
        alignItems: "center"
    }

    cardWidth = {
        width: "500px"
    }

    render() {
        return(
             <div style={this.alignCenter}>
                
               <Card style= {this.cardWidth} > 
                    <TextField
                    hintText="Enter you email"
                    floatingLabelText="Email"
                    type="email"
                    value={this.state.email}
                    onChange={(e) => this.onEmailChange(e)}
                    />

                    <br />
                    <br />
                   

                    <TextField
                    hintText="Enter your API Key"
                    type="password"
                    floatingLabelText="API Key"
                    value={this.state.apikey}
                    onChange={(e) => this.onApikeyChange(e)}
                    />

                    <br />

                    <RaisedButton label="Login" primary={true} style={style}
                 
                    labelPosition="before"
                    onClick={() => this.onSubmit()}
                 />

                 </Card>   
        </div>
        )
    };
    
    onEmailChange(e) {
        this.setState({email: e.target.value})
    }

onApikeyChange(e){
    this.setState({apikey: e.target.value})
}

onSubmit(){
  
	this.getAccountDetail(this.state.apikey)
    .then(account => {
      if(account.email === this.state.email) {
        sessionStorage.setItem('apikey', this.state.apikey)
        sessionStorage.setItem('email', this.state.email)
        this.props.history.push('/AdminBoard')
      }
      else {
        alert('Credentail mis match')
      }
    })
    .catch(error => {
      alert(error.message)
    })
  }

  getAccountDetail(apikey) {
    return RebrandlyApi.get('/account', {headers: {apikey: apikey}})
  }

  componentWillMount() {
    const apikeySession = sessionStorage.getItem('apikey')
    if(apikeySession) {
      this.getAccountDetail(apikeySession)
      .then(account => {
        if(account) {
          this.props.history.push('/AdminBoard')
        }
      })
      .catch(error => {
        sessionStorage.removeItem('apikey')
      })
    }
  }
   
}




export default Login;