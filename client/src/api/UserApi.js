import UserApiGenerated from "./generated/UserApiGenerated";

// Dependencies
import axios from "axios";
import { properties } from "../config/properties";

class UserApi extends UserApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get User List
  static getUserList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/users")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

  /**
   * UserService.login
   *   @description login
   *
   */
  static login(username, password) {
    return axios
      .post(properties.endpoint + "/login", {
        username: username,
        password: password
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }

  /**
   * UserService.verifyToken
   *   @description Verifty JSWT token validity
   *   @returns object
   *
   */
  static verifyToken(token) {
    return axios
      .post(properties.endpoint + "/verifyToken", { token: token })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
   * UserService.changePassword
   *   @description Change password for logged user
   *   @param string passwordOld old password user
   *   @param string passwordNew new password
   *   @returns object
   *
   */
  static changePassword(passwordNew, passwordOld) {
    return axios
      .post(properties.endpoint + "/changePassword", {
        passwordNew: passwordNew,
        passwordOld: passwordOld
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
   * UserService.changePasswordAdmin
   *   @description Change password of user from admin
   *   @param string passwordAdmin password admin user
   *   @param string passwordNew new password
   *   @returns object
   *
   */
  static changePasswordAdmin(id, passwordAdmin, passwordNew) {
    return axios
      .post(UserApiGenerated.contextUrl + "/" + id + "/changePassword", {
        passwordNew: passwordNew,
        passwordAdmin: passwordAdmin
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

}

export default UserApi;