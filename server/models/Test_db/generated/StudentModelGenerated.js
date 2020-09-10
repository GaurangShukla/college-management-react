
// Database
import Database from "../../../classes/Database_Test_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * student
      */
    const studentSchema = new mongoose.Schema({
      DOB: {
        type: "Date", 
        required: true
      },
      lastname: {
        type: "String", 
        required: true
      },
      name: {
        type: "String", 
        required: true
      },
      // RELATIONS
      _courses: [{
        type: Schema.ObjectId,
        ref: "course"
      }],
      
      
      // EXTERNAL RELATIONS
      /*
      _student: {
        type: Schema.ObjectId,
        ref: "exam"
      },
      */
    });

    generatedModel.setModel(db.connection.model("Student", studentSchema));

    return studentSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * studentModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * studentModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * studentModel.findBy_courses
  *   @description CRUD ACTION findBy_courses
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_courses(key) {
    return await generatedModel.model.find({ '_courses' : key});
  },
  
  /**
  * studentModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * studentModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * studentModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
