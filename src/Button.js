import { useState } from 'react';
import './Button.css'
import add from "./icons/add.svg"
import add_active from "./icons/add_active.svg"

function Button(){
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <button className="add-button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <img src={isHovered ? add_active : add}
            alt="add to-do"/>  
        </button>
    );
}

export { Button };