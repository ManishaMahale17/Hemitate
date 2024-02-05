import { combineReducers } from "redux";
import TrainerReducer from "../pages/Trainers/Reducer";
import BatchReducer from "../pages/Batches/Reducer";
import CourseReducer from "../pages/Course/Reducer";
import StudentReducer from "../pages/Student/Reducer";
import UserReducer from "../pages/DashBoard/Reducer";
import BranchReducer from "../pages/Branch/Reducer";
import StudentAttenReducer from "../pages/Attendance/Reducer";
import HolidayReducer from "../pages/Holiday/Reducer";
import LeaveReducer from "../pages/Leaves/Reducer";


const rootReducer = combineReducers({
  CourseStore: CourseReducer,
  studentStore: StudentReducer,
  userStore: UserReducer,
  BatchStore: BatchReducer,
  branchStore:BranchReducer,
  TrainerStore:TrainerReducer,
  studentAtteStore: StudentAttenReducer,
  HolidayStore:HolidayReducer,
  LeaveStore:LeaveReducer
})

export default rootReducer;
