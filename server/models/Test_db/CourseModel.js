import CourseModelGenerated from "./generated/CourseModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = CourseModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await CourseModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CourseModelGenerated,
  ...customModel
};
