// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import CourseEdit from "./pages/CourseEdit";
import CourseList from "./pages/CourseList";
import ExamEdit from "./pages/ExamEdit";
import ExamList from "./pages/ExamList";
import StudentEdit from "./pages/StudentEdit";
import StudentList from "./pages/StudentList";
import TeacherEdit from "./pages/TeacherEdit";
import TeacherList from "./pages/TeacherList";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/courses/:id" component={ CourseEdit }  />
              <PrivateRoute exact path="/courses" component={ CourseList }  />
              <PrivateRoute exact path="/exams/:id" component={ ExamEdit }  />
              <PrivateRoute exact path="/exams" component={ ExamList }  />
              <PrivateRoute exact path="/students/:id" component={ StudentEdit }  />
              <PrivateRoute exact path="/students" component={ StudentList }  />
              <PrivateRoute exact path="/teachers/:id" component={ TeacherEdit }  />
              <PrivateRoute exact path="/teachers" component={ TeacherList }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;