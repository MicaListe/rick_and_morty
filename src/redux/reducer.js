const initialState = {
    myfavorites: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return {
                ...state,
                myfavorites: [...state.myfavorites, action.payload]
            }
        case 'REMOVE_FAV':
            return {
                ...state,
                myfavorites: state.myfavorites.filter((fav) => fav.id !== action.payload)
            }
        default:
            return state
    }
}

export default reducer