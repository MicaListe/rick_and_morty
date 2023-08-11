import axios from "axios";
const ADD_FAV = "ADD_FAV"
const REMOVE_FAV = "REMOVE_FAV"
const FILTER_FAV= "FILTER_FAV"
const ORDER_FAV= "ORDER_FAV"


export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
};

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
};

export const filterFav = (gender) =>{
   return {type:FILTER_FAV,payload:gender}
}

export const orderFav = (order) =>{
   return {type: ORDER_FAV, payload:order}
}

// module.exports={addFav, removeFav, filterFav, orderFav,}