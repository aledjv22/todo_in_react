import "./TodoList.css";
function TodoList(props) {
  return(
    <ul id="list">
        {props.children}
    </ul>
  );
}

export { TodoList };