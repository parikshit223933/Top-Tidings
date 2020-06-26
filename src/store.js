import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'; //for async process in redux
import reducer from './reducer/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //use redux dev tool
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk))); //use with thunk
//It is high order function since take function as an arguement 

export default store