import ItemDetailContairer from "./components/ItemDetailContainer/itemDetailContairer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  let titulo = "Hola Buzo!"
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">{titulo.toUpperCase()}</header>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <ItemListContainer greetting="Bienvenido a la Tienda de Buceo" />
          } />
          <Route path="/:artDetail" element={
            <ItemDetailContairer />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
