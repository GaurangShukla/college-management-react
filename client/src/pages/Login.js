// Dependencies
import React, { Component } from "react";
import Utils from "../utils/utils";
import crypto from "js-sha3";
import SecurityService from "../security/SecurityService";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import UserActions from "../redux/actions/UserActions";

// Material UI
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import ErrorIcon from "@material-ui/icons/Error";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

/** APIs

**/

class Login extends Component {
  // Init component state
  constructor(props) {
    super(props);
    this.state = {
      login: {
        username: "admin",
        password: "pass",
        remember: true
      },
      showError: false
    };
  }

  // Load data on start
  componentWillMount() {}

  // Login
  login(event) {
    event.preventDefault();
    var comp = this;
    comp.setState({ showError: false });

    this.props.actions
      .login(
        this.state.login.username,
        crypto.sha3_512(this.state.login.password)
      )
      .then(res => {
        if (comp.props.user.token) {
          // Set user
          if (comp.state.login.remember) {
            sessionStorage.removeItem("user");
            localStorage.setItem("user", JSON.stringify(comp.props.user));
          } else {
            localStorage.removeItem("user");
            sessionStorage.setItem("user", JSON.stringify(comp.props.user));
          }

          // Set header
          SecurityService.setAuthorization();
          comp.props.history.push("/home");
        } else {
          comp.setState({ showError: true });
        }
      });
  }

  // Close Error
  closeError() {
    this.setState({ showError: false });
  }

  // Show content
  render() {
    return (
      <div className="login-form">
        <div className="text-center">
          <Typography component="h1" variant="h5">
            Welcome
          </Typography>
        </div>
        <form onSubmit={this.login.bind(this)}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Uername</InputLabel>
            <Input
              id="username"
              name="username"
              autoComplete="username"
              value={this.state.login.username || ""}
              onChange={Utils.handleChange.bind(this, "login")}
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.login.password || ""}
              onChange={Utils.handleChange.bind(this, "login")}
            />
          </FormControl>
          <FormControlLabel
            control={
              <Switch
                id="remember"
                checked={this.state.login.remember || false}
                onChange={Utils.handleChangeCheck.bind(
                  this,
                  "login",
                  "remember"
                )}
                color="primary"
              />
            }
            label="Remember me"
            className="mt-20"
          />

          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign in
          </Button>

          {this.state.showError && (
            <SnackbarContent
              className="error mb-30"
              aria-describedby="client-snackbar"
              message={
                <span id="client-snackbar">
                  <ErrorIcon />
                  Login Fail
                </span>
              }
              action={[
                <IconButton
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  onClick={this.closeError.bind(this)}
                >
                  <CloseIcon />
                </IconButton>
              ]}
            />
          )}
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
};

// Validate types
Login.propTypes = {
  actions: PropTypes.object.isRequired
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    user: state.LoginReducer.user
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
