import StudentApiGenerated from "./generated/StudentApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class StudentApi extends StudentApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Student List
  static getStudentList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/students")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default StudentApi;