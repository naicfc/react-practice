import React from "react";
import photo from './photo.png';
import '../App.css';

export default function Main(){
    return(
        <div className="main-body">
            <img src={photo} alt="logo" />      
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
        </div>
    )
}