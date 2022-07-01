import React from "react";
import "./Dictionary.css";


    <form>
    <div className="row">
        <div className="col-9">
            <input
            type="search"
            placeholder="Type in your word..."
            className="form-control"
            autoFocus="on"
            />
        </div>
        <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
        </div>
    </div>
</form>

export default function Dictionary () {
    return <div className="Dictionary">This is my dictionary</div>;
}