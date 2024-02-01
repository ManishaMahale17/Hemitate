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
      return { ...state, holidays: [...action.payload], loading: false };
    }

    case constants.GET_HOLIDAYS_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }

    case constants.DELETE_HOLIDAY_REQUEST:
      return { ...state, loading: true };

    case constants.DELETE_HOLIDAY_SUCCESS:
      return { ...state, holidays: state.holidays.filter(h => h.id !== action.payload.id), loading: false };

    case constants.DELETE_HOLIDAY_ERROR:
      return { ...state, loading: false, error: action.payload };

    //Post reducer
    case constants.POST_HOLIDAY_REQUEST: {
      return { ...state, loading: true };
    }
    case constants.POST_HOLIDAY_SUCCESS: {
      let data = state.holidays;
      data.push(action.payload);
      return { ...state, holidays: [...data], loading: false };
    }

    case constants.POST_HOLIDAY_ERROR: {
      return { ...state, error: action.payload, loading: false };
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
          let draft = state;
            const data = action.payload;
            // let holidays = [...data];
            const index = draft.holidays.findIndex(h => h.id === data.id) || -1;
            
            if(index > -1){
              // draft.holidays.splice(index, 1,data);
              draft.holidays[index] = data;
            }
            console.log("on update holiday")
            return { ...state, holidays:[...draft.holidays], loading: false };
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
