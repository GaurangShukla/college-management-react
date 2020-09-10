import TeacherApiGenerated from "./generated/TeacherApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class TeacherApi extends TeacherApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Teacher List
  static getTeacherList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/teachers")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default TeacherApi;