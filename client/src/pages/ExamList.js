// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import ExamActions from "../redux/actions/ExamActions";

// END IMPORT ACTIONS

/** APIs

* actionsExam.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsExam.list
*	@description CRUD ACTION list
*

**/


class ExamList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsExam.loadExamList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsExam.deleteExam(this.state.idDelete).then(data => {
      this.props.actionsExam.loadExamList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "place",
        type: "string",
        label: "Place"
      }, 
      {
        id: "score",
        type: "number",
        label: "Score"
      }, 
      {
        id: "valid",
        type: "boolean",
        label: "Valid"
      },
    ];
    const link = "/exams/";

    return (
      <div>
        <h1>Exam List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Place</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Valid</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/exams/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.place }</TableCell>
                <TableCell align="right">{ row.score }</TableCell>
                <TableCell align="right">{ row.valid }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/exams/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsExam: bindActionCreators(ExamActions, dispatch),
  };
};

// Validate types
ExamList.propTypes = { 
  actionsExam: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.ExamListReducer.listExam
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExamList);
