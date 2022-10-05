import { useState } from "react"
import React from 'react'

function ItemCount({ stock, initial, text }) {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
            console.log(count)
        }
    }
    const handleRest = () => {
        if (count > 1) {
            setCount(count - 1);
            console.log(count)
        }
    }

    return (
        <div>
            <button onClick={handleAdd}>Click +</button>
            <button onClick={handleRest}>Click -</button>
            <br/>
            <strong>{count}</strong>
            <h4>{text}</h4>
        </div>
    );


}


export default ItemCount
