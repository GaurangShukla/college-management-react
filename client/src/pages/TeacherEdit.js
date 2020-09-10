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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";

// Custom Actions


// START IMPORT ACTIONS
import TeacherActions from "../redux/actions/TeacherActions";
import ExamActions from "../redux/actions/ExamActions";
import CourseActions from "../redux/actions/CourseActions";

// END IMPORT ACTIONS

/** APIs

* actionsTeacher.create
*	@description CRUD ACTION create
*
* actionsTeacher.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsTeacher.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsExam.findBy_teacher
*	@description CRUD ACTION findBy_teacher
*	@param Objectid key - Id of model to search for
*
* actionsCourse.list
*	@description CRUD ACTION list
*

**/

class TeacherEdit extends Component {
  // Init teacher
  constructor(props) {
    super(props);
    this.state = {
      teacher: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsTeacher.loadTeacher(this.props.match.params.id);
      this.props.actionsExam.findBy_teacher(this.props.match.params.id);
    }
    
    this.props.actionsCourse.loadCourseList();
  }

  // Insert props teacher in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      teacher: props.teacher
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.teacher._id) {
      this.props.actionsTeacher.saveTeacher(this.state.teacher).then(data => {
        this.props.history.push("/teachers/");
      });
    } else {
      this.props.actionsTeacher.createTeacher(this.state.teacher).then(data => {
        this.props.history.push("/teachers/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Teacher Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="lastname"
            label="Lastname"
            value={this.state.teacher.lastname || ""}
            onChange={Utils.handleChange.bind(this, "teacher")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.teacher.lastname && this.state.teacher.lastname === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.teacher.name || ""}
            onChange={Utils.handleChange.bind(this, "teacher")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.teacher.name && this.state.teacher.name === ""
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
              value={this.state.teacher._courses || []}
              onChange={Utils.handleChangeSelect.bind(this, "teacher")}
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
                      this.state.teacher._courses &&
                      this.state.teacher._courses.indexOf(item._id) === -1
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
            <Link to="/teachers/">Back to list</Link>

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
    actionsTeacher: bindActionCreators(TeacherActions, dispatch),
    actionsExam: bindActionCreators(ExamActions, dispatch),
    actionsCourse: bindActionCreators(CourseActions, dispatch),
  };
};

// Validate types
TeacherEdit.propTypes = { 
  actionsTeacher: PropTypes.object.isRequired,
  actionsExam: PropTypes.object.isRequired,
  actionsCourse: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    teacher: state.TeacherEditReducer.teacher,
    listCourse: state.TeacherEditReducer.listCourse,
    listExam: state.TeacherEditReducer.listExam
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeacherEdit);
