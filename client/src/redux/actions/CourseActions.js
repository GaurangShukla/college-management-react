import actionsFunction from "./generated/CourseActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import courseApi from "../../api/courseApi";
 
 actionsFunction.loadcourseList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return courseApi
     .getcourseList()
     .then(list => {
       dispatch(actionsFunction.loadcourseSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
