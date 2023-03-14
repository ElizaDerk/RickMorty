import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import API from '../API/api';
import HomeButton from "../components/BackButton";

function Character() {
    const [character, setCharacter] = useState({});
    const { id } = useParams();


    useEffect(() => {
        API.get(`character/${id}`)
            .then(response => setCharacter(response.data));
    }, [id]);


    return (
        <div>
            <HomeButton/>
            <div className="card-item">
                <div className="card-title">
                    <img src={character.image} className="card-img" alt="img"/>
                    <h1>{character.name}</h1>
                </div>
                <div className="card-item-text">
                    <h3>Information</h3>
                        <div className="card-item-wrapper">
                            <p>Gender:</p>
                            <span>{character.gender}</span>
                        </div>
                        <div className="card-item-wrapper">
                            <p>Status:</p>
                            <span>{character.status}</span>
                        </div>
                        <div className="card-item-wrapper">
                            <p>Specie:</p>
                            <span>{character.species}</span>
                        </div>
                        <div className="card-item-wrapper">
                            <p>Origin:</p>
                            <span>{character.origin && character.origin.name}</span>
                        </div>
                       <div className="card-item-wrapper">
                           <p>Type:</p>
                           <span>{character.type}</span>
                       </div>
                </div>
            </div>
        </div>
    );
}

export default Character;

