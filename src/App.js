import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { Button } from './Button';
import './App.css';
import React, { useState } from 'react';

const defaultTasks = [
  { text: 'Cut onion', completed: true },
  { text: 'Take the React course', completed: false },
  { text: 'Cry with La Llorona', completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTasks);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const handleFilter = (filteredTasks) => {
    setFilteredTasks(filteredTasks);
  };

  const completedTasks = todos.filter(task => task.completed).length;

  return (
    <>
      <h1 className='title'>To-Do List</h1>
      <TodoCounter completed={completedTasks} total={todos.length} />
      <TodoSearch
        onFilter={handleFilter}
        todos={todos}
      />

      <TodoList>
        {filteredTasks.length > 0 ? filteredTasks.map(task => 
          <TodoItem 
          key={task.text} 
          text={task.text}
          completed={task.completed}/>
          ) : todos.map(task => 
          <TodoItem 
          key={task.text} 
          text={task.text}
          completed={task.completed}/>
          )}
      </TodoList>

      <Button/>
    </>
  );
}

export default App;