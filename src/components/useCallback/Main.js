import React, {memo} from 'react';

const Main = memo(({addTodo, todos}) => {
        console.log('Todos children Loading...')
        return (
            <div>
                {
                    todos.map((todo,index)=><p key={index}>{todo}</p>)
                }
                <button onClick={addTodo}>Add Todo</button>
            </div>
        );
    });

export {Main};