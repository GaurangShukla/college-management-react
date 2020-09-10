import actionsFunction from "./generated/StudentActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import studentApi from "../../api/studentApi";
 
 actionsFunction.loadstudentList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return studentApi
     .getstudentList()
     .then(list => {
       dispatch(actionsFunction.loadstudentSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
