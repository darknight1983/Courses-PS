import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./Reducers";

// Middleware that will warn us if we accidentally mutate any state in the redux store!
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'



const configureStore = (initialState) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // adds support for Redux devtools
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
};

export default configureStore;

