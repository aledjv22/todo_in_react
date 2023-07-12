import { useState } from 'react';
import './Button.css'
import add from "./icons/add.svg"
import add_active from "./icons/add_active.svg"

function Button(props){
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const moreTasks = () => {
        props.onMoreTasks();
    };


    return (
        <button className="add-button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <img 
            src={isHovered ? add_active : add}
            alt="add to-do"
            onClick={moreTasks}
            />  
        </button>
    );
}

export { Button };