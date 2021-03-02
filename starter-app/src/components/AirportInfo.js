import React, { useState } from 'react';
import './AirportInfo.css';

function AirportInfo() { 
    const [places,setplaces] = useState([])
    const [query,setQuery] = useState("")

    function handleSubmit(give){
        give.preventDefault();
        async function getMyAPI() {
            const requestOptions = {
                
            }
        }
    }

    return <div className="airportinfo">
        <form onSubmit={handleSubmit}>
            <label htmlFor="queryInput">
                Place Name:
            </label>
            <input id="queryInput" value={query} onChange={(give) => setQuery(give.target.value)} required/>
            <button className="search">Search</button>
        </form>
    </div>
}

export default AirportInfo;
