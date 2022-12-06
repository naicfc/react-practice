import React from "react";

export default function Joke(props){
    return(
        <div>
            <h5 className="text-secondary">Setup: {props.setup}</h5>
            <p>Punchline: {props.punchline}</p>
        </div>
    )
}