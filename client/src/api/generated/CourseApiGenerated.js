
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class CourseApiGenerated {

  static contextUrl = properties.endpoint + "/course";

  // CRUD METHODS

  /**
  * courseService.create
  *   @description CRUD ACTION create
  *
  */
  static createCourse(course) {
    return axios.post(CourseApiGenerated.contextUrl, course )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * courseService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteCourse(id) {
    return axios.delete(CourseApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * courseService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneCourse(id) {
    return axios.get(CourseApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * courseService.list
  *   @description CRUD ACTION list
  *
  */
  static getCourseList() {
    return axios.get(CourseApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * courseService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveCourse(course) {
    return axios.post(CourseApiGenerated.contextUrl + "/" + course._id, course )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default CourseApiGenerated;
