import React from 'react';
import { CiCirclePlus } from "react-icons/ci";
import './Button.css'

function Button(props){

    const moreTasks = () => {
        props.onMoreTasks();
    };


    return (
        <button className="add-button" onClick={moreTasks}>
            <CiCirclePlus />
        </button>
    );
}

export { Button };