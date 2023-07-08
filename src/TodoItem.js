import { useState } from 'react';
import "./TodoItem.css"
import cancel from "./icons/cancel.svg"
import approval from "./icons/approval.svg"
import cancel_active from "./icons/cancel_active.svg"
import approval_active from "./icons/approval_active.svg"

function TodoItem(props){
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [isHovered2, setIsHovered2] = useState(false);
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const [approvalId, setApprovalId] = useState('task');
  const handleApprovalClick = () => {
    if (approvalId === 'task') {
      setApprovalId('finished_work');
    }else{
      setApprovalId('task');
    }
  };

  return (
      <li className="item">
        <img 
        src={isHovered2 ? cancel_active : cancel} 
        alt='cancel logo' 
        id= 'cancel_logo'
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}/>

        <p id={approvalId}>
          {props.text}
        </p>
        
        <img 
        src={isHovered ? approval_active : approval} 
        alt='approval logo' id='approval_logo' 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleApprovalClick}/>
      </li>
    );
}

export { TodoItem };