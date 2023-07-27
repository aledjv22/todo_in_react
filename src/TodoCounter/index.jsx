import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css"

function TodoCounter(){
  const {
    loading,
    completedTasks: completed,
    todos: total,
  } = React.useContext(TodoContext);
  const empty = total.length===0
    return (
      <h2 className="state">
        {
          loading?"Loading...":
          empty? "There are no tasks to show":
          total.length === completed ? "You have completed all your TO-DOs":
          `You have completed ${completed} of ${total.length} TO-DOs`
        }
      </h2>
    );
}

export {TodoCounter};