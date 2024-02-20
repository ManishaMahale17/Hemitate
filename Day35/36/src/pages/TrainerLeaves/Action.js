import * as actionType from './Type'
import {Get, Delete, Post, Put} from '../../service/HttpService';
import {urls} from '../../utils/urls';

// fetch data
function getTrLeaveRequest(){
    return({
        type:actionType.GET_TRAINERLEAVES_REQUEST
    })
}

function getTrLeaveSuccess(data){
    return({
        type:actionType.GET_TRAINERLEAVES_SUCCESS,
        payload:data
    })
}

 function getTrLeaveError(error){
    return({
        type:actionType.GET_TRAINERLEAVES_ERROR,
        payload:error
    })
}

export function getTrLeaves(){
    return (dispatch) => {
        dispatch(getTrLeaveRequest());
            
        Get(`${urls.trainerleaves}`)
        .then((response)=>{
            console.log((response.data))
            dispatch(getTrLeaveSuccess(response.data))
            
        }).catch((error)=>{
            dispatch(getTrLeaveError(error.message))
        });
    }
}


//Delete data with id
export function getDeleteTrLeaveRequest() {
    return {
        type: actionType.DELETE_TRAINERLEAVE_REQUEST
    }
}
export function getDeleteTrLeaveSuccess(id) {
    return {
        type: actionType.DELETE_TRAINERLEAVE_SUCCESS,
        payload: {id}
    }
}
export function getDeleteTrLeaveError(error) {
    return ({
        type: actionType.DELETE_TRAINERLEAVE_ERROR,
        payload: error
    })
}

export function deleteTrLeave(id) {

    return (dispatch) => {
        // if (window.confirm(`Are You Sure Want To Delete Data?`)) {
            dispatch(getDeleteTrLeaveRequest());
            Delete(`${urls.trainerleaves}/${id}`)
                .then((response) => {                    
                    window.alert("Data Deleted SuccessFully !")
                    // getHolidays();
                    dispatch(getDeleteTrLeaveSuccess(id))
                }).catch((error) => {
                  
                    dispatch(getDeleteTrLeaveError(error.message))
                });
        // }

    }
};



//Add data

export function addTrLeaveRequest() {
    return {
        type: actionType.POST_TRAINERLEAVE_REQUEST
    };
}

export function addTrLeaveSuccess(data) {
    return {
        type: actionType.POST_TRAINERLEAVE_SUCCESS,
        payload: data
    };
}

export function addTrLeaveError(error) {
    return {
        type: actionType.POST_TRAINERLEAVE_ERROR,
        payload: error
    };
}

export function addTrLeave(LeaveData) {
    return (dispatch) => {
        dispatch(addTrLeaveRequest());
        Post(urls.trainerleaves, LeaveData)
            .then((response) => {
                dispatch(addTrLeaveSuccess(response.data));
                // dispatch(getTrainers());
                window.alert("Leave Added Successfully🙂!");
            })
            .catch((error) => {
                dispatch(addTrLeaveError(error.message));
            });
    };
}


//single get 
export function getSingleTrLeaveRequest() {
    return {
        type:  actionType.GET_SINGLE_TRAINERLEAVE_REQUEST,
    };
}

export function getSingleTrLeaveSuccess(data) {
    return {
        type: actionType.GET_SINGLE_TRAINERLEAVE_SUCCESS,
        payload: data,
    };
}

export function getSingleTrLeaveError(error) {
    return {
        type: actionType.GET_SINGLE_TRAINERLEAVE_ERROR,
        payload: error,
    };
}




export function getSingleTrLeave(leaveId) {
    return (dispatch) => {
        dispatch(getSingleTrLeaveRequest());
        Get(`${urls.trainerleaves}/${leaveId}`)
            .then((response) => {
                dispatch(getSingleTrLeaveSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getSingleTrLeaveError(error.response));
            });
    };
}



//put operation
export function editTrLeaveRequest() {
    return {
        type: actionType.PUT_TRAINERLEAVE_REQUEST
    };
}

export function editTrLeaveSuccess(data) {
    return {
        type: actionType.PUT_TRAINERLEAVE_SUCCESS,
        payload: data
    };
}

export function editTrLeaveError(error) {
    return {
        type: actionType.PUT_TRAINERLEAVE_ERROR,
        payload: error
    };
}


export function editTrLeave(editLeaveData) {
    const { id } = editLeaveData;
    return (dispatch) => {
        dispatch(editTrLeaveRequest());
        Put(`${urls.trainerleaves}/${id}`, editLeaveData)
            .then((response) => {
                dispatch(editTrLeaveSuccess(response.data));
            })
            .catch((error) => {
                dispatch(editTrLeaveError(error.response));
            });
    };
}

