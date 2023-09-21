import styles from "./"
import { useState } from "react";

export default function SearchBar({onSearch}) {
   const[id,setId]=useState("")

   const handleChange=(event)=>{
      let value = event.target.value //Captura el valor ingresado (evento) y lo trae
      setId(value)
   }

   return (
      <div >
         <input className={styles.input} type="search" onChange={handleChange} value={id} placeholder=" Add a character"></input>
         <button className={styles.btn} onClick={()=>onSearch(id)}>Add</button>
      </div>
   );
}


