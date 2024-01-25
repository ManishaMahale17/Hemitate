import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard/container/DashBoard";
import SignIn from "./pages/DashBoard/container/SignIn";
import SignUp from "./pages/DashBoard/container/SignUp";
import { Provider } from "react-redux";
import store from "./store/store";
import UserData from "./pages/DashBoard/container/UserData";
import CarouselDash from "./pages/DashBoard/container/CarouselDash";
import EditUser from "./pages/DashBoard/container/EditUser";
import StudentForm from "./page/Student/container/StudentForm";
import StudentList from "./page/Student/container/StudentList";
import EditForm from "./page/Student/container/EditForm";
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


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* <StudentList/> */}
            <Route path="" element={<StudentList />}></Route>
            <Route path="studentlist" element={<StudentList />}></Route>
            <Route path="studentform" element={<StudentForm />}></Route>
            <Route path="editform/:id" element={<EditForm />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="edit/:id" element={<EditUser />}></Route>
            <Route path="/" element={<DashBoard />}>
              <Route path="user" element={<UserData />}></Route>
            </Route>
            <Route path="" element={<Course />}></Route>
            <Route path="courseform" element={<CourseForm />}></Route>
            <Route path="courseedit/:id" element={<CourseEditForm />}></Route>
            <Route path="" element={<Batches></Batches>}></Route>
           <Route path="batchlist" element={<Batches></Batches>}></Route>  
          <Route path="addbatches" element={<BatchesForm/>}></Route>
          <Route path="editbatches/:id" element={<BatchesEdit/>}></Route>
          <Route path="" element={<BranchList/>}></Route>
          <Route path="branchlist" element={<BranchList/>}></Route>
          <Route path="branchform" element={<BranchForm/>}></Route>
          <Route path="branchedit/:id" element={<BranchEdit/>}></Route>
          <Route path="" element={<Trainer/>}/>
          <Route path="/add" element={<TrainerForm/>}/>  
          <Route path="/edit/:id" element={<TrainerEdit/>}/>
          </Routes>
        </BrowserRouter>
        {/* <UserData/> */}
      </div>
      </Provider>
  );
}

export default App;
