import { useState } from "react"
import React from 'react'

function ItemCount({ stock, initial, text, onAddToCard }) {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const handleRest = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    // function handleAddToCard() {
    //     console.log("Agregaste:", count)
    // }

    return (
        <div>
            {/* usamos el componente boton y como props le pasamos la funcion que va a ejectuar  */}
            <button onClick={handleAdd}>Click +</button>
            <button onClick={handleRest}>Click -</button>
            <br />
            <strong>{count}</strong>
            {/* utilizamos una arrow function para que no se ejecute la primera vez */}
            {/* sino solo cuando lo llamamos al onclick de onAddToCard */}
            <button onClick={() => { onAddToCard(count) }}>{text}</button>
        </div>
    );


}


export default ItemCount
