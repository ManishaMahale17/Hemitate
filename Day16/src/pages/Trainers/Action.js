import * as actionType from './Type'
import {Get} from '../../service/HttpService';
import {urls} from '../../utils/urls';

export function getTrainers(){
    return (dispatch)=>{
        // create requet
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