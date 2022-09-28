import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
// import { ChakraProvider } from '@chakra-ui/react'

function App() {
  let titulo = "Hola Buzo!"
  return (
    // <ChakraProvider>
      <div className="App">
        <header className="App-header">{titulo.toUpperCase()}</header>
        <NavBar />
        <ItemListContainer greetting="Bienvenido a la Tienda de Buceo" />

      </div>
    // </ChakraProvider>
  );
}


export default App;
