import React, { useState } from 'react';
import './Feed.css';
import Places from './Places';

function Feed() { 
    const [places,setPlaces] = useState([])
    const [query,setQuery] = useState("")
    const [showPlaces,setShowPlaces] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        async function fetchMyAPI() {
            const reqOptions = {
                method: 'GET',
                headers: {
                    "x-rapidapi-key": "API_KEY",
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "useQueryString": true
                }
            }
            let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?" + new URLSearchParams({query: query}), reqOptions)
            response = await response.json()
            console.log(response.Places)
            setPlaces(response.Places)
        }
        fetchMyAPI()
        setShowPlaces(true)
        setQuery("")
    }

    return(
        <div className="feed">
           <form onSubmit={handleSubmit}>
                <label htmlFor="queryInput">Place:</label>
                <input id="queryInput" value={query} onChange={e => setQuery(e.target.value)}/>
                <button className="search">Submit</button>
           </form>
           <Places places={places} showPlaces={showPlaces}></Places>
        </div>
    )
}

export default Feed;