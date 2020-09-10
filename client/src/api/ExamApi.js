import ExamApiGenerated from "./generated/ExamApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ExamApi extends ExamApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Exam List
  static getExamList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/exams")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ExamApi;