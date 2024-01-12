import * as actionType from './Type'
import {Get} from '../../service/HttpService';
import { Delete } from '../../service/HttpService';
import {Post} from '../../service/HttpService';
import {urls} from '../../utils/urls';
import { Put } from '../../service/HttpService';

//Get data
export function getTrainers(){
    return (dispatch)=>{
        dispatch(getTrainerRequest());    
        Get(`${urls.trainers}`)
        .then((response)=>{
            console.log((response.data))
            dispatch(getTrainerSuccess(response.data))
            
        }).catch((error)=>{
            dispatch(getTrainerError(error.response))
        });
    }
}
export function getTrainerRequest(payload){
    return({
        type:actionType.GET_TRAINERS_REQUEST
    })
}
  function getTrainerSuccess(data){
    return({
        type:actionType.GET_TRAINERS_SUCCESS,
        payload:data
    })
}

 function getTrainerError(error){
    return({
        type:actionType.GET_TRAINERS_ERROR,
        payload:error
    })
}
//Delete data with id
export function getDeleteTrRequest() {
    return {
        type: actionType.DELETE_TRAINER_REQUEST
    }
}
export function getDeleteTrSuccess() {
    return {
        type: actionType.DELETE_TRAINER_SUCCESS
    }
}
export function getDeleteTrError(error) {
    return ({
        type: actionType.DELETE_TRAINER_ERROR,
        payload: error
    })
}

export function deleteTrainer(id) {

    return (dispatch) => {
        if (window.confirm(`Are You Sure Want To Delete Data?`)) {
            //  dispatch(getDeleteStdRequest());
            Delete(`${urls.trainers}/${id}`)
                .then(() => {
                    //  dispatch(getDeleteStdSuccess());
                    window.alert("Data Deleted SuccessFully !")
                    getTrainers();

                }).catch((error) => {
                    //request for failure
                    dispatch(getDeleteTrError(error.message))
                });
        }

    }
};
//Add data

export function addTrainerRequest() {
    return {
        type: actionType.POST_TRAINER_REQUEST
    };
}

export function addTrainerSuccess(data) {
    return {
        type: actionType.POST_TRAINER_SUCCESS,
        payload: data
    };
}

export function addTrainerError(error) {
    return {
        type: actionType.POST_TRAINER_ERROR,
        payload: error
    };
}

export function addTrainer(trainerData) {
    return (dispatch) => {
        dispatch(addTrainerRequest());
        Post(urls.trainers, trainerData)
            .then((response) => {
                dispatch(addTrainerSuccess(response.data));
                // dispatch(getTrainers());
                window.alert("Trainer Added Successfully!");
            })
            .catch((error) => {
                dispatch(addTrainerError(error.response));
            });
    };
}

// Edit Trainer actions
export function editTrainerRequest() {
    return {
        type: actionType.PUT_TRAINER_REQUEST
    };
}

export function editTrainerSuccess(data) {
    return {
        type: actionType.PUT_TRAINER_SUCCESS,
        payload: data
    };
}

export function editTrainerError(error) {
    return {
        type: actionType.PUT_TRAINER_ERROR,
        payload: error
    };
}

export function editTrainer(id, updatedData) {
    return (dispatch) => {
        dispatch(editTrainerRequest());
        Put(`${urls.trainers}/${id}`, updatedData)
            .then((response) => {
                dispatch(editTrainerSuccess(response.data));
                // dispatch(getTrainers());
                window.alert("Trainer Edited Successfully!");
            })
            .catch((error) => {
                dispatch(editTrainerError(error.response));
            });
    };
}
