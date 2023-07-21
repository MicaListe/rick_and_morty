const ADD_FAV = "ADD_FAV"
const REMOVE_FAV = "REMOVE_FAV"
const FILTER_FAV= "FILTER_FAV"
const ORDER_FAV= "ORDER_FAV"


const addFav = (personajes)=>{
    return {type: ADD_FAV, payload: personajes}
}

const removeFav = (id) => {
    return {type: REMOVE_FAV, payload: id}
}

const filterFav = (gender)=>{
    return {type: FILTER_FAV, payload:gender}
}
const orderFav = (order)=>{
    return {type: ORDER_FAV, payload:order}
}

module.exports={addFav, removeFav, filterFav,orderFav,}