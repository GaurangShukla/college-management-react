

import * as types from "../../actionTypes";
import TeacherApi from "../../../api/TeacherApi";

let actionsFunction = {

  //CRUD METHODS

  // Create teacher
  createTeacher: function(teacher) {
    return function(dispatch) {
      return TeacherApi
        .createTeacher(teacher)
        .then(teacher => {
          dispatch(actionsFunction.createTeacherSuccess(teacher));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createTeacherSuccess: function(teacher) {
    return { type: types.CREATE_TEACHER_SUCCESS, payload: teacher };
  },


  // Delete teacher
  deleteTeacher: function(id) {
    return function(dispatch) {
      return TeacherApi
        .deleteTeacher(id)
        .then(teacher => {
          dispatch(actionsFunction.deleteTeacherSuccess(teacher));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteTeacherSuccess: function(teacher) {
    return { type: types.DELETE_TEACHER_SUCCESS, payload: teacher };
  },


  // Find by _courses
  findBy_courses: function(key) {
    return function(dispatch) {
      return TeacherApi
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
    return { type: types.FINDBY_COURSES_TEACHER_SUCCESS, payload: item };
  },


  // Get teacher
  loadTeacher: function(id) {
    return function(dispatch) {
      return TeacherApi
        .getOneTeacher(id)
        .then(teacher => {
          dispatch(actionsFunction.loadTeacherSuccess(teacher));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadTeacherSuccess: function(teacher) {
    return { type: types.GET_TEACHER_SUCCESS, payload: teacher };
  },

  // Load  list
  loadTeacherList: function() {
    return function(dispatch) {
      return TeacherApi
        .getTeacherList()
        .then(list => {
          dispatch(actionsFunction.loadTeacherListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadTeacherListSuccess: function(list) {
    return { type: types.LIST_TEACHER_SUCCESS, payload: list };
  },

	
  // Save teacher
  saveTeacher: function(teacher) {
    return function(dispatch) {
      return TeacherApi
        .saveTeacher(teacher)
        .then(teacher => {
          dispatch(actionsFunction.saveTeacherSuccess(teacher));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveTeacherSuccess: function(teacher) {
    return { type: types.UPDATE_TEACHER_SUCCESS, payload: teacher };
  },


};

export default actionsFunction;
