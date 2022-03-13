import React, { useState } from "react";
import { Link } from "react-router-dom";
import { gql, useLazyQuery } from '@apollo/client'

const GET_CHARACTER_LOCATIONS = gql`
    query GetCharacterLocations($name: String!){
        characters(filter: {
            name: $name
            }) {
            results {
                location {
                    name
                }
            }
        }
    }
`;

export default function Search() {
const [name, setName] = useState("");

const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
    variables: {
        name
    }
});
console.log('lazy:', {called, loading, error, data})
    return (
        <div>
            <Link to={`/`}>
                <h2>Home</h2>
            </Link>
            <input value={name} placeholder="search character" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => getLocations()}>Search</button>
            {loading && <div>spinner..</div>}
            {error && <div>error..</div>}
            {data && (
                <ul>
                    {data.characters.results.map(character => {
                        return <li>{character.location.name}</li>
                    })}
                </ul>
            )}
        </div>
    )
}