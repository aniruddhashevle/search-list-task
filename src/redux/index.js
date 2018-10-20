import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ReduxThunk from 'redux-thunk';
import { BUILD } from "../config/app-config";

const test = () => ({ test: [] })

export default function createReduxStore() {
    let reduxState = combineReducers({
        test
    }),
        middleWare = applyMiddleware(ReduxThunk);
    return createStore(reduxState, BUILD === "dev" && window.devToolsExtension ?
        compose(middleWare, window.devToolsExtension()) : middleWare);
}