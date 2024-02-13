import * as type from './Type';

const initialState = {
    loading: false,
    studentname: [],
    singleStudent: null,
    error: null
}

export default function StudentAttenReducer(state = initialState, action) {
    switch (action.type) {
        //get Student Data
        case type.GET_ASTUDENTS_REQUEST: {
            return { ...state, loading: true }
        }
        case type.GET_ASTUDENTS_SUCCESS: {
            const data = action.payload;
            return { ...state, studentname: [...data] }
        }
        case type.GET_ASTUDENTS_ERROR: {
            return { ...state, error: action.payload }
        }
        // Single Student Data
        case type.GET_SINGLESTUDENT_REQUEST: 
            return { ...state, loading: true };
        
        case type.GET_SINGLESTUDENT_SUCCESS: 
            return {
                ...state,
                singleStudent: action.payload,
                loading: false,
                error: null,
            };
        
        case type.GET_SINGLESTUDENT_ERROR: 
            return { ...state, error: action.payload, loading: false };
        
        // Delet Student Data
        case type.DELETE_ASTUDENT_REQUEST: {
            return { ...state, loading: true }
        }
        case type.DELETE_ASTUDENT_SUCCESS: {
            return { ...state }
        }
        case type.DELETE_ASTUDENT_ERROR: {
            return { ...state, error: action.payload }
        }
        // Add Student Data
        case type.POST_ASTUDENT_REQUEST: {
            return { ...state, loading: true }
        }
        case type.POST_ASTUDENT_SUCCESS: {
            const data = action.payload;
            return { ...state, studentname: [...data] }
        }
        case type.POST_ASTUDENT_ERROR: {
            return { ...state, error: action.payload }
        }
        // Edit Student Data
        case type.PUT_ASTUDENT_REQUEST: {
            return { ...state, loading: true }
        }
        case type.PUT_ASTUDENT_SUCCESS: {
            const data = action.payload;
            return { ...state, studentname: [...data], loading: false }
        }
        case type.PUT_ASTUDENT_ERROR: {
            return { ...state, error: action.payload, loading: false }
        }
        default: {
            return state;
        }
    }
}