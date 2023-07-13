import SearchBar from "../buscar/SearchBar";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";

export default function NavBar({onSearch,personajeAleatorio}){


   return(
    <nav> 
      <SearchBar onSearch={onSearch}/>
      <button className={styles.boton}onClick={personajeAleatorio}> Agregar aleatorio </button>
     <div >
      <Link to= "/about" >
        <button className={styles.about}>About</button>
      </Link>
      <Link to= "/home">
        <button className={styles.home}>Home</button>
      </Link>
      <Link to= "/">
        <button className={styles.logOut}>Log Out</button>
      </Link>
     </div>
      
    </nav>  
    )  
}