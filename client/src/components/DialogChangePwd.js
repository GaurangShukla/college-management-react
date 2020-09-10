// Dependencies
import React, { Component } from "react";
import Utils from "../utils/utils";
import crypto from "js-sha3";
import UserActions from "../redux/actions/UserActions";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class DialogChangePwd extends Component {
  // Init DialogChangePwd
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  // Confirm change password
  confirm() {
    if (!this.state.user.newPassword) {
      this.setState({ showError: "Insert a new password" });
    } else if (!this.state.user.oldPassword) {
      this.setState({
        showError: "Insert the old password"
      });
    } else if (
      this.state.user.newPassword !== this.state.user.confirmNewPassword
    ) {
      this.setState({
        showError: "Your new password and confirm password don't match"
      });
    } else {
      this.props.actionsUser
        .changePassword(
          crypto.sha3_512(this.state.user.newPassword),
          crypto.sha3_512(this.state.user.oldPassword)
        )
        .then(() => {
          this.setState({ user: {} });
          this.props.onConfirm();
        })
        .catch(err => {
          this.setState({ showError: "Old Password not valid" });
        });
    }
  }

  // Close Message
  closeMessage() {
    this.setState({ showError: false });
  }

  // Show content
  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Change password</DialogTitle>
        <DialogContent>
          <TextField
            id="oldPassword"
            label="Old Password"
            value={this.state.user.oldPassword || ""}
            onChange={Utils.handleChange.bind(this, "user")}
            margin="normal"
            fullWidth
            type="password"
          />

          <TextField
            id="newPassword"
            label="New Password"
            value={this.state.user.newPassword || ""}
            onChange={Utils.handleChange.bind(this, "user")}
            margin="normal"
            fullWidth
            type="password"
          />

          <TextField
            id="confirmNewPassword"
            label="Confirm New Password"
            value={this.state.user.confirmNewPassword || ""}
            onChange={Utils.handleChange.bind(this, "user")}
            margin="normal"
            fullWidth
            type="password"
          />

          {/* Confirm Message */}
          {this.state.showError && (
            <SnackbarContent
              style={{
                marginTop: "30px",
                maxWidth: "100%"
              }}
              aria-describedby="client-snackbar"
              message={<span id="client-snackbar">{this.state.showError}</span>}
              action={[
                <IconButton
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  onClick={this.closeMessage.bind(this)}
                >
                  <CloseIcon />
                </IconButton>
              ]}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose}>Cancel</Button>
          <Button onClick={this.confirm.bind(this)} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
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
DialogChangePwd.propTypes = {
  actionsUser: PropTypes.object.isRequired
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
)(DialogChangePwd);
