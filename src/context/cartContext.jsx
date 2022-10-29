import { createContext, useState } from "react";
// import ItemCount from "../components/ItemCount/ItemCount";

const cartContext = createContext();

function CartContextProvider(props) {
    const [cart, setCart] = useState([])

    function addToCart(item, count) {
        let newCart = [...cart]
        let newItem = { ...item, count }
        newCart.push(newItem)
        setCart(newCart)
    }

    function removeItem(idToRemove) {
        let newCart = cart.filter((itemInCart) => itemInCart.id !== idToRemove)
        setCart(newCart)
    }

    function getTotalItemCount() {
        let total = 0
        cart.forEach((itemInCart) => {
            total = total + itemInCart.count;
        })
        return total;
    }
    function getTotalPrice(){
        let total = 0;
        cart.forEach((itemInCart) => {
            total = total + itemInCart.count * itemInCart.price;
        });
        return total;
    }    


    function clearCart() {
        setCart([])
    }

    return (
        <>
            <cartContext.Provider
                value={{
                    cart,
                    addToCart,
                    getTotalItemCount,
                    removeItem,
                    getTotalPrice,
                    clearCart,
                }}
            >
                {props.children}
            </cartContext.Provider>
        </>
    );
}
export { cartContext, CartContextProvider };