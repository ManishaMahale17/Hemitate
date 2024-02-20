import * as actionType from '../Batches/Type';
import { Get, Delete, Post, Put } from '../../service/HttpService';
import { urls } from '../../utils/urls';

//================================== Get Operation=====================================//
export function getBatchesRequest() {
    return {
        type: actionType.GET_BATCHES_REQUEST
    }
}
export function getBatchesSuccess(data) {
    return ({
        type: actionType.GET_BATCHES_SUCCESS,
        payload: data
    })
}
export function getBatchesError(error) {
    return ({
        type: actionType.GET_BATCHES_ERROR,
        payload: error
    })
}
export function getBatches() {
    return (dispatch) => {
        dispatch(getBatchesRequest)
        Get(`${urls.Batches}`)
            .then((response) => {
                console.log((response.data));
                dispatch(getBatchesSuccess(response.data))
            }).catch((error) => {
                dispatch(getBatchesError(error.response))
            });
    }
}

// ==================================== Get operation end=======================================//

//======================================delete Operation========================================//
export function DeleteBatchesRequest() {
    return {
        type: actionType.DELETE_BATCH_REQUEST,
    }
}
export function deleteBatchesSuccess(data) {
    return ({
        type: actionType.DELETE_BATCH_SUCCESS,
        payload: data
    })
}
export function deleteBatchesError(error) {
    return ({
        type: actionType.DELETE_BATCH_ERROR,
        payload: error
    })
}
export function deleteBatches(id) {
    return (dispatch) => {
        if (window.confirm("Are you Sure Want to delete")) {
            Delete(`${urls.Batches}/${id}`)
                .then((response) => {
                    window.alert("Batch Deleted Succesfully😊")
                    console.log((response.data));
                    //dispatch(deleteBatchesSuccess(response.data))
                    getBatches();
                }).catch((error) => {
                    console.log(error);
                    dispatch(deleteBatchesError(error.response))
                });
        }

    }
}
//================================Delete operation end==============================//
// ===============================Add operation Start=======================================//
export function addBatchRequest() {
    return {
        type: actionType.POST_BATCH_REQUEST
    };
}
export function addBatchSuccess(data) {
    return {
        type: actionType.POST_BATCH_SUCCESS,
        payload: data
    };
}
export function addBatchError(error) {
    return {
        type: actionType.POST_BATCH_ERROR,
        payload: error
    };
}
export function addBatch(batchData) {
    return (dispatch) => {
        dispatch(addBatchRequest());
        Post(urls.Batches, batchData)
            .then((response) => {
                dispatch(addBatchSuccess(response.data));
                // dispatch(getTrainers());
                window.alert("Batch Added Successfully!");
            })
            .catch((error) => {
                dispatch(addBatchError(error.response));
            });
    };
}
//===================================Add operation End========================================//
//====================================edit operation start========================================================//
//single get 
export function getSingleBatchRequest() {
    return {
        type: actionType.GET_SINGLE_BATCH_REQUEST,
    };
}
export function getSingleBatchSuccess(data) {
    return {
        type: actionType.GET_SINGLE_BATCH_SUCCESS,
        payload: data,
    };
}
export function getSingleBatchError(error) {
    return {
        type: actionType.GET_SINGLE_BATCH_ERROR,
        payload: error,
    };
}
export function getSingleBatch(batchId) {
    return (dispatch) => {
        dispatch(getSingleBatchRequest());
        Get(`${urls.Batches}/${batchId}`)
            .then((response) => {
                dispatch(getSingleBatchSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getSingleBatchError(error.response));
            });
    };
}
//put operation
export function editBatchRequest() {
    return {
        type: actionType.PUT_BATCH_REQUEST
    };
}
export function editBatchSuccess(data) {
    return {
        type: actionType.PUT_BATCH_SUCCESS,
        payload: data
    };
}
export function editBatchError(error) {
    return {
        type: actionType.PUT_BATCH_ERROR,
        payload: error
    };
}
export function editBatch(editBatchData, id) {
    return (dispatch) => {
        // Fetch the single branch data
        dispatch(getSingleBatch(id));
        dispatch(editBatchRequest());
        Put(`${urls.Batches}/${id}`, editBatchData)
            .then((response) => {
                dispatch(editBatchSuccess(response.data));
            })
            .catch((error) => {
                dispatch(editBatchError(error.response));
            });
    };
}