import actionsFunction from "./generated/TeacherActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import teacherApi from "../../api/teacherApi";
 
 actionsFunction.loadteacherList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return teacherApi
     .getteacherList()
     .then(list => {
       dispatch(actionsFunction.loadteacherSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
