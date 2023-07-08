import "./TodoItem.css"
import cancel from "./icons/cancel.svg"
import approval from "./icons/approval.svg"
import cancel_active from "./icons/cancel_active.svg"
// import approval_active from "./icons/approval_active.svg"

function TodoItem(props){
  const pepe = () => {
    document.querySelector('#cancel_logo').src = cancel_active;
  }
    return (
      <li className="item">
        <img src={cancel} alt='cancel logo' id='cancel_logo'/>
        <p>{props.text}</p>
        <img src={approval} alt='approval logo' id='approval_logo' onMouseOver={pepe}/>
      </li>
    );
}

export { TodoItem };