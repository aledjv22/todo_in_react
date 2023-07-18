import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Button } from '../TodoAdd/Button';
import { TodoAdd } from '../TodoAdd';

function AppUI({
    loading,
    error,
    completedTasks,
    todos,
    searchValue,
    setSearchValue,
    handleClickComplete,
    handleDeleteClick,
    handleAggregateTask,
    moreTasks,
    searchedTasks
}){
    return (
        <>
        <h1 className='title'>To-Do List</h1>
        <TodoCounter 
        completed={completedTasks} 
        total={todos.length}
        />
        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />

        <TodoList>
            {loading && <p>Loading...</p>}
            {error && <p>An error has occurred...</p>}
            {(!loading && searchedTasks.length===0) && <p>There are no tasks</p>}

            {searchedTasks.map(task => 
                <TodoItem 
                key={task.text} 
                text={task.text}
                completed={task.completed}
                onApprovalClick={handleClickComplete}
                onDeleteClick={handleDeleteClick}
                />
                )}
        </TodoList>

        <Button
        onMoreTasks={moreTasks}
        />

        <TodoAdd
        todos = {todos}
        onAggregateTask={handleAggregateTask}
        />
        </>
    );
}

export { AppUI };