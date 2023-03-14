import {useNavigate} from 'react-router-dom';
import arrow from "../img/arrow.svg"

function HomeButton() {
    const history = useNavigate();
    function handleClick() {
        localStorage.getItem("searchTerm")
        history('/');
    }

    return (
        <button type="button" className="btn" onClick={handleClick}>
            <img src={arrow} alt={arrow} className="arrow"/>
            GO BACK
        </button>
    );
}

export default HomeButton;
