// import * as constants from './contants';
import * as type from "../Course/Type";

const initialState = {
  courses: [],
  loading: false,
  singleCourse: null,
  course: {},
  // duration: {},
  // fees: {},
  // trainer: {},
  // description: {},
  error: null,
};

export default function CourseReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_COURSES_REQUEST: {
      return { ...state, loading: true };
    }

    case type.GET_COURSES_SUCCESS: {
      const data = action.payload;
      return { ...state, courses: [...data] };
    }
    case type.GET_COURSES_ERROR: {
      return { ...state, error: action.payload };
    }

    // =========================single course=============================

    //get single branch

    case type.GET_SINGLE_COURSE_REQUEST:
      return { ...state, loading: true };

    case type.GET_SINGLE_COURSE_SUCCESS:
      return {
        ...state,
        singleCourse: action.payload,
        loading: false,
        error: null,
      };

    case type.GET_SINGLE_COURSE_ERROR:
      return { ...state, error: action.payload, loading: false };

    // ===================delete========================
    case type.DELETE_COURSE_REQUEST: {
      const data = action.payload;
      return { ...state, courses: [...data] };
    }

    case type.DELETE_COURSE_SUCCESS: {
      const data = action.payload;

      return { ...state, courses: [...data] };
    }
    case type.DELETE_COURSE_ERROR: {
      return { ...state, error: action.payload };
    }

    // ============================Add==================================

    case type.POST_COURSE_REQUEST: {
      return { ...state, loading: true };
    }

    case type.POST_COURSE_SUCCESS: {
      const data = action.payload;
      return { ...state, courses: [...data] };
    }
    case type.POST_COURSE_ERROR: {
      return { ...state, error: action.payload };
    }

    // ===========================edit=====================

    case type.PUT_COURSE_REQUEST: {
      return { ...state, loading: true };
    }

    case type.PUT_COURSE_SUCCESS: {
      const data = action.payload;
      return { ...state, courses: [...data], loading: false };
    }
    case type.PUT_COURSE_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }

    default: {
      return state;
    }
  }
}
