import React, {useState} from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [openModal, setOpenModal] = useState(false);

    const [searchValue, setSearchValue] = useState('');

    const completedTasks = todos.filter(task => task.completed).length;

    const searchedTasks = todos.filter(
    (task) => {
        const taskText = task.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return taskText.includes(searchText);
    }
    );

    const handleClickComplete = (taskText) => {
    const newTodos = [...todos];
    const taskIndex = newTodos.findIndex(task => task.text === taskText);
    newTodos[taskIndex].completed = !newTodos[taskIndex].completed;
    saveTodos(newTodos);
    };

    const handleDeleteClick = (taskText) => {
    const newTodos = todos.filter(task => (task.text !== taskText));
    saveTodos(newTodos);
    };

    const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, completed: false });
    saveTodos(newTodos);
    };

    const handleAggregateTask = () => {
        const add = document.getElementById("add").value;
        let addTask = todos.filter(task => task.text.replace(/\s+/g, '').toLowerCase() === add.replace(/\s+/g, '').toLowerCase());
        if(add.trim() !== '' && addTask.length === 0){
            addTask = { text: add, completed: false };
            const newTodos = [...todos, addTask];
            saveTodos(newTodos);
            document.getElementById("add").value = '';
        }else if (addTask.length > 0 ){
            alert('Task already exists');
        }else{
            alert('Task can not be empty');
        }
    };

    const moreTasks = () => {
    const status = document.querySelector('.add-task');
    status.classList.toggle(true);
    document.getElementById("add").value = '';
    };
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTasks,
            todos,
            searchValue,
            setSearchValue,
            handleClickComplete,
            handleDeleteClick,
            handleAggregateTask,
            moreTasks,
            searchedTasks,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };