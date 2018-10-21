import {
    GET_PARTIES_LIST,
    GET_CURRENT_BALANACE,
    CLEAR_CURRENT_BALANACE
} from "../action-constants";

const INITIAL_STATE = {
    searchedPartiesList: [],
    currentBalance: null
};

export default function partiesList(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_PARTIES_LIST:
            return { ...state, searchedPartiesList: action.data };

        case GET_CURRENT_BALANACE:
            return { ...state, currentBalance: action.data };

        case CLEAR_CURRENT_BALANACE:
            return state = INITIAL_STATE;
            
        default:
            return state;
    }
}

