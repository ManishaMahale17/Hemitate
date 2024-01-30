import * as constants from "../Holiday/Type";

const initialState = {
  loading:false,
  holidays: [], 
  Holiday: {},
  singleHoliday: null,
  error:null
}

export default function HolidayReducer(state = initialState, action) {
  switch (action.type) {
    //Get Reducer
    case constants.GET_HOLIDAYS_REQUEST: {
      return { ...state, loading: true };
    }
    case constants.GET_HOLIDAYS_SUCCESS: {
      const data = action.payload;
      return { ...state, holidays: [...data] };
    }
    case constants.GET_HOLIDAYS_ERROR: {
      return { ...state, error: action.payload };
    }
    //Delete Reducer
    // case constants.DELETE_HOLIDAY_REQUEST: {
    //   return { ...state, loading: true };
    // }
    // case constants.DELETE_HOLIDAY_SUCCESS: {
    //   const data = action.payload;
    //   return { ...state, holidays: [...data] };
    // }
  
    // case constants.DELETE_HOLIDAY_ERROR: {
    //   return { ...state, error: action.payload };
    // }
    case constants.DELETE_HOLIDAY_REQUEST:
      return { ...state, loading: true };

    case constants.DELETE_HOLIDAY_SUCCESS:
      // Assuming you want to update holidays after successful delete
      return { ...state, loading: false, holidays: state.holidays.filter(h => h.id !== action.payload) };

    case constants.DELETE_HOLIDAY_ERROR:
      return { ...state, loading: false, error: action.payload };

    //Post reducer
    case constants.POST_HOLIDAY_REQUEST: {
      return { ...state, loading: true };
    }
    case constants.POST_HOLIDAY_SUCCESS: {
      const data = action.payload;
      return { ...state, holidays: [...data] };
    }
    case constants.POST_HOLIDAY_ERROR: {
      return { ...state, error: action.payload };
    }
  

//get single Trainer
            
case constants.GET_SINGLE_HOLIDAY_REQUEST:
    return { ...state, loading: true };

    case constants.GET_SINGLE_HOLIDAY_SUCCESS:
    return {
        ...state,
        singleHoliday: action.payload,
        loading: false,
        error: null
    };

case constants.GET_SINGLE_HOLIDAY_ERROR:
    return { ...state, error: action.payload, loading: false }



     //Put reducer

      case constants.PUT_HOLIDAY_REQUEST:
        {
            return { ...state, loading: true };
        }

    case constants.PUT_HOLIDAY_SUCCESS:
        {
            const data = action.payload;
            return { ...state, holidays: [...data], loading: false };
        }

    case constants.PUT_HOLIDAY_ERROR:
        {
            return { ...state, error: action.payload, loading: false };
        }


    default: {
      return state;
    }
  }
}
