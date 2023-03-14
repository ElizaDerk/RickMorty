import {useEffect, useState} from "react";
import logo from "../img/Logo.png";
import icon from "../img/Icon.svg";
import {useNavigate} from "react-router-dom";
import API from "../API/api"

const Main = () => {

    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState(
        localStorage.getItem("searchTerm") || ""
    );
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        API.get('character')
            .then(response => setCharacters(response.data.results));
    }, []);

    useEffect(() => {
        const filteredCharacters = characters.filter(character =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredCharacters);
    }, [searchTerm, characters]);

    useEffect(() => {
        const searchTermFromStorage = localStorage.getItem('searchTerm');
        if (searchTermFromStorage) {
            setSearchTerm(searchTermFromStorage);
        }
    }, []);

    const handleSearch = event => {
        // setSearchTerm(event.target.value);
        const value = event.target.value;
        setSearchTerm(value);
        localStorage.setItem('searchTerm', value);
    };


    const navigate = useNavigate()
    const onCharacterClick = (id) => {
        navigate(`/character/${id}`)
    }

    return (
            <div className="content">
                <img src={logo} alt="logo" className="mainLogo"/>
                <div className="block">
                    <div className="input-field">
                        <img src={icon} alt="icon" className="input-icon"/>
                        <input className="input" type="text" value={searchTerm} onChange={handleSearch} placeholder="Filter by name..." />
                    </div>
                    <div className="list">
                        {searchResults.map(character => (
                            <div key={character.id} onClick={() => { onCharacterClick(character.id)}} className="list-item">
                                <img src={character.image} alt="img"/>
                                <div className="card-text">
                                    <h2>{character.name}</h2>
                                    <p>{character.species}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default Main;
