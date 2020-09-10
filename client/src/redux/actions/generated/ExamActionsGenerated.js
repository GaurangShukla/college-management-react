

import * as types from "../../actionTypes";
import ExamApi from "../../../api/ExamApi";

let actionsFunction = {

  //CRUD METHODS

  // Create exam
  createExam: function(exam) {
    return function(dispatch) {
      return ExamApi
        .createExam(exam)
        .then(exam => {
          dispatch(actionsFunction.createExamSuccess(exam));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createExamSuccess: function(exam) {
    return { type: types.CREATE_EXAM_SUCCESS, payload: exam };
  },


  // Delete exam
  deleteExam: function(id) {
    return function(dispatch) {
      return ExamApi
        .deleteExam(id)
        .then(exam => {
          dispatch(actionsFunction.deleteExamSuccess(exam));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteExamSuccess: function(exam) {
    return { type: types.DELETE_EXAM_SUCCESS, payload: exam };
  },


  // Find by _course
  findBy_course: function(key) {
    return function(dispatch) {
      return ExamApi
        .findBy_course(key)
        .then(item => {
          dispatch(actionsFunction.findBy_courseSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_courseSuccess: function(item) {
    return { type: types.FINDBY_COURSE_EXAM_SUCCESS, payload: item };
  },


  // Find by _student
  findBy_student: function(key) {
    return function(dispatch) {
      return ExamApi
        .findBy_student(key)
        .then(item => {
          dispatch(actionsFunction.findBy_studentSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_studentSuccess: function(item) {
    return { type: types.FINDBY_STUDENT_EXAM_SUCCESS, payload: item };
  },


  // Find by _teacher
  findBy_teacher: function(key) {
    return function(dispatch) {
      return ExamApi
        .findBy_teacher(key)
        .then(item => {
          dispatch(actionsFunction.findBy_teacherSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_teacherSuccess: function(item) {
    return { type: types.FINDBY_TEACHER_EXAM_SUCCESS, payload: item };
  },


  // Get exam
  loadExam: function(id) {
    return function(dispatch) {
      return ExamApi
        .getOneExam(id)
        .then(exam => {
          dispatch(actionsFunction.loadExamSuccess(exam));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadExamSuccess: function(exam) {
    return { type: types.GET_EXAM_SUCCESS, payload: exam };
  },

  // Load  list
  loadExamList: function() {
    return function(dispatch) {
      return ExamApi
        .getExamList()
        .then(list => {
          dispatch(actionsFunction.loadExamListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadExamListSuccess: function(list) {
    return { type: types.LIST_EXAM_SUCCESS, payload: list };
  },

	
  // Save exam
  saveExam: function(exam) {
    return function(dispatch) {
      return ExamApi
        .saveExam(exam)
        .then(exam => {
          dispatch(actionsFunction.saveExamSuccess(exam));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveExamSuccess: function(exam) {
    return { type: types.UPDATE_EXAM_SUCCESS, payload: exam };
  },


  /*
  Name: validate
  Description: this api is used to validate exam
  Params: 
    String id - id for exam
  */
  validate: function(...params) {
    return function(dispatch) {
      return ExamApi
        .validate(params)
        .then( result => {
          dispatch(actionsFunction.validateSuccess(result));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  validateSuccess: function(result) {
    return { type: types.VALIDATE_EXAM_SUCCESS, payload: result };
  },
		
};

export default actionsFunction;
