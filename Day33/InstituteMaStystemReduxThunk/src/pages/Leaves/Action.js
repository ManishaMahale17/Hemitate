import * as actionType from './Type'
import {Get, Delete, Post, Put} from '../../service/HttpService';
import {urls} from '../../utils/urls';

// fetch data
export function getLeaves(){
    return (dispatch) => {
        dispatch(getLeaveRequest());
            
        Get(`${urls.leaves}`)
        .then((response)=>{
            console.log((response.data))
            dispatch(getLeaveSuccess(response.data))
            
        }).catch((error)=>{
            dispatch(getLeaveError(error.message))
        });
    }
}

function getLeaveRequest(){
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
export function getDeleteLeaveSuccess(id) {
    return {
        type: actionType.DELETE_LEAVE_SUCCESS,
        payload: {id}
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
        // if (window.confirm(`Are You Sure Want To Delete Data?`)) {
            dispatch(getDeleteLeaveRequest());
            Delete(`${urls.leaves}/${id}`)
                .then((response) => {                    
                    window.alert("Data Deleted SuccessFully !")
                    // getHolidays();
                    dispatch(getDeleteLeaveSuccess(id))
                }).catch((error) => {
                  
                    dispatch(getDeleteLeaveError(error.message))
                });
        // }

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

export function addLeave(LeaveData) {
    return (dispatch) => {
        dispatch(addLeaveRequest());
        Post(urls.leaves, LeaveData)
            .then((response) => {
                dispatch(addLeaveSuccess(response.data));
                // dispatch(getTrainers());
                window.alert("Leave Added Successfully🙂!");
            })
            .catch((error) => {
                dispatch(addLeaveError(error.message));
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


export function editLeave(editLeaveData) {
    const { id } = editLeaveData;
    return (dispatch) => {
        dispatch(editLeaveRequest());
        Put(`${urls.leaves}/${id}`, editLeaveData)
            .then((response) => {
                dispatch(editLeaveSuccess(response.data));
            })
            .catch((error) => {
                dispatch(editLeaveError(error.response));
            });
    };
}

