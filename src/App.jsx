import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  let titulo = "Hola Buzo!"
  return (
    <div className="App">
      <header className="App-header">{titulo.toUpperCase()}</header>
      <NavBar />
      <ItemListContainer greetting ="Bienvenido a la Tienda de Buceo" />

    </div>
  );
}


export default App;
