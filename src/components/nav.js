import React from "react";
import logo from '../logo.svg';
import '../App.css';

export default function Nav(){
    return(
        <nav className="main-nav">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2 className="nav-text">REACT JS</h2>
        </nav>
    )
}