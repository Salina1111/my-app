import React,{Component} from 'react';

import TextField from 'material-ui/TextField';
import { blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

const style={
	 margin: 12
}

const floatingLabelStyle={
    color: blue500
}

const floatingLabelFocusStyle={
    color: blue500
}



class Login extends Component{
	render(){
		return(
			<div>

			    <TextField
			      
			      hintText="Email"
			    /><br />

			    <TextField
			      hintText="API key"
			      type="password"
			    /><br />
			    
			  </div>
	  	);
	}
}


export default Login;	