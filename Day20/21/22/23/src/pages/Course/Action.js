import * as actionType from "./Type";
import { Get, Delete, Post, Put } from "../../service/HttpService";
import { urls } from "../../utils/urls";
import { useNavigate } from "react-router-dom";

export function getCourses() {
  return (dispatch) => {
    dispatch(getCoursesRequest);
    Get(`${urls.courses}`)
      .then((response) => {
        console.log(response.data);
        dispatch(getCourseSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getCourseError(error.response));
      });
  };
}

// =====================delete===================================
export function deleteCourses(id) {
  return (dispatch) => {
    if (window.confirm(`Are You Sure You Want To Delete:${id}`))
      // dispatch(deleteCoursesRequest());
      Delete(`${urls.courses}/${id}`)
        .then((response) => {
          // dispatch(deleteCourseSuccess(response.data));
          window.alert("Data Deleted Successfully");
          console.log(response.data);
          getCourses();
        })
        .catch((error) => {
          dispatch(deleteCourseError(error.message));
        });
  };
}

export function addCourses(courseData) {
  return (dispatch) => {
    dispatch(addCoursesRequest);
    Post(`${urls.courses}`, courseData)
      .then((response) => {
        dispatch(addCourseSuccess(response.data));
        window.alert("Course Added Successfully");
        dispatch(getCourses());
      })
      .catch((error) => {
        dispatch(addCourseError(error.response));
      });
  };
}

export function getCoursesRequest(payload) {
  return {
    type: actionType.GET_COURSES_REQUEST,
  };
}

export function getCourseSuccess(data) {
  return {
    type: actionType.GET_COURSES_SUCCESS,
    payload: data,
  };
}

export function getCourseError(error) {
  return {
    type: actionType.GET_COURSES_ERROR,
    payload: error,
  };
}

// delete

export function deleteCoursesRequest() {
  return {
    type: actionType.DELETE_COURSE_REQUEST,
  };
}

export function deleteCourseSuccess(data) {
  return {
    type: actionType.DELETE_COURSE_SUCCESS,
    payload: data,
  };
}

export function deleteCourseError(error) {
  return {
    type: actionType.DELETE_COURSE_ERROR,
    payload: error,
  };
}

// ===============================Add======================================
export function addCoursesRequest() {
  return {
    type: actionType.POST_COURSE_REQUEST,
  };
}

export function addCourseSuccess(data) {
  return {
    type: actionType.POST_COURSE_SUCCESS,
    payload: data,
  };
}

export function addCourseError(error) {
  return {
    type: actionType.POST_COURSE_ERROR,
    payload: error,
  };
}

// =======================Edit==============================

export function getSingleCourseRequest() {
  return {
    type: actionType.GET_SINGLE_COURSE_REQUEST,
  };
}

export function getSingleCourseSuccess(data) {
  return {
    type: actionType.GET_SINGLE_COURSE_SUCCESS,
    payload: data,
  };
}

export function getSingleCourseError(error) {
  return {
    type: actionType.GET_SINGLE_COURSE_ERROR,
    payload: error,
  };
}

export function getSingleCourse(courseId) {
  return (dispatch) => {
    dispatch(getSingleCourseRequest());
    Get(`${urls.courses}/${courseId}`)
      .then((response) => {
        dispatch(getSingleCourseSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getSingleCourseError(error.response));
      });
  };
}

export function editCourses(UpdatedData, id) {
  return (dispatch) => {
    dispatch(getSingleCourse(id));
    dispatch(editCourseRequest());

    const url = `${urls.courses}/${id}`; // Correctly format the URL

    Put(url, UpdatedData)
      .then((response) => {
        dispatch(editCourseSuccess(response.data));
        window.alert("Course Edited Successfully");
      })
      .catch((error) => {
        dispatch(editCourseError(error.response));
      });
  };
}

export function editCourseRequest() {
  return {
    type: actionType.PUT_COURSE_REQUEST,
  };
}

export function editCourseSuccess(data) {
  return {
    type: actionType.PUT_COURSE_SUCCESS,
    payload: data,
  };
}

export function editCourseError(error) {
  return {
    type: actionType.PUT_COURSE_ERROR,
    payload: error,
  };
}
