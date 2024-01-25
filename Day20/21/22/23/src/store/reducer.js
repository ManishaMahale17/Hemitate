import { combineReducers } from "redux";
import TrainerReducer from "../pages/Trainers/Reducer";
import BatchReducer from "../pages/Batches/Reducer";
import CourseReducer from "../pages/Course/Reducer";
import StudentReducer from "../page/Student/Reducer";
import UserReducer from "../pages/DashBoard/Reducer";
import BranchReducer from "../pages/Branch/Reducer";


const rootReducer = combineReducers({
  CourseStore: CourseReducer,
  studentStore: StudentReducer,
  userStore: UserReducer,
  BatchStore: BatchReducer,
  branchStore:BranchReducer,
  TrainerStore:TrainerReducer,

});

export default rootReducer;
