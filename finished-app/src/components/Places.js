import React from 'react';
import './Places.css';

function Places(props) { 

    return(
        <div className="places">
            <table>
                <thead>
                    <tr>
                        <th>Airport ID</th>
                        <th>Airport Name</th>
                        <th>Country ID</th>
                        <th>Region ID</th>
                        <th>City ID</th>
                        <th>Country Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.places.map(place => {
                        return (<tr id={place.PlaceId}>
                            <th>{place.PlaceId}</th>
                            <th>{place.PlaceName}</th>
                            <th>{place.CountryId}</th>
                            <th>{place.RegionId}</th>
                            <th>{place.CityId}</th>
                            <th>{place.CountryName}</th>
                        </tr>)
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Places;