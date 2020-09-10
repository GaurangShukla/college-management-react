
import Properties from "../../../properties";
import ExamModel from "../../../models/Test_db/ExamModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import ExamController from "../ExamController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/exam`;
    router.post(baseUrl + "", authorize([]), ExamController.create);
    router.delete(baseUrl + "/:id", authorize([]), ExamController.delete);
    router.get(baseUrl + "/findBy_course/:key", authorize([]), ExamController.findBy_course);
    router.get(baseUrl + "/findBy_student/:key", authorize([]), ExamController.findBy_student);
    router.get(baseUrl + "/findBy_teacher/:key", authorize([]), ExamController.findBy_teacher);
    router.get(baseUrl + "/:id", authorize([]), ExamController.get);
    router.get(baseUrl + "", authorize([]), ExamController.list);
    router.post(baseUrl + "/:id", authorize([]), ExamController.update);
    router.post(baseUrl + "/:id/validate", ExamController.validate);
  },


  // CRUD METHODS


  /**
  * examModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await ExamModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * examModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await ExamModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * examModel.findBy_course
  *   @description CRUD ACTION findBy_course
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_course: async (req, res) => {
    try {
      const result = await ExamModel.findBy_course(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * examModel.findBy_student
  *   @description CRUD ACTION findBy_student
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_student: async (req, res) => {
    try {
      const result = await ExamModel.findBy_student(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * examModel.findBy_teacher
  *   @description CRUD ACTION findBy_teacher
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_teacher: async (req, res) => {
    try {
      const result = await ExamModel.findBy_teacher(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * examModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  get: async (req, res) => {
    try {
      const result = await ExamModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * examModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await ExamModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * examModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await ExamModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
    
  
  // Custom APIs

  /**
  * examModel.validate
  *   @description this api is used to validate exam
  *   @param String id id for exam
  *   @returns Boolean
  *
  */
  validate: async (req, res) => {
    try {
      res.json({});
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },

};

export default generatedControllers;
