import { combineReducers } from "redux";
import mode from "./modeReducer";
import nav from "./navReducer";

export default combineReducers({
    mode,
    nav
});