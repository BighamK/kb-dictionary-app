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
                    <h4>Definition: </h4>
                    <div className="definition"> {definition.definition}
                       </div>
                       <br />
<h4>Example: </h4>
                       <div className="example">
                       {definition.example}
                       </div>
                       <br />
                       <h4>Synonyms: </h4>
                       <Synonyms synonyms={definition.synonyms} />
                       <br />
                       <hr />       
          </div>
    );
})}
</div>
);
}