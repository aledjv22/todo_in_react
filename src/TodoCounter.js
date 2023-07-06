function TodoCounter({ total, completed }){
    return (
      <h1>
        You have completed {completed} of {total} TODOs
        </h1>
    );
}

export {TodoCounter};