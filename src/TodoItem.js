import "./TodoItem.css"
import cancel from "./icons/cancel.svg"
import approval from "./icons/approval.svg"

function TodoItem(props){
    return (
      <li className="item">
        <img src={cancel} alt='cancel logo' id='cancel_logo'/>
        <p>{props.text}</p>
        <img src={approval} alt='approval logo' id='approval_logo'/>
      </li>
    );
}

export { TodoItem };