const initialState = {
    myfavorites: [],
    allCharacters:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return { ...state, myfavorites: action.payload, allCharacters: action.payload };

        case 'REMOVE_FAV':
            return { ...state, allCharacters: action.payload, myfavorites: action.payload};
            // case 'REMOVE_FAV':
            //     return {
            //         ...state,
            //         myfavorites: state.myfavorites.filter(fav => fav.id !== action.payload) // Filtrar para eliminar el personaje con el ID correspondiente
            //     }; 
        case 'FILTER_FAV':
            if (action.payload === 'All') {
                return { ...state, myfavorites: [...state.allCharacters] };
            } else {
                const filteredCharacters  = state.allCharacters.filter((fav) => fav.gender === action.payload);
                return { ...state, myfavorites: filteredCharacters };
            }
           

        case "ORDER_FAV":
            const orden= [...state.myfavorites]
            orden.sort((a,b)=>{
                if(action.payload==="A"){
                    return a.id - b.id
                } else if (action.payload === "D") { // Orden descendente
                    return b.id - a.id;
                }
            })
            return{
                ...state,
                myfavorites: orden
            }
        
        default:
            return state
    }
}

export default reducer