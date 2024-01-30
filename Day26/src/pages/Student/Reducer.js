import * as constants from '../Student/Type';


const initialState = {
    loading: false,
    students: [],
    student: {},
    singleStudent: null,
    error: null

}

export default function StudentReducer(state = initialState, action) {
    switch (action.type) {
        case constants.GET_STUDENTS_SUCCESS: {
            const data = action.payload;
            return { ...state, students: [...data] }
        }
        case constants.GET_STUDENTS_ERROR: {
            return { ...state, error: action.payload }
        }



        case constants.DELETE_STUDENT_REQUEST: {
            const data = action.payload;
            return { ...state, students: [...data] }
        }
        case constants.DELETE_STUDENT_SUCCESS: {
            const data = action.payload;
            return { ...state, students: [...data] }
        }
        case constants.DELETE_STUDENT_ERROR: {
            return { ...state, error: action.payload }
        }
        case constants.POST_STUDENT_REQUEST: {
            return { ...state, loading: true }
        }
        case constants.POST_STUDENT_SUCCESS: {
            const data = action.payload;
            return { ...state, students: [...data] }
        }
        case constants.POST_STUDENT_ERROR: {
            return { ...state, error: action.payload }
        }
        //get single branch

        case constants.GET_SINGLE_STUDENT_REQUEST:
            return { ...state, loading: true };

        case constants.GET_SINGLE_STUDENT_SUCCESS:
            return {
                ...state,
                singleStudent: action.payload,
                loading: false,
                error: null
            };

        case constants.GET_SINGLE_STUDENT_ERROR:
            return { ...state, error: action.payload, loading: false };
        case constants.PUT_STUDENT_REQUEST: {
            return { ...state, loading: true }
        }
        case constants.PUT_STUDENT_REQUEST:
            {
                return { ...state, loading: true };
            }
    
        case constants.PUT_STUDENT_SUCCESS:
            {
                const data = action.payload;
                return { ...state, students: [...data], loading: false };
            }
    
        case constants.PUT_STUDENT_ERROR:
            {
                return { ...state, error: action.payload, loading: false };
            }
        default: {
            return state;
        }
    }
}