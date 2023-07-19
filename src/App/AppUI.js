import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Button } from '../TodoAdd/Button';
import { TodoAdd } from '../TodoAdd';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodoContext } from '../TodoContext';

function AppUI(){
    const {
        loading,
        error,
        searchedTasks,
        handleClickComplete,
        handleDeleteClick,     
        moreTasks,  
        handleAggregateTask,
    } = React.useContext(TodoContext);
    return (
        <>
        <h1 className='title'>To-Do List</h1>
        <TodoCounter/>
        {!loading && <TodoSearch/>}

        <TodoList>
            {loading && <TodosLoading/>}
            {loading && <TodosLoading/>}
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
        onAggregateTask={handleAggregateTask}
        />
        </>
    );
}

export { AppUI };