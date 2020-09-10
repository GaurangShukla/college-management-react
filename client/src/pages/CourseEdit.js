// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import CourseActions from "../redux/actions/CourseActions";
import ExamActions from "../redux/actions/ExamActions";
import TeacherActions from "../redux/actions/TeacherActions";
import StudentActions from "../redux/actions/StudentActions";

// END IMPORT ACTIONS

/** APIs

* actionsCourse.create
*	@description CRUD ACTION create
*
* actionsCourse.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsCourse.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsExam.findBy_course
*	@description CRUD ACTION findBy_course
*	@param Objectid key - Id of model to search for
*
* actionsTeacher.findBy_courses
*	@description CRUD ACTION findBy_courses
*	@param Objectid key - Id of model to search for
*
* actionsStudent.findBy_courses
*	@description CRUD ACTION findBy_courses
*	@param Objectid key - Id of model to search for
*

**/

class CourseEdit extends Component {
  // Init course
  constructor(props) {
    super(props);
    this.state = {
      course: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsCourse.loadCourse(this.props.match.params.id);
      this.props.actionsExam.findBy_course(this.props.match.params.id);
      this.props.actionsStudent.findBy_courses(this.props.match.params.id);
      this.props.actionsTeacher.findBy_courses(this.props.match.params.id);
    }
    
  }

  // Insert props course in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      course: props.course
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.course._id) {
      this.props.actionsCourse.saveCourse(this.state.course).then(data => {
        this.props.history.push("/courses/");
      });
    } else {
      this.props.actionsCourse.createCourse(this.state.course).then(data => {
        this.props.history.push("/courses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Course Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="name"
            label="Name"
            value={this.state.course.name || ""}
            onChange={Utils.handleChange.bind(this, "course")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.course.name && this.state.course.name === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with exam */}
          
          <h3>Exam</h3>
          {(!this.props.listExam || this.props.listExam.length === 0) && 
            <div>No Exam associated</div>
          }
          {this.props.listExam &&
            this.props.listExam.map((item, i) => {
              return (
                <Link to={"/exams/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with student */}
          
          <h3>Student</h3>
          {(!this.props.listStudent || this.props.listStudent.length === 0) && 
            <div>No Student associated</div>
          }
          {this.props.listStudent &&
            this.props.listStudent.map((item, i) => {
              return (
                <Link to={"/students/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with teacher */}
          
          <h3>Teacher</h3>
          {(!this.props.listTeacher || this.props.listTeacher.length === 0) && 
            <div>No Teacher associated</div>
          }
          {this.props.listTeacher &&
            this.props.listTeacher.map((item, i) => {
              return (
                <Link to={"/teachers/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/courses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsCourse: bindActionCreators(CourseActions, dispatch),
    actionsExam: bindActionCreators(ExamActions, dispatch),
    actionsTeacher: bindActionCreators(TeacherActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
  };
};

// Validate types
CourseEdit.propTypes = { 
  actionsCourse: PropTypes.object.isRequired,
  actionsExam: PropTypes.object.isRequired,
  actionsTeacher: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    course: state.CourseEditReducer.course,
    listExam: state.CourseEditReducer.listExam,
    listStudent: state.CourseEditReducer.listStudent,
    listTeacher: state.CourseEditReducer.listTeacher
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseEdit);
