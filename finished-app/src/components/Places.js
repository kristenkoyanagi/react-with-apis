import React from 'react';
import './Places.css';

function Places(props) { 

    function placeTable() {
        if(props.showPlaces) {
            return (<table>
                <tr>
                    <th>PlaceId</th>
                    <th>PlaceName</th>
                    <th>CountryId</th>
                    <th>RegionId</th>
                    <th>CityId</th>
                    <th>CountryName</th>
                </tr>
                {props.places.map(place => {
                    return (<tr>
                        <th>{place.PlaceId}</th>
                        <th>{place.PlaceName}</th>
                        <th>{place.CountryId}</th>
                        <th>{place.RegionId}</th>
                        <th>{place.CityId}</th>
                        <th>{place.CountryName}</th>
                    </tr>)
                })}
            </table>)
        } else {
            return (<></>)
        }
    }

    return(
        <div className="places">
            {placeTable()}
         </div>
    )
}

export default Places;