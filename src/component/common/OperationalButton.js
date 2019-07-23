import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as ActionTypes from "../../store/actions/CalculatorActions";

const GenericButton = props => {
  const [getvalue, setValue] = useState("");
  
  const handleButtonClick = value => {
    if(!Number(value) && !Number(getvalue))
    {
      console.log('Something doing wrong');
      return;
    }
    switch (value) {
      case "=":
        const result = props.expression ? eval(props.expression) : "";
        props.handleCalculatedResult(result);
        break;
      case "AC":
        setValue("");
        props.clearValue();
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
          color={item==="AC"?"primary":''}
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
      dispatch({
        type: ActionTypes.ADD_NEW_VALUE,
        value: value
      }),
    clearValue: () => dispatch({ type: ActionTypes.CLEAR_VALUES }),
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
