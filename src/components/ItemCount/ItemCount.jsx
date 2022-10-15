import { useState } from "react"
import React from 'react'
import Button from "../Button/Button";

function ItemCount({ stock, initial, text, onAddToCard }) {
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

    function handleAddToCard(){
        console.log("agregaste:", count)                
    }

    return (
        <div>
            {/* usamos el componente boton y como props le pasamos la funcion que va a ejectuar  */}
            <Button onClick={handleAdd}>          Click +      </Button> 
            <Button onClick={handleRest}>       Click -        </Button>
            <br/>
            <strong>{count}</strong>
            {/* utilizamos una arrow function para que no se ejecute la primera vez */}
            {/* sino solo cuando lo llamamos al onclick de onAddToCard */}
            <Button onClick={() => {onAddToCard(count)}}>{text}      Agregar al Carrito </Button>
        </div>
    );


}


export default ItemCount
