import { useState } from 'react';
import { ApprovalIcon } from './ApprovalIcon';
import { DelateIcon } from './DelateIcon';
import "./TodoItem.css"
import delate from "./icons/delate.svg"
import approval from "./icons/approval.svg"
import delate_active from "./icons/delate_active.svg"
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
        <ApprovalIcon />
        {/* <img 
        src={isHovered2 ? delate_active : delate} 
        alt='delate icon' 
        id= 'delate_icon'
        onMouseEnter={handleMouse2}
        onMouseLeave={handleMouse2}
        onClick={handleDeleteClick}
        /> */}

        <p id={props.completed ? 'finished_work' : 'task'}>
          {props.text}
        </p>
        
        {/* <img 
        src={props.completed ? approval_active : (isHovered ? approval_active : approval)} 
        alt='approval icon' id='approval_icon' 
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
        onClick={handleClickComplete}/> */}
        <DelateIcon />
      </li>
    );
}

export { TodoItem };