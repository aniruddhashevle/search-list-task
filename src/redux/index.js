import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ReduxThunk from 'redux-thunk';
import { BUILD } from "../config/app-config";
import partiesList from './reducers/search-parties-reducer';

export default function createReduxStore() {
    let reduxState = combineReducers({
        partiesList
    }),
        middleWare = applyMiddleware(ReduxThunk);
    return createStore(reduxState, BUILD === "dev" && window.devToolsExtension ?
        compose(middleWare, window.devToolsExtension()) : middleWare);
}