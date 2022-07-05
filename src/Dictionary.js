import React, { useState } from "react";
import axios from "axios";
import Results from  "./Results";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary (props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);


    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(apiUrl).then(handleDictionaryResponse);



let pexelsApiKey = "563492ad6f9170000100000165777f53ed7a4f8f96a4b3d05a4cada6";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;

let headers = { Authorization: `Bearer ${pexelsApiKey}` };
axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
}


    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);   
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
    return (
         <div className="Dictionary">
<section>
    <h1>What word are you looking for?</h1>
                 <form className="form-inline" onSubmit={handleSubmit}> 
                 <div className="form-group">
                   <input 
                   type="search" 
                   onChange={handleKeywordChange} 
                   defaultValue={props.defaultKeyword}
                   
                   />
                   <button type="submit" className="btn btn-primary mb-1">Search</button>
                   </div>
                </form>
                <div className="hint">
                    Suggested words: sunset, dog, happy...
                </div>
                </section>
                <Photos photos={photos} />
                <Results results={results} />
           </div>
    );
} else {
    load();
    return "Searching";
}
}