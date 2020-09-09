import { combineReducers } from "redux";
import mode from "./modeReducer";
import nav from "./navReducer";
import project from "./projectReducer";

export default combineReducers({
    mode,
    nav,
    project
});