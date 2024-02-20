import { Delete, Get, Post, Put } from "../../service/HttpService";
import { urls } from "../../utils/urls";
import {
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  DELETE_USER_REQUEST,
  GET_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  POST_USER_ERROR,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  PUT_USER_REQUEST,
  PUT_USER_SUCCESS,
  PUT_USER_ERROR,
  GET_SINGLE_USER_ERROR,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_REQUEST,
} from "./Type";

export function user_get_request() {
  return {
    type: GET_USER_REQUEST,
  };
}
export function user_get_success(users) {
  return {
    type: GET_USER_SUCCESS,
    payload: users,
  };
}
export function user_get_failure(error) {
  return {
    type: GET_USER_ERROR,
    payload: error,
  };
}

export function user_post_request() {
  return {
    type: POST_USER_REQUEST,
  };
}
export function user_post_success() {
  return {
    type: POST_USER_SUCCESS,
    payload: "",
  };
}
export function user_post_failure(error) {
  return {
    type: POST_USER_ERROR,
    payload: error,
  };
}
// export function delete_user (){
//     return{
//         type:DELETE_USER_SUCCESS
//     }
// }
export function deleteUserRequest() {
  return {
    type: DELETE_USER_REQUEST,
  };
}

export function deleteUserSuccess(data) {
  return {
    type: DELETE_USER_SUCCESS,
    payload: data,
  };
}

export function deleteUserError(error) {
  return {
    type: DELETE_USER_ERROR,
    payload: error,
  };
}

export function getUserData() {
  return (dispatch) => {
    dispatch(user_get_request());
    Get(`${urls.users}`)
      .then((res) => {
        const userlist = res.data;
        console.log(res.data);
        dispatch(user_get_success(userlist));
      })
      .catch((error) => {
        dispatch(user_get_failure(error.message));
      });
  };
}

export function addUserData(state) {
  return function (dispatch) {
    dispatch(user_post_request());
    Post(`${urls.users}`, state)
    
      .then(() => {
        dispatch(user_post_success(state));
        window.alert("Account Created Successfully");
      })
      .catch((error) => {
        dispatch(user_post_failure(error.message));
      });
  };
}

export function deleteUser(id) {
  return (dispatch) => {
    if (window.confirm("Are you sure you want to delete?")) {
      Delete(`${urls.users}/${id}`)
        .then((response) => {
          window.alert("data deleted successfully");
          console.log(response.data);
          // dispatch(deleteUserSuccess(response.data))
          getUserData();
        })
        .catch((error) => {
          console.log(error);
          // dispatch(deleteUserError(error.response))
        });
    }
  };
}

//single get
export function getSingleUserRequest() {
  return {
    type: GET_SINGLE_USER_REQUEST,
  };
}

export function getSingleUserSuccess(data) {
  return {
    type: GET_SINGLE_USER_SUCCESS,
    payload: data,
  };
}

export function getSingleUserError(error) {
  return {
    type: GET_SINGLE_USER_ERROR,
    payload: error,
  };
}

export function getSingleUser(userId) {
  return (dispatch) => {
    dispatch(getSingleUserRequest());
    Get(`${urls.users}/${userId}`)
      .then((response) => {
        dispatch(getSingleUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getSingleUserError(error.response));
      });
  };
}

//put operation
export function editUserRequest() {
  return {
    type: PUT_USER_REQUEST,
  };
}
export function editUserSuccess(data) {
  return {
    type: PUT_USER_SUCCESS,
    payload: data,
  };
}

export function editUserError(error) {
  return {
    type: PUT_USER_ERROR,
    payload: error,
  };
}

export function editUser(editUserData, id) {
  return (dispatch) => {
    // Fetch the single branch data
    dispatch(getSingleUser(id));

    dispatch(editUserRequest());
    Put(`${urls.users}/${id}`, editUserData)
      .then((response) => {
        dispatch(editUserSuccess(response.data));
        window.alert("user Updated Successfully!");
      })
      .catch((error) => {
        dispatch(editUserError(error.response));
      });
  };
}
