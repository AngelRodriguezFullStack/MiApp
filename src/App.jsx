import "./css/estilos.css";
import {NavBar} from "./components/NavBar"
import {ItemListContainer} from "./components/ItemListContainer"


function App () {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="buenas!" />
      
      
     
    </>
  );
}


export default App;