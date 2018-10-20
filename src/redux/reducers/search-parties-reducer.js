import {
    GET_PARTIES_LIST,
} from "../action-constants";

const INITIAL_STATE = {
    searchedPartiesList: []
};

export default function partiesList(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_PARTIES_LIST:
            return { ...state, searchedPartiesList: action.data };
        default:
            return state;
    }
}

