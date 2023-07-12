import React, { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { Button } from './Button';
import { TodoAdd } from './TodoAdd';
import './App.css';

const defaultTasks = [
  { text: 'Cut onion', completed: true },
  { text: 'Take the React course', completed: false },
  { text: 'Cry with La Llorona', completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTasks);

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
    const newTodos = todos.map(task => {
      if (task.text === taskText) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    });
    setTodos(newTodos);
  };

  const handleDeleteClick = (taskText) => {
    const newTodos = todos.filter(task => (task.text !== taskText));
    setTodos(newTodos);
  };

  const handleAggregateTasks = (newTask) => {
    const newTodos = todos.push(newTask);
    setTodos(newTodos);
  };

  const [isStatus, setIsStatus] = useState(true);
  const moreTasks = () => {
    const status = document.querySelector('.add-task');
    status.classList.toggle(true);
    setIsStatus(status);
  };

  return (
    <>
      <h1 className='title'>To-Do List</h1>
      <TodoCounter completed={completedTasks} total={todos.length} />
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
      status={isStatus}
      onAggregateTasks={handleAggregateTasks}
      />
    </>
  );
}

export default App;