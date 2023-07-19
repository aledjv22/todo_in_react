import "./TodoCounter.css"

function TodoCounter({ total, completed, empty, loading}){
    return (
      <h2 className="state">
        {
          loading?"Loading...":
          empty? "There are no tasks to show":
          total === completed ? "You have completed all your TO-DOs":
          `You have completed ${completed} of ${total} TO-DOs`
        }
      </h2>
    );
}

export {TodoCounter};