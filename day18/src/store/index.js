
import { createStore, combineReducers } from 'redux';
import trainerReducer from '../reducers/trainerReducer';

const rootReducer = combineReducers({
  trainers: trainerReducer,
});

const store = createStore(rootReducer);

export default store;
