const ADD_FAV = "ADD_FAV"
const REMOVE_FAV = "REMOVE_FAV"

const addFav = (personajes)=>{
    return {type: ADD_FAV, payload: personajes}
}

const removeFav = (id) => {
    return {type: REMOVE_FAV, payload: id}
}

module.exports={addFav, removeFav}