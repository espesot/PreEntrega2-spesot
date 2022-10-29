import React from "react"
//useState es un Hook que utilizamos para cambiar el estado
//uS nos devuleve [-una variabl (x) -una funcion con la que modificamos la variable] en forma de array

//con el useEffect ejecuramos una tarea solo la primera vez que el componente se renderiza
//se le pasando 2 parametros el 1 es una funcon de callback y el 2 un array.
//  sin el array ademas de ejecutarse al renderzarse se ejecuta cuando se modifica

function Button(props) {
    // const [colorBtn, setColorBtn] = useState({

    //     backgroundColor: "rgb(50,80, 150)",

    // });
    //esto es lo que se ejecuta una sola vez cuando se monta el componente Botton.
    // cuando le pasamos un paramatro en el array el useEffect se ejecuta cuando se modifica el parametro      



    // function handleClick() {
    //     if (props.onClick) props.onClick()
    // }

    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}
export default Button;