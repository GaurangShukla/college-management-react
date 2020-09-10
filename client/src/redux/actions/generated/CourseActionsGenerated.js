

import * as types from "../../actionTypes";
import CourseApi from "../../../api/CourseApi";

let actionsFunction = {

  //CRUD METHODS

  // Create course
  createCourse: function(course) {
    return function(dispatch) {
      return CourseApi
        .createCourse(course)
        .then(course => {
          dispatch(actionsFunction.createCourseSuccess(course));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createCourseSuccess: function(course) {
    return { type: types.CREATE_COURSE_SUCCESS, payload: course };
  },


  // Delete course
  deleteCourse: function(id) {
    return function(dispatch) {
      return CourseApi
        .deleteCourse(id)
        .then(course => {
          dispatch(actionsFunction.deleteCourseSuccess(course));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteCourseSuccess: function(course) {
    return { type: types.DELETE_COURSE_SUCCESS, payload: course };
  },


  // Get course
  loadCourse: function(id) {
    return function(dispatch) {
      return CourseApi
        .getOneCourse(id)
        .then(course => {
          dispatch(actionsFunction.loadCourseSuccess(course));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadCourseSuccess: function(course) {
    return { type: types.GET_COURSE_SUCCESS, payload: course };
  },

  // Load  list
  loadCourseList: function() {
    return function(dispatch) {
      return CourseApi
        .getCourseList()
        .then(list => {
          dispatch(actionsFunction.loadCourseListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadCourseListSuccess: function(list) {
    return { type: types.LIST_COURSE_SUCCESS, payload: list };
  },

	
  // Save course
  saveCourse: function(course) {
    return function(dispatch) {
      return CourseApi
        .saveCourse(course)
        .then(course => {
          dispatch(actionsFunction.saveCourseSuccess(course));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveCourseSuccess: function(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, payload: course };
  },


};

export default actionsFunction;
