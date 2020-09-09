import {GET_PROJECTS} from "../actions/types";

export default (state = [], action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return action.payload;
        default:
            return state;
    }
};