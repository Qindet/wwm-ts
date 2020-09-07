import React from "react";
import './menu.css'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/logo.png'

const Menu = () => (
    <div className="bg-color">
        <div className="header">
            <img src={logo} className="logo-main"/>
        </div>
        <div className="container menu-main mg">
            <div className="row">
                <NavLink to="/set-questions" className="btn-large btn-main">Add content</NavLink>
            </div>
            <div className="row">
                <NavLink to="/new-game" className="btn-large btn-main">Play the game</NavLink>
            </div>
        </div>
    </div>

)



export default Menu
