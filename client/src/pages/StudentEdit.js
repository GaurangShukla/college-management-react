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
import { DateTimePicker } from "material-ui-pickers";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";

// Custom Actions


// START IMPORT ACTIONS
import StudentActions from "../redux/actions/StudentActions";
import ExamActions from "../redux/actions/ExamActions";
import CourseActions from "../redux/actions/CourseActions";

// END IMPORT ACTIONS

/** APIs

* actionsStudent.create
*	@description CRUD ACTION create
*
* actionsStudent.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsStudent.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsExam.findBy_student
*	@description CRUD ACTION findBy_student
*	@param Objectid key - Id of model to search for
*
* actionsCourse.list
*	@description CRUD ACTION list
*

**/

class StudentEdit extends Component {
  // Init student
  constructor(props) {
    super(props);
    this.state = {
      student: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsStudent.loadStudent(this.props.match.params.id);
      this.props.actionsExam.findBy_student(this.props.match.params.id);
    }
    
    this.props.actionsCourse.loadCourseList();
  }

  // Insert props student in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      student: props.student
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.student._id) {
      this.props.actionsStudent.saveStudent(this.state.student).then(data => {
        this.props.history.push("/students/");
      });
    } else {
      this.props.actionsStudent.createStudent(this.state.student).then(data => {
        this.props.history.push("/students/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Student Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <DateTimePicker
            id="DOB"
            label="DOB"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.student.DOB
                ? new Date(this.state.student.DOB)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "student", "DOB")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.student.DOB && this.state.student.DOB === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="lastname"
            label="Lastname"
            value={this.state.student.lastname || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.student.lastname && this.state.student.lastname === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.student.name || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.student.name && this.state.student.name === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation m:m _courses with course */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_courses">_courses</InputLabel>
            <Select
              multiple
              value={this.state.student._courses || []}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
              input={<Input id="_courses" name="_courses" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listCourse && this.props.listCourse.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.student._courses &&
                      this.state.student._courses.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
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

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/students/">Back to list</Link>

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
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsExam: bindActionCreators(ExamActions, dispatch),
    actionsCourse: bindActionCreators(CourseActions, dispatch),
  };
};

// Validate types
StudentEdit.propTypes = { 
  actionsStudent: PropTypes.object.isRequired,
  actionsExam: PropTypes.object.isRequired,
  actionsCourse: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    student: state.StudentEditReducer.student,
    listCourse: state.StudentEditReducer.listCourse,
    listExam: state.StudentEditReducer.listExam
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentEdit);
