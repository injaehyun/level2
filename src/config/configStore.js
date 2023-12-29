import {createStore} from "redux"
import { combineReducers } from "redux"
import Todos from "../modules/Todos";


const rootReducer = combineReducers({
    Todos: Todos,
});
const store = createStore(rootReducer);

export default store;