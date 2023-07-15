import React, { useState } from 'react';
import { TodoIcon } from './TodoIcon';

function DelateIcon(props){
    return (
        <TodoIcon 
        type='delate'
        color='red'
        />
    );
}

export { DelateIcon }