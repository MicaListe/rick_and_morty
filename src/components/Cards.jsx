import Card from './Card';

export default function Cards({characters}) {
   return <div>
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
      
}   </div>;
}
