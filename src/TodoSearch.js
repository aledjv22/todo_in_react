import "./TodoSearch.css"

function TodoSearch({ onFilter, todos }) {
  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const filteredTasks = todos.filter(task => task.text.toLowerCase().includes(inputValue));
    onFilter(filteredTasks);
  };

  return (
    <input placeholder="Cut onion" id="search" onChange={handleInputChange} />
  );
}

export { TodoSearch };