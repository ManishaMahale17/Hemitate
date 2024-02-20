import * as constants from "../TrainerLeaves/Type";

const initialState = {
  loading:false,
  trainerleaves: [], 
  trainerLeave: {},
  singleLeave: null,
  error:null
}

export default function TrainerLeaveReducer(state = initialState, action) {
  switch (action.type) {
    //Get Reducer
    case constants.GET_TRAINERLEAVES_REQUEST: {
      return { ...state, loading: true };
    }

    case constants.GET_TRAINERLEAVES_SUCCESS: {
      return { ...state, trainerleaves: [...action.payload], loading: false };
    }

    case constants.GET_TRAINERLEAVES_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }

    case constants.DELETE_TRAINERLEAVE_REQUEST:
      return { ...state, loading: true };

    case constants.DELETE_TRAINERLEAVE_SUCCESS:
      return { ...state, trainerleaves: state.trainerleaves.filter(lv => lv.id !== action.payload.id), loading: false };

    case constants.DELETE_TRAINERLEAVE_ERROR:
      return { ...state, loading: false, error: action.payload };

    //Post reducer
    case constants.POST_TRAINERLEAVE_REQUEST: {
      return { ...state, loading: true };
    }
    case constants.POST_TRAINERLEAVE_SUCCESS: {
      let data = state.trainerleaves;
      data.push(action.payload);
      return { ...state, trainerleaves: [...data], loading: false };
    }

    case constants.POST_TRAINERLEAVE_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }
  

//get single Trainer
            
case constants.GET_SINGLE_TRAINERLEAVE_REQUEST:
    return { ...state, loading: true };

    case constants.GET_SINGLE_TRAINERLEAVE_SUCCESS:
    return {
        ...state,
        singleLeave: action.payload,
        loading: false,
        error: null
    };

case constants.GET_SINGLE_TRAINERLEAVE_ERROR:
    return { ...state, error: action.payload, loading: false }



     //Put reducer

      case constants.PUT_TRAINERLEAVE_REQUEST:
        {
            return { ...state, loading: true };
        }

    case constants.PUT_TRAINERLEAVE_SUCCESS:
        {
          let draft = state;
            const data = action.payload;
            // let holidays = [...data];
            const index = draft.trainerleaves.findIndex(lv => lv.id === data.id) || -1;
            
            if(index > -1){
              // draft.holidays.splice(index, 1,data);
              draft.trainerleaves[index] = data;
            }
            console.log("on update leave")
            return { ...state, trainerleaves:[...draft.trainerleaves], loading: false };
        }

    case constants.PUT_TRAINERLEAVE_ERROR:
        {
            return { ...state, error: action.payload, loading: false };
        }


    default: {
      return state;
    }
  }
}
