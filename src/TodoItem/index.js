import React from 'react';
import { ApprovalIcon } from './ApprovalIcon';
import { DelateIcon } from './DelateIcon';
import "./TodoItem.css"

function TodoItem(props){
  const handleClickComplete = () => {
    props.onApprovalClick(props.text);
  };

  const handleDeleteClick = () => {
    props.onDeleteClick(props.text);
  };

  return (
      <li className="item">
        <div onClick={handleDeleteClick}>
          <DelateIcon />
        </div>
        
        <p id={props.completed ? 'finished_work' : 'task'}>
          {props.text}
        </p>
        
        <div onClick={handleClickComplete}>
          <ApprovalIcon />
        </div>
      </li>
    );
}

export { TodoItem };