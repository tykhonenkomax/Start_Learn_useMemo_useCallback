import React, {useMemo, useState} from 'react';

const summator = (n) => {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += n
    }
    return sum
};


const UseMemo = () => {
    let [n, setN] = useState(5);
    let [count, setCount] = useState(0);
    let number = useMemo(()=>summator(n),[n])

    return (
        <div>
            {
                <div>
                <h1>number: {number}</h1>
                <h1>counter: {count}</h1>
                    <button onClick={()=>setN (prev=>prev+1)}>incN</button>
                    <button onClick={()=>setCount(prev=>prev+1)}>incCount</button>
                </div>
            }
        </div>
    );
};

export {UseMemo};