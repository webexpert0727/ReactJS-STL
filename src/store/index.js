import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const middlewares = [
  thunk
];

if (process.env.NODE_ENV !== "production") {
  // middlewares.push(logger);
}

const enhancers = [applyMiddleware(...middlewares)];


export default function configureStore(preloadedState) {
    const store = createStore(rootReducer, preloadedState, compose(...enhancers));
    return store;
}