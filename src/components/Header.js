import React , {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            open:false
        }
    }
    render(){
        return(
            <div>
                <AppBar
                    title= "Sagarmatha"
                    onLeftIconButtonClick={
                        ()=>this.toggleSidebar()
                    }
                />
                <Drawer
                     open= {this.state.open}
                     docked={false}
                     onRequestChange={()=>this.toggleSidebar()}
                >
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Contact</MenuItem>

                </Drawer>
            </div>

        );  
    }

    toggleSidebar(){
        this.setState({open: !this.state.open})
    }
}

export default Header;