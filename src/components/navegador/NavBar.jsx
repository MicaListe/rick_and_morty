import SearchBar from "../buscar/SearchBar";
import styles from "./Nav.module.css"

export default function NavBar({onSearch,personajeAleatorio}){


   return(
    <nav> 
      <SearchBar onSearch={onSearch}/>
      <button className={styles.boton}onClick={personajeAleatorio}> Agregar aleatorio </button>  
    </nav>  
    )  
}