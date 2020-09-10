// Dependencies
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import SecurityService from "./security/SecurityService";

// Style
import "./styles/styles.css";

// Components
import Routes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {

  // Init component
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Check JWT token
  async componentWillMount() {
    await SecurityService.verifyToken();
    this.setState({ tokenChecked: true });
  }

  render() {
    return (
      <Fragment>
        {this.state.tokenChecked && (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Router>
              <Navbar />
              <Grid container spacing={0}>
                <Grid item md={3} />
                <Grid item xs={12} md={6}>
                  <Routes />
                </Grid>
              </Grid>
              <Footer />
            </Router>
          </MuiPickersUtilsProvider>
        )}
      </Fragment>
    );
  }
}

export default App;
