import "./TodoSearch.css"

function TodoSearch({searchValue, setSearchValue}) {
  return (
    <input placeholder="Cut onion" id="search" value={searchValue} onChange={
      (event) => {
        setSearchValue(event.target.value);
      }
    }/>
  );
}

export { TodoSearch };