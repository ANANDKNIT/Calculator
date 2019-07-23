import React from "react";
import { Card, Typography } from "@material-ui/core";
import GenericButton from "./common/OperationalButton";
import { connect } from "react-redux";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "=", "+", "-", "*", "/", "AC"];
const ButtonContainer = props => {
  return (
    <Card className="card">
      <Typography
        variant="h4"
        align="center"
        color="secondary"
        component="h6"
        className="calculator-heading"
      >
        Calculator
      </Typography>
      <textarea className="text-field" value={props.expression} />
      <GenericButton data={data} />
    </Card>
  );
};
const mapStateToProps = state => {
  return {
    expression: state.expression,
    result: state.result
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonContainer);
