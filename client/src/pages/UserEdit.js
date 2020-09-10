// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";
import DialogChangePwdAdmin from "../components/DialogChangePwdAdmin";
import crypto from "js-sha3";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import UserActions from "../redux/actions/UserActions";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Add from "@material-ui/icons/Add";
import Delete from "@material-ui/icons/Delete";

/** APIs

* UserService.create
*	@description CRUD ACTION create
*
* UserService.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id 
*
* UserService.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class UserEdit extends Component {
  // Init user
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      roles: {},
      openChangePwd: false
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsUser.loadUser(this.props.match.params.id);
    }
  }

  // Insert props user in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      user: props.user
    });
  }

  // Open Change password modal
  openDialogChangePwd() {
    this.setState({ openChangePwd: true });
  }

  // Close Change password modal
  closeDialogChangePwd() {
    this.setState({ openChangePwd: false });
  }

  // Callback Change password modal
  confirmDialogChangePwd(passwordNew, passwordOld) {
    this.setState({ openChangePwd: false });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.user._id) {
      this.props.actionsUser.saveUser(this.state.user).then(data => {
        this.props.history.push("/users/");
      });
    } else {
      var user = this.state.user;
      user.password = crypto.sha3_512(this.state.user.password);
      this.props.actionsUser.createUser(user).then(data => {
        this.props.history.push("/users/");
      });
    }
  }

  changeRole(i, event) {
    const value = event.target.value;
    var state = this.state;
    state.user.roles[i] = value;
    this.setState(state);
  }

  addRole(event) {
    var state = this.state;
    if (!state.user.roles) state.user.roles = [];
    state.user.roles.push(this.state.roles.newRole);
    state.roles.newRole = "";
    this.setState(state);
  }

  removeRole(i, event) {
    var state = this.state;
    state.user.roles.splice(i, 1);
    this.setState(state);
  }

  // Show content
  render() {
    return (
      <div>
        <h1>User Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>
          <TextField
            id="username"
            label="Username"
            value={this.state.user.username || ""}
            onChange={Utils.handleChange.bind(this, "user")}
            margin="normal"
            fullWidth
            required
            {...(this.state.user._id ? { disabled: true } : {})}
            {...(!this.state.user.username && this.state.user.username === ""
              ? { error: true }
              : {})}
          />

          {!this.state.user._id && (
            <TextField
              id="password"
              label="Password"
              value={this.state.user.password || ""}
              onChange={Utils.handleChange.bind(this, "user")}
              margin="normal"
              fullWidth
              required
              type="password"
              {...(!this.state.user.password && this.state.user.password === ""
                ? { error: true }
                : {})}
            />
          )}

          <TextField
            id="name"
            label="Name"
            value={this.state.user.name || ""}
            onChange={Utils.handleChange.bind(this, "user")}
            margin="normal"
            fullWidth
          />

          <TextField
            id="surname"
            label="Surname"
            value={this.state.user.surname || ""}
            onChange={Utils.handleChange.bind(this, "user")}
            margin="normal"
            fullWidth
          />

          <TextField
            id="mail"
            label="Mail"
            value={this.state.user.mail || ""}
            onChange={Utils.handleChange.bind(this, "user")}
            margin="normal"
            fullWidth
          />

          <h2>Roles</h2>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item xs={10}>
              <TextField
                id="newRole"
                label="Add a new role..."
                value={this.state.roles.newRole || ""}
                onChange={Utils.handleChange.bind(this, "roles")}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <Fab
                onClick={this.addRole.bind(this)}
                size="small"
                color="primary"
              >
                <Add />
              </Fab>
            </Grid>
          </Grid>

          {this.state.user &&
            this.state.user.roles &&
            this.state.user.roles.map((role, i) => {
              return (
                <Grid container spacing={8} alignItems="flex-end" key={i}>
                  <Grid item xs={10}>
                    <TextField
                      id="roles[0]"
                      label="Add a new role..."
                      value={this.state.user.roles[i] || ""}
                      onChange={this.changeRole.bind(this, i)}
                      margin="normal"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Fab
                      size="small"
                      color="secondary"
                      onClick={this.removeRole.bind(this, i)}
                    >
                      <Delete />
                    </Fab>
                  </Grid>
                </Grid>
              );
            })}

          {/* Footer */}
          <div className="footer-card">
            <Button
              onClick={this.openDialogChangePwd.bind(this)}
              variant="contained"
              color="secondary"
              style={{ float: "left" }}
            >
              Change Password
            </Button>
            <DialogChangePwdAdmin
              idUser={this.state.user._id}
              open={this.state.openChangePwd}
              onClose={this.closeDialogChangePwd.bind(this)}
              onConfirm={this.confirmDialogChangePwd.bind(this)}
            />

            <Link to="/users/">Back to list</Link>

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
    actionsUser: bindActionCreators(UserActions, dispatch)
  };
};

// Validate types
UserEdit.propTypes = {
  actionsUser: PropTypes.object.isRequired
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    user: state.UserEditReducer.user
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEdit);
