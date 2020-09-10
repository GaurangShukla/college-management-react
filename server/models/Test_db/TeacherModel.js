import TeacherModelGenerated from "./generated/TeacherModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = TeacherModelGenerated.init();
  
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
      return await TeacherModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...TeacherModelGenerated,
  ...customModel
};
