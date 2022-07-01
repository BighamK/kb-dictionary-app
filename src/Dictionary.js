import React from "react";
import "./Dictionary.css";

export default function Dictionary () {
    function search(event) {
        event.preventDefault();
        alert("Searching...");
    }

    return (
<div className="Dictionary">
 <form onSubmit={search}>    
    <div className="row">
        <div className="col-9">
            <input
            type="search"
            placeholder="Type in your word..."
            className="form-control"
            autoFocus="on"
            />
        </div>
        <div className="col-auto">
            <input type="submit" value="Search" className="btn btn-primary" />
        </div>
    </div>
</form>
</div>
    );
}