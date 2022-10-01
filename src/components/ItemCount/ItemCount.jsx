import { useState } from "react"
import React from 'react'

function ItemCount({ stock, initial, text }) {
    const [count, setCount] = useState(initial);

    function handleAdd() {
        if (count < stock) {
            setCount(count + 1);
            console.log(count)
        }
    }
    function handleRest() {
        if (count > 1) {
            setCount(count - 1);
            console.log(count)
        }
    }

    return (
        <div>
            <button onClick={handleAdd}>click +</button>
            <button onClick={handleRest}>click -</button>
            <h4>{text}</h4>
            <strong>{count}</strong>
        </div>
    );


}


export default ItemCount
