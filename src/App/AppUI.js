import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Button } from '../TodoAdd/Button';
import { TodoAdd } from '../TodoAdd';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';

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
        empty={todos.length===0}
        loading={loading}
        />
        {!loading && <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />}

        <TodoList>
            {loading && <TodosLoading/>}
            {error && <TodosError/>}

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

        {!loading && <Button
        onMoreTasks={moreTasks}
        />}

        <TodoAdd
        todos = {todos}
        onAggregateTask={handleAggregateTask}
        />
        </>
    );
}

export { AppUI };