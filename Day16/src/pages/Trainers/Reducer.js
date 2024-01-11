import * as constants from '../Trainers/Type';

const initialState = {
    loading:false,
    trainers:[],
    error:null

}

export default function TrainerReducer(state = initialState,action){
    switch (action.type){
        case constants.GET_TRAINERS_REQUEST:{
            return {...state,loading:true}
        }
        case constants.GET_TRAINERS_SUCCESS:{
            const data = action.payload;
            return{...state,trainers:[...data]}
        } 
        case constants.GET_TRAINERS_ERROR:{
            return{...state,error:action.payload}
        }
      
        default:{
            return state;
        }
    }
}