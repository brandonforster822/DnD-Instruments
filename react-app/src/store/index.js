import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import searchReducer from "./search"
import modalReducer from "./modal"
import characterReducer from "./character"
import sessionReducer from "./session";

const rootReducer = combineReducers({
    search: searchReducer,
    modal: modalReducer,
    character: characterReducer,
    session: sessionReducer,
})

let enhancer

if (process.env.NODE_ENV === "production") {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require("redux-logger").default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger))
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore