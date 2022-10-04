import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContairer";

function App() {
  // let titulo = "Hola Buzo!"
  return (
    <BrowserRouter>
      <div className="App">
        {/* <header className="App-header">{titulo.toUpperCase()}</header> */}
        <header className="App-header"></header>
        <NavBar />
        <Routes>
          {/* tenemos 2 rutas.. una que muestra el ItemListContainer y otro el detalle */}
          <Route path="/" element={<ItemListContainer greetting="Bienvenido a la Tienda de Buceo"/>} />
          {/* definimos un segmento de la URL */}
          <Route path="/articulo/:artId" element={<ItemDetailContainer/>} />
          <Route path="/category/:categoryID" element={<ItemListContainer/>}/>
          <Route path="*" element = {<h4>Pagina no encontrada!</h4>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
