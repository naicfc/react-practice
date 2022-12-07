import React from "react";
import photo from './photo.png';
import '../App.css';

export default function Main(){
    return(
        <div className="main-body">
            <img src={photo}  />
        </div>
    )
}