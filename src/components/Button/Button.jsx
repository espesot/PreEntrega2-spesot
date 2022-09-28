import {useState,useEffect} from "react"


function Button(props) {
    const [colorBtn, setcolor] = useState({
         backgroundColor: "rgb(50,80, 150)",

        });
        
    useEffect(
        ()=>{
            console.log("hola boton")
        },
        [colorBtn])        


    function handleClick() {
        setcolor({backgroundColor: "rgb(150,157,0)"})
    }
    return (

        <button onClick={handleClick} style={colorBtn}>{props.text}</button>
    )
}
export default Button;