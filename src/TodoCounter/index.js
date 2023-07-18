import "./TodoCounter.css"

function TodoCounter({ total, completed }){
    return (
      total === completed ?
      <h2 className="state">
        You have completed all your TO-DOs
      </h2>
      :
      <h2 className="state">
        You have completed {completed} of {total} TO-DOs
      </h2>
    );
}

export {TodoCounter};