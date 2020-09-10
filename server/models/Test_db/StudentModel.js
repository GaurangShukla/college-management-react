import StudentModelGenerated from "./generated/StudentModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = StudentModelGenerated.init();
  
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
      return await StudentModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...StudentModelGenerated,
  ...customModel
};
