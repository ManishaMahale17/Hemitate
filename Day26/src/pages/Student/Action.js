import * as actionType from '../Student/Type';
import {Get,Delete,Post,Put} from '../../service/HttpService'
import { urls}  from '../../utils/urls'
import { Navigate} from 'react-router-dom';

//===========================================get students==============================================//
export function getStudents(){
    return(dispatch)=>{
        Get(`${urls.students}`)
        .then((response)=>{
            console.log((response.data));
            dispatch(getStudentSuccess(response.data));
        }).catch((error)=>{
            dispatch(getStudentError(error.response))
        });
    }
}
export function getStudentSuccess(data){
    return({
        type:actionType.GET_STUDENTS_SUCCESS,
        payload:data
    })
}

export function getStudentError(error){
    return({
        type:actionType.GET_STUDENTS_ERROR,
        payload:error
    })
}

//=========================================================Delete Students=============================================//

export function deleteStudents(id){
 return (dispatch)=>{
    if(window.confirm("Are you Sure Want To Delete")){
        Delete(`${urls.students}/${id}`)
         .then((response)=>{
             window.alert("Data Deleted")
             console.log(response.data)
             getStudents();
         }).catch((error)=>{
            //  console.log(error)
             dispatch(deleteStudentError(error.response))
         })
       }
 }
}
 export function deleteStudentRequest(){
    return ({
        type:actionType.DELETE_STUDENT_REQUEST
    })
}
export function deleteStudentSuccess(data){
    return({
        type:actionType.DELETE_STUDENT_SUCCESS,
        payload:data
    })
}
 export function deleteStudentError(error){
    return({
        type:actionType.DELETE_STUDENT_ERROR,
        payload:error
    })
}
//===============================Add Students===========================================//
//Add data
export function addStudent(studentData) {
    return (dispatch) => {
        dispatch(addStudentRequest());
        Post(urls.students, studentData)
            .then((response) => {
                dispatch(addStudentSuccess(response.data));
                // dispatch(getTrainers());
                window.alert("Student Added Successfully!");
            })
            .catch((error) => {
                dispatch(addStudentError(error.response));
            });
    };
}

export function addStudentRequest() {
    return {
        type: actionType.POST_STUDENT_REQUEST
    };
}

export function addStudentSuccess(data) {
    return {
        type: actionType.POST_STUDENT_SUCCESS,
        payload: data
    };
}

export function addStudentError(error) {
    return {
        type: actionType.POST_STUDENT_ERROR,
        payload: error
    };
}

//=============================EDIT SINGLE STUDENT=====================================================//

   export function getSingleStudentRequest(){
      return ({
          type:actionType.GET_SINGLE_STUDENT_REQUEST
      })
  }
  export function getSingleStudentSuccess(data){
      return({
          type:actionType.GET_SINGLE_STUDENT_SUCCESS,
          payload:data
      })
  }
   export function getSingleStudentError(error){
      return({
          type:actionType.GET_SINGLE_STUDENT_ERROR,
          payload:error
      })
  }
 


  export function getSingleStudent(studentId) {
    return (dispatch) => {
        dispatch(getSingleStudentRequest());
        Get(`${urls.students}/${studentId}`)
            .then((response) => {
                dispatch(getSingleStudentSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getSingleStudentError(error.response));
            });
    };
}

//===================================EDIT STUDENT ===============================================//

//put operation
export function editStudentRequest() {
    return {
        type: actionType.PUT_STUDENT_REQUEST
    };
}

export function editStudentSuccess(data) {
    return {
        type: actionType.PUT_STUDENT_SUCCESS,
        payload: data
    };
}

export function editStudentError(error) {
    return {
        type: actionType.PUT_STUDENT_ERROR,
        payload: error
    };
}


export function editStudent(UpdatedData,id ) {
    return (dispatch) => {
        // Fetch the single branch data
        dispatch(getSingleStudent(id));

        dispatch(editStudentRequest());
        Put(`${urls.students}/${id}`, UpdatedData)
            .then((response) => {
                dispatch(editStudentSuccess(response.data));
            })
            .catch((error) => {
                dispatch(editStudentError(error.response));
            });
    };
}


