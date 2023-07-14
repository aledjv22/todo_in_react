import { useState } from 'react';
import "./TodoItem.css"
import cancel from "./icons/cancel.svg"
import approval from "./icons/approval.svg"
import cancel_active from "./icons/cancel_active.svg"
import approval_active from "./icons/approval_active.svg"

function TodoItem(props){
  const [isHovered, setIsHovered] = useState(false);
  const handleMouse = () => {
    isHovered ? setIsHovered(false) : setIsHovered(true);
  };

  const [isHovered2, setIsHovered2] = useState(false);
  const handleMouse2 = () => {
    isHovered2 ? setIsHovered2(false) : setIsHovered2(true);
  };

  const handleClickComplete = () => {
    props.onApprovalClick(props.text);
  };

  const handleDeleteClick = () => {
    props.onDeleteClick(props.text);
  };

  return (
      <li className="item">
        <img 
        src={isHovered2 ? cancel_active : cancel} 
        alt='cancel logo' 
        id= 'cancel_logo'
        onMouseEnter={handleMouse2}
        onMouseLeave={handleMouse2}
        onClick={handleDeleteClick}
        />

        <p id={props.completed ? 'finished_work' : 'task'}>
          {props.text}
        </p>
        
        <img 
        src={props.completed ? approval_active : (isHovered ? approval_active : approval)} 
        alt='approval logo' id='approval_logo' 
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
        onClick={handleClickComplete}/>
      </li>
    );
}

export { TodoItem };