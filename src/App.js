import React from 'react';
import './App.css';
import Cards from './components/tarjetas/Cards.jsx';
import NavBar from './components/navegador/NavBar';
import { useState } from 'react';
import axios from 'axios';

function App() {
   const[characters, setCharacters] = useState([]) //Pasamos el estado y su actualizacion mediante destructuring
   function onSearch(id) {
      
      if (id < 826) {
         const aleatorio= Math.floor(Math.random()*826)+1
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
             const isCharacterExists = characters.find((characters) => characters.id === data.id); //Se crea un arrow. Find encuentra en el array el primer 
                                                                                                 //elemento que coincida con el solicitado. Pide que en character
                                                                                                 // el id ingresado coincida con el de data.  
             if (!isCharacterExists) {
               setCharacters((characters) => [...characters, data]); //Si el id no se repite, actualiza characters agregando el nuevo personaje
             } else {
               window.alert('¡El personaje ya está en la lista!');
             }
           }
         });
       } else {
         window.alert('¡No hay personajes con este ID!');
       }
     }

   function personajeAleatorio() {
      
      const aleatorio= Math.floor(Math.random() * 826) + 1
         axios(`https://rickandmortyapi.com/api/character/${aleatorio}`).then(({ data }) => {
            if (data.name) {
               const isCharacterExists=characters.find((characters)=>characters.id === data.id)//arrow function para que no se repitan las cards cuando llamemos por id
                                                                                    //metodo find(),encuentra cualquier elemento dentro de un array
               if(!isCharacterExists){
                  setCharacters((characters) => [...characters, data]);
               }else{
                  window.alert('¡El personaje ya ha sido seleccionado!')
               } 
            }
         });
      
   }

   const onClose = (id) =>{
      setCharacters(characters.filter((characters)=> characters.id !== id)) //Filtra y compara si el ID distinto
   }

   return (
      <div className='App'>
         <NavBar onSearch={onSearch} personajeAleatorio={personajeAleatorio} />
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
