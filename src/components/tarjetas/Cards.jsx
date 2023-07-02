import Card from '../tarjeta/Card';
import styles from './Cards.module.css';

export default function Cards({characters}) {
   return (<div className={styles.FlexContainer}>
      {characters.map(element=>(
       <Card
         name={element.name}
         status={element.status}
         species={element.species}
         gender={element.gender}
         origin={element.origin.name}
         image={element.image}
         onClose={element.onClose}
      /> 
   ))
      
}</div>);
}
