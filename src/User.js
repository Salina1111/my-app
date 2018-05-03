import React, {Component} from 'react';
import Chip from 'material-ui/Chip';

const styles = {
    chip: {
      margin: 4,
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
};

class User extends Component
{
	constructor(props)
	{
		super(props)
		this.state={
			fullname:props.firstName+' '+props.lastName ,
			UserName: 'UserName'
		};

	}


	render()
	{
		return(
			<div>
                <h1 onClick = {() => handleClick(this.state.name)}>
                This is {this.props.firstName + ''+ this.props.lastName }. </h1>
                <div style={styles.wrapper}>
                    <Chip style={styles.chip}> {this.state.userName} </Chip>
                    <input name = "username" 
                    type = 'text' 
                    value = {this.state.userName}
                    onChange={(event)=> this.handleChange(event)} />
                </div>
            </div>
		);
	}

	handleClick = function(name)
	{
		this.state.fullname+ 'Clicked')
	}

	handleChange = function(event)
	{
		this.setState({
			UserName:event.target.value
	
		})
	}
		
}


export default User;