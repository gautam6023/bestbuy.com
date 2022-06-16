// import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
// import thunk from 'redux-thunk';
import rootreducer from "./main";

// create store here
export const store=createStore(rootreducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());