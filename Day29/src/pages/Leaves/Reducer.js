import * as constants from "../Leaves/Type";

const initialState = {
  loading:false,
  leaves: [], 
  Leave: {},
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
      return { ...state, leaves: [...action.payload], loading: false };
    }

    case constants.GET_LEAVES_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }

    case constants.DELETE_LEAVE_REQUEST:
      return { ...state, loading: true };

    case constants.DELETE_LEAVE_SUCCESS:
      return { ...state, leaves: state.leaves.filter(lv => lv.id !== action.payload.id), loading: false };

    case constants.DELETE_LEAVE_ERROR:
      return { ...state, loading: false, error: action.payload };

    //Post reducer
    case constants.POST_LEAVE_REQUEST: {
      return { ...state, loading: true };
    }
    case constants.POST_LEAVE_SUCCESS: {
      let data = state.leaves;
      data.push(action.payload);
      return { ...state, leaves: [...data], loading: false };
    }

    case constants.POST_LEAVE_ERROR: {
      return { ...state, error: action.payload, loading: false };
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
          let draft = state;
            const data = action.payload;
            // let holidays = [...data];
            const index = draft.leaves.findIndex(lv => lv.id === data.id) || -1;
            
            if(index > -1){
              // draft.holidays.splice(index, 1,data);
              draft.leaves[index] = data;
            }
            console.log("on update leave")
            return { ...state, leaves:[...draft.leaves], loading: false };
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
