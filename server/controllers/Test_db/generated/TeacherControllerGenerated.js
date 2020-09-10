
import Properties from "../../../properties";
import TeacherModel from "../../../models/Test_db/TeacherModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import TeacherController from "../TeacherController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/teacher`;
    router.post(baseUrl + "", authorize([]), TeacherController.create);
    router.delete(baseUrl + "/:id", authorize([]), TeacherController.delete);
    router.get(baseUrl + "/findBy_courses/:key", authorize([]), TeacherController.findBy_courses);
    router.get(baseUrl + "/:id", authorize([]), TeacherController.get);
    router.get(baseUrl + "", authorize([]), TeacherController.list);
    router.post(baseUrl + "/:id", authorize([]), TeacherController.update);
  },


  // CRUD METHODS


  /**
  * teacherModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await TeacherModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * teacherModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await TeacherModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * teacherModel.findBy_courses
  *   @description CRUD ACTION findBy_courses
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_courses: async (req, res) => {
    try {
      const result = await TeacherModel.findBy_courses(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * teacherModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  get: async (req, res) => {
    try {
      const result = await TeacherModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * teacherModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await TeacherModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * teacherModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await TeacherModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
