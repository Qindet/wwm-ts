import React from "react";
import './menu.css'
import {NavLink} from 'react-router-dom'


const Menu = () => (
    <div className="container menu-main mg">
        <div className="row">
            <NavLink to="/set-questions" className="waves-effect waves-light btn-large col"><i className="material-icons left">cloud</i>Add content</NavLink>
        </div>
        <div className="row">
            <NavLink to="/new-game" className="waves-effect waves-light btn-large col"><i className="material-icons left">cloud</i>Play the game</NavLink>
        </div>
    </div>
)



export default Menu
