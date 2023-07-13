import { useState } from "react";
import "./TodoAdd.css"
import approval from "./icons/approval.svg"
import approval_active from "./icons/approval_active.svg"

function TodoAdd(props){
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    const handleAggregateTask = () => {
        props.onAggregateTask();
    };

    return (
        <div className={`add-task true`}> 
            <input placeholder="Add task" id="add"/>
            <button id="add_button">
                <img id="approval_logo" alt='approval logo'
                src={isHovered ? approval_active : approval}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleAggregateTask}
                />
            </button>
        </div>
    );
}

export { TodoAdd };