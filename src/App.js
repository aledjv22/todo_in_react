import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { Button } from './Button';
import './App.css';
import React from 'react';

const defaultTodos = [
  { text: 'Cut onion', completed: true },
  { text: 'Take the React course', completed: false },
  { text: 'Cry with La Llorona', completed: false },
];

function App() {
  return (
    <>
      <h1 className='title'>To-Do List</h1>
      <TodoCounter completed={16} total={25} />
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => 
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}/>
          )}
      </TodoList>

      <Button/>
    </>
  );
}

export default App;
