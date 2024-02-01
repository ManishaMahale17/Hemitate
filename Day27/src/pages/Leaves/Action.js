import * as actionType from './Type'
import {Get} from '../../service/HttpService';
import { Delete } from '../../service/HttpService';
import {Post} from '../../service/HttpService';
import {urls} from '../../utils/urls';
import { Put } from '../../service/HttpService';

//Get data
export function getLeaves(){
    return (dispatch)=>{
        dispatch(getLeaveRequest());    
        Get(`${urls.leaves}`)
        .then((response)=>{
            console.log((response.data))
            dispatch(getLeaveSuccess(response.data))
            
        }).catch((error)=>{
            dispatch(getLeaveError(error.response))
        });
    }
}
export function getLeaveRequest(payload){
    return({
        type:actionType.GET_LEAVES_REQUEST
    })
}
  function getLeaveSuccess(data){
    return({
        type:actionType.GET_LEAVES_SUCCESS,
        payload:data
    })
}

 function getLeaveError(error){
    return({
        type:actionType.GET_LEAVES_ERROR,
        payload:error
    })
}
//Delete data with id
export function getDeleteLeaveRequest() {
    return {

        type: actionType.DELETE_LEAVE_REQUEST
    }
}
export function getDeleteLeaveSuccess() {
    return {
        type: actionType.DELETE_LEAVE_SUCCESS
    }
}
export function getDeleteLeaveError(error) {
    return ({
        type: actionType.DELETE_LEAVE_ERROR,
        payload: error
    })
}

export function deleteLeave(id) {

    return (dispatch) => {
        if (window.confirm(`Are You Sure Want To Delete Data?`)) {
            
            Delete(`${urls.leaves}/${id}`)
                .then(() => {
                    
                    window.alert("Data Deleted SuccessFully !")
                    getLeaves();

                }).catch((error) => {
                  
                    dispatch(getDeleteLeaveError(error.message))
                });
        }

    }
};



//Add data

export function addLeaveRequest() {
    return {
        type: actionType.POST_LEAVE_REQUEST
    };
}

export function addLeaveSuccess(data) {
    return {
        type: actionType.POST_LEAVE_SUCCESS,
        payload: data
    };
}

export function addLeaveError(error) {
    return {
        type: actionType.POST_LEAVE_ERROR,
        payload: error
    };
}

export function addLeave(leaveData) {
    return (dispatch) => {
        dispatch(addLeaveRequest());
        Post(urls.leaves, leaveData)
            .then((response) => {
                dispatch(addLeaveSuccess(response.data));
                // dispatch(getTrainers());
                window.alert("Leave Added Successfully!");
            })
            .catch((error) => {
                dispatch(addLeaveError(error.response));
            });
    };
}


//single get 
export function getSingleLeaveRequest() {
    return {
        type:  actionType.GET_SINGLE_LEAVE_REQUEST,
    };
}

export function getSingleLeaveSuccess(data) {
    return {
        type: actionType.GET_SINGLE_LEAVE_SUCCESS,
        payload: data,
    };
}

export function getSingleLeaveError(error) {
    return {
        type: actionType.GET_SINGLE_LEAVE_ERROR,
        payload: error,
    };
}




export function getSingleLeave(leaveId) {
    return (dispatch) => {
        dispatch(getSingleLeaveRequest());
        Get(`${urls.leaves}/${leaveId}`)
            .then((response) => {
                dispatch(getSingleLeaveSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getSingleLeaveError(error.response));
            });
    };
}



//put operation
export function editLeaveRequest() {
    return {
        type: actionType.PUT_LEAVE_REQUEST
    };
}

export function editLeaveSuccess(data) {
    return {
        type: actionType.PUT_LEAVE_SUCCESS,
        payload: data
    };
}

export function editLeaveError(error) {
    return {
        type: actionType.PUT_LEAVE_ERROR,
        payload: error
    };
}


export function editLeave(editLeaveData, id) {
    return (dispatch) => {
        // Fetch the single branch data
        dispatch(getSingleLeave(id));

        dispatch(editLeaveRequest());
        Put(`${urls.leaves}/${id}`, editLeaveData)
            .then((response) => {
                dispatch(editLeaveSuccess(response.data));
                // window.alert("Trainer Updated Successfully!");
            })
            .catch((error) => {
                dispatch(editLeaveError(error.response));
            });
    };
}

