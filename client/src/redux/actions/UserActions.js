import actionsFunction from "./generated/UserActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import UserApi from "../../api/UserApi";
 
 actionsFunction.loadUserList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return UserApi
     .getUserList()
     .then(list => {
       dispatch(actionsFunction.loadUserSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/
import UserApi from "../../api/UserApi";
import * as types from "../actionTypes";

// Login
actionsFunction.login = function(username, password) {
  return function(dispatch) {
    return UserApi.login(username, password)
      .then(user => {
        dispatch(actionsFunction.loginSuccess(user));
      })
      .catch(error => {
        throw error;
      });
  };
};

actionsFunction.loginSuccess = function(user) {
  return { type: types.LOGIN_SUCCESS, payload: user };
};

// Logut
actionsFunction.logout = function(username, password) {
  return function(dispatch) {
    return dispatch(actionsFunction.logoutSuccess());
  };
};

actionsFunction.logoutSuccess = function(user) {
  return { type: types.LOGOUT_SUCCESS };
};

// Change password
actionsFunction.changePassword = function(passwordNew, passwordOld) {
  return function(dispatch) {
    return UserApi.changePassword(passwordNew, passwordOld)
      .then(user => {
        dispatch(actionsFunction.changePasswordSuccess(user));
      })
      .catch(error => {
        throw error;
      });
  };
};

actionsFunction.changePasswordSuccess = function(user) {
  return { type: types.CHANGE_PASSWORD_SUCCESS, payload: user };
};

// Change password admin
actionsFunction.changePasswordAdmin = function(id, passwordAdmin, passwordNew) {
  return function(dispatch) {
    return UserApi.changePasswordAdmin(id, passwordAdmin, passwordNew)
      .then(user => {
        dispatch(actionsFunction.changePasswordAdminSuccess(user));
      })
      .catch(error => {
        throw error;
      });
  };
};

actionsFunction.changePasswordAdminSuccess = function(user) {
  return { type: types.CHANGE_PASSWORD_ADMIN_SUCCESS, payload: user };
};

export default actionsFunction;
