import styles from "./Card.module.css"
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";
import {addFav, removeFav} from "../../redux/actions"
import { connect } from "react-redux";
import { useState,useEffect } from "react";


export function Card({name,status,species,gender,origin,image,onClose,id, addFav, removeFav, myfavorites}) {
   
   const[isFav, setIsFav]= useState(false)

   useEffect(() => {
      myfavorites.forEach((fav) => {
         if (fav.id ===id) {
            setIsFav(true);
         }
      });
   }, [myfavorites]);
   

   function handleFavorite(){
      if(isFav === true){
         setIsFav(false)
         removeFav(id)
      }else if(isFav === false){
         setIsFav(true)
         addFav({name:name,status:status,species:species,gender:gender,origin:origin,image:image,onClose:onClose,id:id})
      }
   }

   return (
   <div className={styles.card}>
   {
      isFav ? (
       <button className={styles.rojo} onClick={handleFavorite}>❤️</button>
      ) : (
       <button className={styles.rojo} onClick={handleFavorite}>🤍</button>
      )
      }

      <button className= {styles.boton} onClick={onClose}>X</button>
   <div class={styles.card}>
   <div class={styles.innerCard}>
    <div class={styles.frontSide}>
   </div>
   <div class={styles.backSide}>   
    <Link to={`/Detail/${id}`}><h2 className={styles.nombre}>{name}</h2></Link>
   <div className={styles.img}>
         <img src={image} alt={"not found"} />
   </div>
   <div className={styles.subtitulos}>
      <h2>N°: {id}</h2>
      {/* <h2>Status: {status}</h2>
      <h2> Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin}</h2> */}
   </div>
   </div>
   </div>
   </div>
</div>

   );
}

function mapDispatchToProps(dispatch){
   return{
      addFav: (personaje) => dispatch(addFav(personaje)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

function mapStateToProps(isFav){
   return{
      myfavorites: isFav.myfavorites
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)


