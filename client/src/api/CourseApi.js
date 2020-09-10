import CourseApiGenerated from "./generated/CourseApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class CourseApi extends CourseApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Course List
  static getCourseList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/courses")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default CourseApi;