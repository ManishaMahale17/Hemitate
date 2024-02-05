import { BrowserRouter,Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard/container/DashBoard";
import SignIn from "./pages/DashBoard/container/SignIn";
import SignUp from "./pages/DashBoard/container/SignUp";
import { Provider } from "react-redux";
import store from "./store/store";
import UserData from "./pages/DashBoard/container/UserData";
import EditUser from "./pages/DashBoard/container/EditUser";
import StudentForm from "./pages/Student/container/StudentForm";
import StudentList from "./pages/Student/container/StudentList";
import EditForm from "./pages/Student/container/EditForm";
import Course from "./pages/Course/container/Course";
import CourseForm from "./pages/Course/container/CourseForm";
import CourseEditForm from "./pages/Course/container/CourseEditForm";
import Batches from "./pages/Batches/container/Batches";
import BatchesForm from "./pages/Batches/container/BatchesForm";
import BatchesEdit from "./pages/Batches/container/BatchesEdit";
import BranchList from "./pages/Branch/container/BranchList";
import BranchForm from "./pages/Branch/container/BranchForm";
import BranchEdit from "./pages/Branch/container/BranchEdit";
import Trainer from "./pages/Trainers/container/Trainer";
import TrainerForm from "./pages/Trainers/container/TrainerForm";
import TrainerEdit from './pages/Trainers/container/TrainerEdit';
import ProtectRouting from "./component/ProtectRouting";
import StudentAtten from "./pages/Attendance/container/StudentAtten";
// import StdAddForm from "./pages/Attendance/container/StdAddForm";
import StdAddForm from './pages/Attendance/container/StdAddForm';
import StdEditForm from "./pages/Attendance/container/StdEditForm";
import Holiday from "./pages/Holiday/container/Holiday";
import HolidayForm from "./pages/Holiday/container/HolidayForm";
import Leaves from "./pages/Leaves/container/Leaves";
import LeaveForm from "./pages/Leaves/container/LeaveForm";



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>


            <Route path="" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>

            {/* Main Pages Routing */}
            
            <Route path="/dashboard" element={<DashBoard />}>
              <Route path="holidayForm" element={<HolidayForm/>}></Route>
              <Route path="leaveForm" element={<LeaveForm/>}></Route>
              <Route path="user" element={<ProtectRouting Component={UserData} />}></Route>
              <Route path="student" element={<ProtectRouting Component={StudentList} />}></Route>
              <Route path="course" element={<ProtectRouting Component={Course} />}></Route>
              <Route path="batch" element={<ProtectRouting Component={Batches} />}></Route>
              <Route path="branch" element={<ProtectRouting Component={BranchList} />}></Route>
              <Route path="trainer" element={<Trainer/>}/>
              <Route path="studentatte" element={<StudentAtten/>}></Route>
              <Route path="holiday" element={<Holiday/>}/>
              <Route path="leave" element={<Leaves/>}/>

              
            </Route>
            
            {/* User Routing */}

            <Route path="edit/:id" element={<EditUser />}></Route>


            {/* Student Routing */}
            {/* <Route path="studentlist" element={<StudentList />}></Route> */}
            <Route path="studentform" element={<StudentForm />}></Route>
            <Route path="editform/:id" element={<EditForm />}></Route>
            
            
            {/* Corse Routing */}
            <Route path="courseform" element={<CourseForm />}></Route>
            <Route path="courseedit/:id" element={<CourseEditForm />}></Route>
            
            {/* Batch Routing */}
            <Route path="batchlist" element={<Batches></Batches>}></Route>  
            <Route path="addbatches" element={<BatchesForm/>}></Route>
            <Route path="editbatches/:id" element={<BatchesEdit/>}></Route>

            {/* Branch Routing */}
            <Route path="branchlist" element={<BranchList/>}></Route>
            <Route path="branchform" element={<BranchForm/>}></Route>
            <Route path="branchedit/:id" element={<BranchEdit/>}></Route>

            {/* Trainer Routing */}
            <Route path="/add" element={<TrainerForm/>}/>  
            <Route path="/editTrainer/:id" element={<TrainerEdit/>}/>
            <Route path='*' element={<SignIn/>}></Route>

         {/* Holiday Routing */}
           <Route path="holiday" element={<Holiday/>}></Route>
            <Route path="/holidayForm" element={<HolidayForm/>}></Route>
          

              {/* Leaves Routing */}
           <Route path="leave" element={<Leaves/>}></Route>
            <Route path="/leaveForm" element={<LeaveForm/>}></Route>
           

            {/* Student Attendance Routing */}
          <Route path="studentatten" element={<StudentAtten/>}></Route>
          <Route path="StdAddForm" element={<StdAddForm/>}></Route>
          <Route path="/StdEditForm/:id" element={<StdEditForm/>}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
      </Provider>
  );
}

export default App;
