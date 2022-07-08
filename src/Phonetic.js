import React from "react";
import "./Phonetic.css";

export default function Phonetic(props)  {

return (
        <div className="Phonetic">
            <a href={props.phonetic.audio ? props.phonetic.audio : '#'} >
            Listen
            </a>
        <span className="sounds">
            {props.phonetic.text}</span>
            </div>
);
} 