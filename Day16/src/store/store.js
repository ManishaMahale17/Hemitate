import {createStore,applyMiddleware,compose} from'redux';
import rootReducer from './reducer';
import { thunk } from 'redux-thunk';



const middleware =[thunk];
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
    
);

export default store;