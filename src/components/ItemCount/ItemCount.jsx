import { useState } from "react"
import React from 'react'

function ItemCount(stock, initial, text) {
    const[count, setCount] = useState(initial);
    
    function handleSusbtrac(){
        if(count > 1) setCount(count - 1)
    }

    function handleAdd(){
        if (count < stock) setCount(count +1);
    }
  
    return (
    <div>
        <button onClick={handleAdd}>+</button>
        <strong>{count}</strong>
        <button onAuxClick={handleSusbtrac}>-</button>
        
    </div>
  )
}


export default ItemCount
