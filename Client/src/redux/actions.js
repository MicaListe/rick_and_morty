import axios from "axios";
const ADD_FAV = "ADD_FAV"
const REMOVE_FAV = "REMOVE_FAV"
const FILTER_FAV= "FILTER_FAV"
const ORDER_FAV= "ORDER_FAV"


export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   try{
      return async (dispatch) => {
         const { data }= await axios.post(endpoint, character)
            return dispatch({
               type: ADD_FAV,
               payload: data,
            });
      };
   }catch(error){
      console.error(error.message)
   }
};

export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint)
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         })
      } catch (error) {
         console.log(error.message)
      }       
   }
}

export const filterFav = (gender) =>{
   return {type:FILTER_FAV,payload:gender}
}

export const orderFav = (order) =>{
   return {type: ORDER_FAV, payload:order}
}

module.export={addFav, removeFav, filterFav, orderFav,}