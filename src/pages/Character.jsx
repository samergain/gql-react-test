import React from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import { useCharacter } from "../hooks/useCharacter";

export default function Character(){
    const { id } = useParams();
    const {data, loading, error} = useCharacter(id);
    if(loading) return <h1>LOADING...</h1>
    if(error) return <h1>ERROR!</h1>
    
    return (
        <div>
            <Link to={`/`}>
                <h2>Home</h2>
            </Link>
            <Link to={`/search`}>
                <h2>Search Locations</h2>
            </Link>
            <img src={data.character.image} />
            <div className="character-content">
                <h1>{data.character.name}</h1>
                <div>{data.character.episode.map(
                    episode => {
                        return (
                             <div>
                                <p>{episode.name} - {episode.episode}</p>
                             </div>
                        )
                    }
                )}</div>
                
            </div>
        </div>
    )
    
    
}

