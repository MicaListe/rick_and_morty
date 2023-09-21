import Card from '../tarjeta/Card';
import styles from './Cards.module.css';

export default function Cards({characters,onClose}) {
   return (
   <div className={styles.FlexContainer}>
      {characters.map(element=>(
       <Card
         key={element.id}
         id={element.id}
         name={element.name}
         status={element.status}
         species={element.species}
         gender={element.gender}
         origin={element.origin.name}
         image={element.image}
         onClose={()=>onClose(element.id)} //Llama a la funcion
      /> 
   ))
      
}</div>);
}
