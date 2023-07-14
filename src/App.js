import React, { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { Button } from './Button';
import { TodoAdd } from './TodoAdd';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

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
    setTodos(newTodos);
  };

  const handleDeleteClick = (taskText) => {
    const newTodos = todos.filter(task => (task.text !== taskText));
    setTodos(newTodos);
  };

  const handleAggregateTask = () => {
    const add = document.getElementById("add").value;
    let addTask = todos.filter(task => task.text.replace(/\s+/g, '').toLowerCase() === add.replace(/\s+/g, '').toLowerCase());
    if(add.trim() !== '' && addTask.length === 0){
      addTask = { text: add, completed: false };
      const newTodos = [...todos, addTask];
      setTodos(newTodos);
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
    <>
      <h1 className='title'>To-Do List</h1>
      <TodoCounter 
      completed={completedTasks} 
      total={todos.length}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
      {searchedTasks.map(task => 
          <TodoItem 
          key={task.text} 
          text={task.text}
          completed={task.completed}
          onApprovalClick={handleClickComplete}
          onDeleteClick={handleDeleteClick}
          />
          )}
      </TodoList>

      <Button
      onMoreTasks={moreTasks}
      />

      <TodoAdd
      todos = {todos}
      onAggregateTask={handleAggregateTask}
      />
    </>
  );
}

export default App;