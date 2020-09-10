import actionsFunction from "./generated/ExamActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import examApi from "../../api/examApi";
 
 actionsFunction.loadexamList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return examApi
     .getexamList()
     .then(list => {
       dispatch(actionsFunction.loadexamSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
