import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(!openModal);
        addTodo(newTodoValue);
    };

    const onCalcel = () => {
        setOpenModal(!openModal);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Write a new task</label>
            <textarea
                placeholder='Cut onions'
                value={newTodoValue}
                onChange={onChange}
                type="text"
                id="newTask"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCalcel}
                    className="TodoForm-button TodoForm-button--cancel"
                >Cancel</button>
                <button 
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >Add</button>
            </div>
        </form>
    );
}

export { TodoForm };