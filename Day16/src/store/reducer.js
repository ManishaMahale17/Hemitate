import { combineReducers } from "redux";
import TrainerReducer from "../pages/Trainers/Reducer";


const rootReducer = combineReducers({
    TrainerStore:TrainerReducer,
});


export default rootReducer;