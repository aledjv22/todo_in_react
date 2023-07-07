import './Button.css'
import add from "./icons/add.svg"

function Button(){
    return (
        <button className="add-button">
            <img src={add} alt="add to-do"/>  
        </button>
    );
}

export { Button };