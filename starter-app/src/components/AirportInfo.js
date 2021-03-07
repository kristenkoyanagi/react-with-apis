import React, { useState } from 'react';
import './AirportInfo.css';
import Places from './Places';

function AirportInfo() { 
    const [places,setPlaces] = useState([])
    const [query,setQuery] = useState("")
    const [showPlaces,setShowPlaces] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        async function getMyAPI() {
            const reqOptions = {
                method:'GET',
                headers: {
                    "x-rapidapi-key": '40759afcbcmsh33253c61ac2d377p14f791jsn068a8b3badfd',
	                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	                "useQueryString": true
                }
            }

            const qString = {
                "query": query
            }
            
            let response = await fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?' + new URLSearchParams(qString), reqOptions)
            response = await response.json()
            setPlaces(response.Places)
            console.log(response.Places)
        }

        getMyAPI()
        setQuery("")
        setShowPlaces(true)
    }

    return <div className="airportinfo">
        <form onSubmit={handleSubmit}>
            <label htmlFor="queryInput">
                Place Name:
            </label>
            <input id="queryInput" value={query} onChange={(e) => setQuery(e.target.value)} required/>
            <button className="search">Search</button>
        </form>
        {showPlaces ? <Places places={places}></Places> : <></>}
    </div>
}

export default AirportInfo;
