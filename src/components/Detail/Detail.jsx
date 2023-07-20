import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from "./Detail.module.css"

export default function Detail(){

    const {id}=useParams()
    const [character, setCharacter]=useState({})
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
      <div class={styles.card}>
      <div class={styles.innerCard}>
        <div className={styles.card}>
            {character.name && (  
            <div className={styles.frontSide}>
                <h2>{character.name}</h2>
                <p><b>Status: </b>{character.status}</p>
                <p><b>Species: </b>{character.species}</p>  
                <p><b>Gender: </b>{character.gender}</p>
                <p><b>Origin: </b>{character.origin.name}</p>
                <img className={styles.img} src={character.image} alt='Not Found'/> 
                </div>
             )}    
        </div> 
        </div> 
        </div>
    )  
}
