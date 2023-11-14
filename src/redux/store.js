import { createStore } from 'redux'
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools(); // need for run Redux extension

const store = createStore(rootReducer, composeEnhancers);

export default store;