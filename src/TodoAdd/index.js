import React from "react";
import "./TodoAdd.css"
import { ApprovalIcon } from "../TodoItem/ApprovalIcon";

function TodoAdd(props){
    const handleAggregateTask = () => {
        props.onAggregateTask();
    };

    return (
        <div className={`add-task true`}> 
            <input placeholder="Add task" id="add"/>
            <button id="add_button">
                <div onClick={handleAggregateTask}>
                    <ApprovalIcon />
                </div>
            </button>
        </div>
    );
}

export { TodoAdd };