

import * as types from "../../actionTypes";
import UserApi from "../../../api/UserApi";

let actionsFunction = {

  //CRUD METHODS

  // Create user
  createUser: function(user) {
    return function(dispatch) {
      return UserApi
        .createUser(user)
        .then(user => {
          dispatch(actionsFunction.createUserSuccess(user));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createUserSuccess: function(user) {
    return { type: types.CREATE_USER_SUCCESS, payload: user };
  },


  // Delete user
  deleteUser: function(id) {
    return function(dispatch) {
      return UserApi
        .deleteUser(id)
        .then(user => {
          dispatch(actionsFunction.deleteUserSuccess(user));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteUserSuccess: function(user) {
    return { type: types.DELETE_USER_SUCCESS, payload: user };
  },


  // Get user
  loadUser: function(id) {
    return function(dispatch) {
      return UserApi
        .getOneUser(id)
        .then(user => {
          dispatch(actionsFunction.loadUserSuccess(user));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadUserSuccess: function(user) {
    return { type: types.GET_USER_SUCCESS, payload: user };
  },

  // Load  list
  loadUserList: function() {
    return function(dispatch) {
      return UserApi
        .getUserList()
        .then(list => {
          dispatch(actionsFunction.loadUserListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadUserListSuccess: function(list) {
    return { type: types.LIST_USER_SUCCESS, payload: list };
  },

	
  // Save user
  saveUser: function(user) {
    return function(dispatch) {
      return UserApi
        .saveUser(user)
        .then(user => {
          dispatch(actionsFunction.saveUserSuccess(user));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveUserSuccess: function(user) {
    return { type: types.UPDATE_USER_SUCCESS, payload: user };
  },


  /*
  Name: changePassword
  Description: Change password of user from admin
  Params: 
  */
  changePassword: function(...params) {
    return function(dispatch) {
      return UserApi
        .changePassword(params)
        .then( result => {
          dispatch(actionsFunction.changePasswordSuccess(result));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  changePasswordSuccess: function(result) {
    return { type: types.CHANGEPASSWORD_USER_SUCCESS, payload: result };
  },
		
};

export default actionsFunction;
