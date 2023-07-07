import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { Button } from './Button';
import './App.css';
import React from 'react';

const tasks = [
  { text: 'Cut onion', completed: true },
  { text: 'Take the React course', completed: false },
  { text: 'Cry with La Llorona', completed: false },
];

const completedTasks = tasks.filter(task => task.completed).length;

function App() {
  return (
    <>
      <h1 className='title'>To-Do List</h1>
      <TodoCounter completed={completedTasks} total={tasks.length} />
      <TodoSearch/>

      <TodoList>
        {tasks.map(task => 
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
