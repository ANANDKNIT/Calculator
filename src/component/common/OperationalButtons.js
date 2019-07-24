/* eslint no-eval: 0 */
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as ActionTypes from "../../store/actions/CalculatorActions";

const GenericButton = props => {
  const [getvalue, setValue] = useState("");

  const handleButtonClick = value => {
    // invalid operation if previous and new values are operator
    if (!Number(value) && !Number(getvalue)) {
      // handle errors
      console.log("doing something wrong");
      return;
    }

    // button click operations
    switch (value) {
      case "=":
        // evaluate the redux expression
        const result = props.expression ? eval(props.expression) : "";
        props.handleCalculatedResult(result);
        break;
      case "AC":
        setValue("");
        props.clearValues();
        break;
      case "+":
      case "-":
      case "/":
      case "*":
        props.handleOperation(value);
        setValue("");
        break;
      default:
        setValue(getvalue.concat(value));
        props.handleAddNewValue(value);
    }
  };

  return (
    <div className="button-wrapper">
      {props.data.map(item => (
        <Button
          key={item}
          variant="contained"
          className="button"
          color={item === "AC" ? "secondary" : "default"}
          onClick={() => handleButtonClick(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expression: state.expression
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAddNewValue: value =>
      dispatch({ type: ActionTypes.ADD_NEW_VALUE, value: value }),

    clearValues: () => dispatch({ type: ActionTypes.CLEAR_VALUES }),

    handleCalculatedResult: result =>
      dispatch({ type: ActionTypes.EVALUATE_EXPRESSION, result: result }),

    handleOperation: operator =>
      dispatch({ type: ActionTypes.PERFORM_OPERATION, operator: operator })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericButton);
