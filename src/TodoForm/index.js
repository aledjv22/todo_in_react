import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false);
        addTodo(newTodoValue);
    };

    const onCalcel = () => {
        setOpenModal(false);
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
                >Add Task</button>
            </div>
        </form>
    );
}

export { TodoForm };