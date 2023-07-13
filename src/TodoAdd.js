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
    return (
        <div className={`add-task true`}> 
            <input placeholder="Add task" id="add" value={props.addTask} onChange={
                (event) => {
                    props.setAddTask(event.target.value);
                }
            }/>
            <button id="add_button" onClick={props.handleAddClick}>
                <img id="approval_logo" src={isHovered ? approval_active : approval}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                />
            </button>
        </div>
    );
}

export { TodoAdd };