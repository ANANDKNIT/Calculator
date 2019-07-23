import React from "react";
import { Card, Typography } from "@material-ui/core";
import GenericButton from "./common/OperationalButtons";
import { connect } from "react-redux";
import * as ActionTypes from "../store/actions/CalculatorActions";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/", "=", "AC"];
const ButtonContainer = props => {

  return (
    <Card className="card">
      <Typography
        variant="h4"
        align="center"
        color="secondary"
        component="h6"
        gutterBottom={true}
      >
        Calculator
      </Typography>
      <textarea
        className="text-field"
        onChange={()=>{}}
        value={props.expression}
      />
      <GenericButton data={data} />
    </Card>
  );
};
const mapStateToProps = state => {
  return {
    expression: state.expression,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // to handle typing
    handleAddNewValue: value =>
      dispatch({ type: ActionTypes.ADD_NEW_VALUE, value: value })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonContainer);
