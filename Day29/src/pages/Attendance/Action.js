import * as actiontype from './Type'
import { urls } from '../../utils/urls';
import { Delete, Get, Post, Put } from '../../service/HttpService';

// ==================================For Get Data=====================

export function getStudentRequest() {
    return {
        type: actiontype.GET_ASTUDENTS_REQUEST
    }
}
export function getStudentSuccess(data) {
    return ({
        type: actiontype.GET_ASTUDENTS_SUCCESS,
        payload: data
    })
}
export function getStudentError(error) {
    return ({
        type: actiontype.GET_ASTUDENTS_ERROR,
        payload: error
    })
}
export function getStudentAtten() {
    return (dispatch) => {
        dispatch(getStudentRequest)
        Get(`${urls.StudentDetails}`).then((response) => {
            console.log(getStudentSuccess(response.data))
            //request for success
            dispatch(getStudentSuccess(response.data))
        }).catch((error) => {
            //request for failure
            dispatch(getStudentError(error.response))
        });
    }
};

//===================================For Delete Data=====================

export function getDeleteStdRequest() {
    return {
        type: actiontype.DELETE_ASTUDENT_REQUEST
    }
}
export function getDeleteStdSuccess() {
    return {
        type: actiontype.DELETE_ASTUDENT_SUCCESS
    }
}
export function getDeleteStdError(error) {
    return ({
        type: actiontype.DELETE_ASTUDENT_ERROR,
        payload: error
    })
}

export function getDeletStudents(id, count) {

    return (dispatch) => {
        if (window.confirm(`Are You Sure Want To Delete Data With Id :${id}`)) {
            Delete(`${urls.StudentDetails}/${id}`).then(() => {
                    window.alert("Data Deleted SuccesFully !")
                }).catch((error) => {
                    dispatch(getDeleteStdError(error.message))
                });
        }

    }
};
// ==================================For Add Data======================
export function getAddStdRequest() {
    return {
        type: actiontype.PUT_ASTUDENT_REQUEST
    }
}
export function getAddStdSuccess(data) {
    return ({
        type: actiontype.PUT_ASTUDENT_SUCCESS,
        payload: data
    })
}

export function getAddStdError(error) {
    return ({
        type: actiontype.PUT_ASTUDENT_ERROR,
        payload: error
    })
}



export function getAddStudents(getStudentData) {
    return (dispatch) => {
        dispatch(getAddStdRequest())
        Post(urls.StudentDetails, getStudentData).then((response) => {
            window.alert('Data Added SuccesFully !')
            dispatch(getAddStdSuccess(response.data))
        }).catch((error) => {
            //request for failure
            dispatch(getStudentError(error.response))
        });
    }
};


// ==================================For Get Single Student Data ===================== 

export function SingleStdRequest() {
    return {
        type: actiontype.GET_SINGLESTUDENT_REQUEST
    };
}
export function SingleStdSuccess(data) {
    return {
        type: actiontype.GET_SINGLESTUDENT_SUCCESS,
        payload: data,
    }
}
export function SingleStdError(error) {
    return {
        type: actiontype.GET_SINGLESTUDENT_ERROR,
        payload: error
    }
}

export function getSingleStudent(stdId){
    return (dispatch) => {
        dispatch(SingleStdRequest());
        Get(`${urls.StudentDetails}/${stdId}`).then((response) => {
            // console.log(SingleStdSuccess(response.data))
            dispatch(SingleStdSuccess(response.data));
        }).catch((error) => {
            dispatch(SingleStdError(error.response));
        });
    };
}

// =========================Get Edit Std ==============

export function getEditStudents(UpdatedData, id){
    return (dispatch)=> {
        dispatch(getSingleStudent(id));
        dispatch(EditStdRequest());
        const url =`${urls.StudentDetails}/${id}`;//Correctly format the URL
        Put(url,UpdatedData)
        .then((response) => {
            dispatch(EditStdSuccess(response.data));
            window.alert("Student Details Edited Successfully");
        }).catch((error)=>{
            dispatch(EditStdError(error.response));
        });
    };
}

export function EditStdRequest() {
    return {
        type: actiontype.PUT_ASTUDENT_REQUEST
    }
}
export function EditStdSuccess(data) {
    return ({
        type: actiontype.PUT_ASTUDENT_SUCCESS,
        payload: data
    })
}
export function EditStdError(error) {
    return ({
        type: actiontype.PUT_ASTUDENT_ERROR,
        payload: error
    })
}

