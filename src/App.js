import React, { useEffect } from 'react';
import './App.css';
import Cards from './components/tarjetas/Cards.jsx';
import NavBar from './components/navegador/NavBar';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import About from "./components/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx"
import Form from "./components/Forms/Form.jsx"
import Error from './components/Error/Error';

function App() {

   const[characters, setCharacters] = useState([]) //Pasamos el estado y su actualizacion mediante destructuring
   const navigate=useNavigate()
   const [access, setAccess]=useState(false);
   const EMAIL= "micaelaliste@gmail.com"
   const PASSWORD= "Mica06"

   useEffect(()=>{
      !access && navigate("/");
   }, [access])
   

   function login(userData){
      if(userData.password === PASSWORD && userData.email===EMAIL){
         setAccess(true);
         navigate("/home")
      }
   }

   function logOut(){
      setAccess(true);
      navigate("/")
   }
   
   function onSearch(id) {
      
      if (id < 826) {
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

   
   const location= useLocation()

   return (
      <div className='App'>
         {location.pathname!=="/" && <NavBar onSearch={onSearch} personajeAleatorio={personajeAleatorio} logOut={logOut}/>}
         <Routes>
            <Route path="/" element={<Form login={login}/>}></Route>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/detail/:id" element={<Detail/>}></Route>
            <Route path="" element={<Error/>}></Route>
         </Routes>
      </div>
   );
}

export default App;
