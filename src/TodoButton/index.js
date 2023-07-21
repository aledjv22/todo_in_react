import React from 'react';
import { CiCirclePlus } from "react-icons/ci";
import './Button.css'
import { TodoContext } from '../TodoContext';

function Button(){
    const {
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    const isOpenModal = () => {
        setOpenModal(!openModal);
    };


    return (
        <button className="add-button" onClick={isOpenModal}>
            <CiCirclePlus />
        </button>
    );
}

export { Button };