import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContairer";
import { CartContextProvider } from "./context/cartContext";
import CartView from "./components/CartView/CartView";
// import { sendDataToFirebase } from "./components/service/firebase";

function App() {
  // la funcion handleSend se utilizo una sola vez para cargar los articulos a la DB
  // function handleSend() {
    // sendDataToFirebase()
  // }
  return (
    <CartContextProvider>
      {/* <button onClick={handleSend}>enviar datos</button> */}
      <BrowserRouter>
        <div className="App">
          {/* <header className="App-header">{titulo.toUpperCase()}</header> */}
          <header className="App-header"></header>
          <NavBar />
          <Routes>
            {/* tenemos 2 rutas.. una que muestra el ItemListContainer y otro el detalle */}
            <Route path="/" element={<ItemListContainer greetting="Bienvenido a la Tienda de Buceo" />} />
            {/* definimos un segmento de la URL */}
            <Route path="/articulo/:itemId" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryID" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="*" element={<h4>Pagina no Encontrada!</h4>} />
            <Route path="/thanks/:orderId" element={<h4>Gracias por tu compra</h4>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}


export default App;
