import styles from "./Card.module.css"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Card({name,status,species,gender,origin,image,onClose}) {
   return (
   <div className={styles.card}>
      <button className= {styles.boton} onClick={onClose}><FontAwesomeIcon icon={faArrowRight} className="fa-icon-beat" /></button>
   <div class={styles.card}>
   <div class={styles.innerCard}>
    <div class={styles.frontSide}>
   </div>
    <div class={styles.backSide}>   
 <h2 className={styles.nombre}>{name}</h2>
      <div className={styles.img}>
         <img src={image} alt={"not found"} />
      </div>
      <div className={styles.subtitulos}>
      <h2>Status: {status}</h2>
      <h2> Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin}</h2>
      </div>
    </div>
   </div>
   </div>
</div>

   );
}


