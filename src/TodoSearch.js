import { useState } from 'react';
import "./TodoSearch.css"

function TodoSearch(){
    const [isValue, setIsValue] = useState('');
    const value = (event) => {
        const element = event.target.value;
        setIsValue(element);
    }
    console.log(isValue);
    return (
        <input placeholder="Cut onion" id="search" onChange={value}/>
        
    );
}

export {TodoSearch};