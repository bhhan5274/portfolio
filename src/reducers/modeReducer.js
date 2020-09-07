import {TOGGLE_MODE} from "../actions/types";

export default (state = true, action) => {
    switch (action.type) {
        case TOGGLE_MODE:
            return !state;
        default:
            return state;
    }
};