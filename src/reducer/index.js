import { combineReducers } from "redux";
import loginReduer from "./loginReducer";

const reducer = combineReducers({
    login : loginReduer
})

export default reducer