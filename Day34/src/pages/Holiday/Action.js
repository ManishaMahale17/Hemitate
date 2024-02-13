import * as actionType from './Type'
import {Get, Delete, Post, Put} from '../../service/HttpService';
import {urls} from '../../utils/urls';

// fetch data
export function getHolidays(){
    return (dispatch) => {
        dispatch(getHolidayRequest());
            
        Get(`${urls.holidays}`)
        .then((response)=>{
            console.log((response.data))
            dispatch(getHolidaySuccess(response.data))
            
        }).catch((error)=>{
            dispatch(getHolidayError(error.message))
        });
    }
}

function getHolidayRequest(){
    return({
        type:actionType.GET_HOLIDAYS_REQUEST
    })
}

function getHolidaySuccess(data){
    return({
        type:actionType.GET_HOLIDAYS_SUCCESS,
        payload:data
    })
}

 function getHolidayError(error){
    return({
        type:actionType.GET_HOLIDAYS_ERROR,
        payload:error
    })
}

//Delete data with id
export function getDeleteHolidayRequest() {
    return {
        type: actionType.DELETE_HOLIDAY_REQUEST
    }
}
export function getDeleteHolidaySuccess(id) {
    return {
        type: actionType.DELETE_HOLIDAY_SUCCESS,
        payload: {id}
    }
}
export function getDeleteHolidayError(error) {
    return ({
        type: actionType.DELETE_HOLIDAY_ERROR,
        payload: error
    })
}

export function deleteHoliday(id) {

    return (dispatch) => {
        // if (window.confirm(`Are You Sure Want To Delete Data?`)) {
            dispatch(getDeleteHolidayRequest());
            Delete(`${urls.holidays}/${id}`)
                .then((response) => {                    
                    window.alert("Data Deleted SuccessFully !")
                    // getHolidays();
                    dispatch(getDeleteHolidaySuccess(id))
                }).catch((error) => {
                  
                    dispatch(getDeleteHolidayError(error.message))
                });
        // }

    }
};



//Add data

export function addHolidayRequest() {
    return {
        type: actionType.POST_HOLIDAY_REQUEST
    };
}

export function addHolidaySuccess(data) {
    return {
        type: actionType.POST_HOLIDAY_SUCCESS,
        payload: data
    };
}

export function addHolidayError(error) {
    return {
        type: actionType.POST_HOLIDAY_ERROR,
        payload: error
    };
}

export function addHoliday(holidayData) {
    return (dispatch) => {
        dispatch(addHolidayRequest());
        Post(urls.holidays, holidayData)
            .then((response) => {
                dispatch(addHolidaySuccess(response.data));
                // dispatch(getTrainers());
                window.alert("Holiday Added Successfully!");
            })
            .catch((error) => {
                dispatch(addHolidayError(error.message));
            });
    };
}


//single get 
export function getSingleHolidayRequest() {
    return {
        type:  actionType.GET_SINGLE_HOLIDAY_REQUEST,
    };
}

export function getSingleHolidaySuccess(data) {
    return {
        type: actionType.GET_SINGLE_HOLIDAY_SUCCESS,
        payload: data,
    };
}

export function getSingleHolidayError(error) {
    return {
        type: actionType.GET_SINGLE_HOLIDAY_ERROR,
        payload: error,
    };
}




export function getSingleHoliday(holidayId) {
    return (dispatch) => {
        dispatch(getSingleHolidayRequest());
        Get(`${urls.holidays}/${holidayId}`)
            .then((response) => {
                dispatch(getSingleHolidaySuccess(response.data));
            })
            .catch((error) => {
                dispatch(getSingleHolidayError(error.response));
            });
    };
}



//put operation
export function editHolidayRequest() {
    return {
        type: actionType.PUT_HOLIDAY_REQUEST
    };
}

export function editHolidaySuccess(data) {
    return {
        type: actionType.PUT_HOLIDAY_SUCCESS,
        payload: data
    };
}

export function editHolidayError(error) {
    return {
        type: actionType.PUT_HOLIDAY_ERROR,
        payload: error
    };
}


export function editHoliday(editHolidayData) {
    const { id } = editHolidayData;
    return (dispatch) => {
        dispatch(editHolidayRequest());
        Put(`${urls.holidays}/${id}`, editHolidayData)
            .then((response) => {
                dispatch(editHolidaySuccess(response.data));
            })
            .catch((error) => {
                dispatch(editHolidayError(error.response));
            });
    };
}

