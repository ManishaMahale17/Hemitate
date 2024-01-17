import * as constants from "../Trainers/Type";

const initialState = {
  loading:false,
  trainers: [], 
  Trainer: {},
  singleTrainer: null,
  error:null
}

export default function TrainerReducer(state = initialState, action) {
  switch (action.type) {
    //Get Reducer
    case constants.GET_TRAINERS_REQUEST: {
      return { ...state, loading: true };
    }
    case constants.GET_TRAINERS_SUCCESS: {
      const data = action.payload;
      return { ...state, trainers: [...data] };
    }
    case constants.GET_TRAINERS_ERROR: {
      return { ...state, error: action.payload };
    }
    //Delete Reducer
    case constants.DELETE_TRAINER_REQUEST: {
      return { ...state, loading: true };
    }
    case constants.DELETE_TRAINER_SUCCESS: {
      const data = action.payload;
      return { ...state, trainers: [...data] };
    }

    
    case constants.DELETE_TRAINER_ERROR: {
      return { ...state, error: action.payload };
    }
    //Post reducer
    case constants.POST_TRAINER_REQUEST: {
      return { ...state, loading: true };
    }
    case constants.POST_TRAINER_SUCCESS: {
      const data = action.payload;
      return { ...state, trainers: [...data] };
    }
    case constants.POST_TRAINER_ERROR: {
      return { ...state, error: action.payload };
    }
  

//get single Trainer
            
case constants.GET_SINGLE_TRAINER_REQUEST:
    return { ...state, loading: true };

    case constants.GET_SINGLE_TRAINER_SUCCESS:
    return {
        ...state,
        singleTrainer: action.payload,
        loading: false,
        error: null
    };

case constants.GET_SINGLE_TRAINER_ERROR:
    return { ...state, error: action.payload, loading: false }



     //Put reducer

      case constants.PUT_TRAINER_REQUEST:
        {
            return { ...state, loading: true };
        }

    case constants.PUT_TRAINER_SUCCESS:
        {
            const data = action.payload;
            return { ...state, trainers: [...data], loading: false };
        }

    case constants.PUT_TRAINER_ERROR:
        {
            return { ...state, error: action.payload, loading: false };
        }


    default: {
      return state;
    }
  }
}
