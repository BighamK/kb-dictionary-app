import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";


export default function Meaning(props) {
    return (
        <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index)
        { 
            return (
                <div key={index}>
                   
                    <div className="definition"><h4>Definition: </h4>
                     {definition.definition}
                       </div>
                    
                       <div className="example">
                       {definition.example}
                       </div>
                     
                       <Synonyms synonyms={definition.synonyms} />
                     <br/>
                       <hr />       
          </div>
    );
})}
</div>
);
}