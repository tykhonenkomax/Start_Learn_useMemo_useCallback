import React, {useCallback, useState} from 'react';
import {Main} from "./Main";

const UseCallback = () => {

    let [todos, setTodos] = useState([]);
    let [count, setCount] = useState(0);

    const inc = () => setCount(prev => prev + 1)
    const addTodo = useCallback(()=>setTodos([...todos,"rerender page"]),[todos])


    return (
        <div>
            <Main todos={todos} addTodo={addTodo}/>
            <hr/>
            <h1>COUNT:{count}</h1>
            <button onClick={inc}>inc</button>
        </div>
    );
};

export {UseCallback};