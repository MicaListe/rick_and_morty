import { createStore, applyMiddleware } from 'redux'; //y esto
import thunk from 'redux-thunk'; //Esto
import reducer from "./reducer"

const store = createStore(reducer, applyMiddleware(thunk)) //Esto puede que le falte a santi

export default store;