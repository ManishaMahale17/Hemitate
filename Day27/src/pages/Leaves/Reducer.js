import * as constants from "../Leaves/Type";

const initialState = {
  loading:false,
  leaves: [], 
  leave: {},
  singleLeave: null,
  error:null
}

export default function LeaveReducer(state = initialState, action) {
  switch (action.type) {
    //Get Reducer
    case constants.GET_LEAVES_REQUEST: {
      return { ...state, loading: true };
    }
    case constants.GET_LEAVES_SUCCESS: {
      const data = action.payload;
      return { ...state, leaves: [...data] };
    }
    case constants.GET_LEAVES_ERROR: {
      return { ...state, error: action.payload };
    }
   // Delete Reducer
    case constants.DELETE_LEAVE_REQUEST: {
      return { ...state, loading: true };
    }
    case constants.DELETE_LEAVE_SUCCESS: {
      const data = action.payload;
      return { ...state, leaves: [...data] };
    }
  
    case constants.DELETE_LEAVE_ERROR: {
      return { ...state, error: action.payload };
    }
   

    //Post reducer
    case constants.POST_LEAVE_REQUEST: {
      return { ...state, loading: true };
    }
    case constants.POST_LEAVE_SUCCESS: {
      const data = action.payload;
      return { ...state, leaves: [...data] };
    }
    case constants.POST_LEAVE_ERROR: {
      return { ...state, error: action.payload };
    }
  

//get single Trainer
            
case constants.GET_SINGLE_LEAVE_REQUEST:
    return { ...state, loading: true };

    case constants.GET_SINGLE_LEAVE_SUCCESS:
    return {
        ...state,
        singleLeave: action.payload,
        loading: false,
        error: null
    };

case constants.GET_SINGLE_LEAVE_ERROR:
    return { ...state, error: action.payload, loading: false }



     //Put reducer

      case constants.PUT_LEAVE_REQUEST:
        {
            return { ...state, loading: true };
        }

    case constants.PUT_LEAVE_SUCCESS:
        {
            const data = action.payload;
            return { ...state, leaves: [...data], loading: false };
        }

    case constants.PUT_LEAVE_ERROR:
        {
            return { ...state, error: action.payload, loading: false };
        }


    default: {
      return state;
    }
  }
}
