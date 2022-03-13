import React from "react";

import { Link } from 'react-router-dom'
import { useCharacters } from "../hooks/useCharacters";

export default function CharactersList(){
    const {error, loading, data} = useCharacters();
    if(error) return <h1>ERROR!!</h1>
    if(loading) return <h1>LOADING.....</h1>
    return (
        <div>
            <Link to={`/`}>
                <h2>Home</h2>
            </Link>
            <Link to={`/search`}>
                <h2>Search Locations</h2>
            </Link>
            <div className="CharacterList">
                {data.characters.results.map(character => {
                    return (
                        <Link to={`/${character.id}`}>
                            <img src={character.image} />
                            <h2>{character.name}</h2>
                        </Link>
                    )
                })}
            </div>
        </div>
        
    )
}