// import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
// import thunk from 'redux-thunk';
import rootreducer from "./Card Reducer/main";
export const store=createStore(rootreducer, 

// create store here
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());