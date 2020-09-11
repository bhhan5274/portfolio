import {GET_SKILLS} from "../actions/types";

export default (state = [], action) => {
    switch (action.type) {
        case GET_SKILLS:
            return action.payload;
        default:
            return state;
    }
};