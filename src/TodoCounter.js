import "./TodoCounter.css"

function TodoCounter({ total, completed }){
    return (
      <h2 className="state">
        You have completed {completed} of {total} TO-DOs
      </h2>
    );
}

export {TodoCounter};