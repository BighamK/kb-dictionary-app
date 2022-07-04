import React from "react";
import "./Results.css";



export default function Synonyms (props) {
    if (props.synonyms) {
        return (
            <ul className="Synonyms">
                <h4>Synonyms:</h4>
            {props.synonyms.map(function (synonym, index) {
                return <li key={index}>{synonym}</li>;
            })}
            </ul> 
        );
        } else {
            return null;
        }
        }