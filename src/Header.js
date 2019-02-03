import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'


class Header extends Component {
    active = {
        backgroundColor:"#213F3D",
        color:"white",
        fontWeight:"bold"
    };
    header = {
        listStyle:"none",
        display:"flex",
        justifyContent:"space-evenly"
    };
    render() {
        return(
            <div style={this.header}>
                <NavLink exact to="/filterAthletes" activeStyle={this.active}>
                filter
                </NavLink>
                <NavLink to="/updateAthlete" activeStyle={this.active}>
                update
                </NavLink>
            </div>
        );
    }
}
export default Header;