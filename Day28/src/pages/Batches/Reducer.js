import * as constants from "../Batches/Type"
const initialState = {
    loading: false,
    batches: [],
    batch: {},
    singleBatch: null,
    error: null
}
export default function BatchReducer(state = initialState, action) {
    switch (action.type) {
        //============================get Opeartion=============================//
        case constants.GET_BATCHES_REQUEST: {

            return { ...state, loading: true }
        }
        case constants.GET_BATCHES_SUCCESS: {
            const data = action.payload;
            return { ...state, batches: [...data] }
        }
        case constants.GET_BATCHES_ERROR: {
            return { ...state, error: action.payload }
        }
        case constants.GET_SINGLE_BATCH_REQUEST:
            return { ...state, loading: true };
        case constants.GET_SINGLE_BATCH_SUCCESS:
            return {
                ...state,
                singleBatch: action.payload,
                loading: false,
                error: null
            };
        case constants.GET_SINGLE_BATCH_ERROR:
            return { ...state, error: action.payload, loading: false };
        //=====================================delete operation=======================//
        case constants.DELETE_BATCH_REQUEST: {
            const data = action.payload;
            return { ...state, batches: [...data] };
        }
        case constants.DELETE_BATCH_SUCCESS: {
            const data = action.payload;
            return { ...state, batches: [...data] }
        }
        case constants.DELETE_BATCH_ERROR: {
            return { ...state, error: action.payload }
        }
        //====================================POST IS START====================//
        case constants.POST_BATCH_REQUEST: {

            return { ...state, loading: true }
        }
        case constants.POST_BATCH_SUCCESS: {
            const data = action.payload;
            return { ...state, batches: [...data] }
        }
        case constants.POST_BATCH_ERROR: {
            return { ...state, error: action.payload }
        }
        //=============================================PUT IS START==================//
        case constants.PUT_BATCH_REQUEST:
            {
                return { ...state, loading: true };
            }

        case constants.PUT_BATCH_SUCCESS:
            {
                const data = action.payload;
                return { ...state, batches: [...data], loading: false };
            }

        case constants.PUT_BATCH_ERROR:
            {
                return { ...state, error: action.payload, loading: false };
            }
        default: {
            return state;
        }
    }
}



