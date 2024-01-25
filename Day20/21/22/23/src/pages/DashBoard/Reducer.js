import {
  DELETE_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  POST_USER_ERROR,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  PUT_USER_ERROR,
  PUT_USER_REQUEST,
  PUT_USER_SUCCESS,
} from "./Type";

const initialState = {
  loading: true,
  userlist: [],
  userObj: {},
  singleUser: null,
  error: "",
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_REQUEST: {
      // loading:true
      return { ...state, loading: true };
    }
    case GET_USER_SUCCESS: {
      const data = action.payload;
      return { ...state, userlist: [...data], userObj: {}, error: "" };
    }
    case GET_USER_ERROR: {
      return { ...state, error: action.payload };
    }
    //get single user

    case GET_SINGLE_USER_REQUEST:
      return { ...state, loading: true };

    case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        singleUser: action.payload,
        loading: false,
        error: null,
      };

    case GET_SINGLE_USER_ERROR:
      return { ...state, error: action.payload, loading: false };

    case POST_USER_SUCCESS: {
      return { ...state };
    }
    case POST_USER_ERROR: {
      return { ...state };
    }
    case DELETE_USER_REQUEST: {
      const data = action.payload;
      return { ...state, userlist: [...data] };
    }
    case DELETE_USER_SUCCESS: {
      const data = action.payload;
      return { ...state, userlist: [...data] };
    }
    case DELETE_USER_ERROR: {
      return { ...state, error: action.payload };
    }
    case PUT_USER_REQUEST: {
      return { ...state, loading: true };
    }

    case PUT_USER_SUCCESS: {
      const data = action.payload;
      return { ...state, userlist: [...data], loading: false };
    }

    case PUT_USER_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }

    default: {
      return state;
    }
  }
}
