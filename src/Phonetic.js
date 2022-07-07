import React from "react";
import "./Phonetic.css";

export default function Phonetic(props)  {

return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer" disabled="disabled">
            Listen
            </a>
        <span className="sounds">
            {props.phonetic.text}</span>
            </div>
);
} 