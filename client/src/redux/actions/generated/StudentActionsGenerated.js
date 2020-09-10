

import * as types from "../../actionTypes";
import StudentApi from "../../../api/StudentApi";

let actionsFunction = {

  //CRUD METHODS

  // Create student
  createStudent: function(student) {
    return function(dispatch) {
      return StudentApi
        .createStudent(student)
        .then(student => {
          dispatch(actionsFunction.createStudentSuccess(student));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createStudentSuccess: function(student) {
    return { type: types.CREATE_STUDENT_SUCCESS, payload: student };
  },


  // Delete student
  deleteStudent: function(id) {
    return function(dispatch) {
      return StudentApi
        .deleteStudent(id)
        .then(student => {
          dispatch(actionsFunction.deleteStudentSuccess(student));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteStudentSuccess: function(student) {
    return { type: types.DELETE_STUDENT_SUCCESS, payload: student };
  },


  // Find by _courses
  findBy_courses: function(key) {
    return function(dispatch) {
      return StudentApi
        .findBy_courses(key)
        .then(item => {
          dispatch(actionsFunction.findBy_coursesSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_coursesSuccess: function(item) {
    return { type: types.FINDBY_COURSES_STUDENT_SUCCESS, payload: item };
  },


  // Get student
  loadStudent: function(id) {
    return function(dispatch) {
      return StudentApi
        .getOneStudent(id)
        .then(student => {
          dispatch(actionsFunction.loadStudentSuccess(student));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadStudentSuccess: function(student) {
    return { type: types.GET_STUDENT_SUCCESS, payload: student };
  },

  // Load  list
  loadStudentList: function() {
    return function(dispatch) {
      return StudentApi
        .getStudentList()
        .then(list => {
          dispatch(actionsFunction.loadStudentListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadStudentListSuccess: function(list) {
    return { type: types.LIST_STUDENT_SUCCESS, payload: list };
  },

	
  // Save student
  saveStudent: function(student) {
    return function(dispatch) {
      return StudentApi
        .saveStudent(student)
        .then(student => {
          dispatch(actionsFunction.saveStudentSuccess(student));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveStudentSuccess: function(student) {
    return { type: types.UPDATE_STUDENT_SUCCESS, payload: student };
  },


};

export default actionsFunction;
