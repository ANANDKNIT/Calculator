import * as ActionTypes from "../actions/CalculatorActions";

const InitialState = {
  expression: "",
  result: ""
};

const CalculatorReducer = (state = InitialState, action) => {
  let newState;
  switch (action.type) {
    case ActionTypes.ADD_NEW_VALUE:
      newState = {
        ...state,
        expression: state.expression + action.value
      };
      return newState;

    case ActionTypes.CLEAR_VALUES:
      newState = {
        expression: "",
        result: ""
      };
      return newState;

    case ActionTypes.EVALUATE_EXPRESSION:
      newState = {
        ...state,
        result: action.result,
        expression: action.result
      };
      return newState;

    case ActionTypes.PERFORM_OPERATION:
      newState = {
        ...state,
        expression: state.expression + action.operator
      };
      return newState;

    default:
      return state;
  }
};
export default CalculatorReducer;
