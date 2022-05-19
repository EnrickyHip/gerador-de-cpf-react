import * as actionTypes from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GENERATE_CPF:
      return { ...state, cpfValue: action.payload };

    case actionTypes.VALIDATE_CPF:
      return { ...state, isValid: true, cpfMessage: "CPF válido" };

    case actionTypes.INVALIDATE_CPF:
      return { ...state, isValid: false, cpfMessage: "CPF inválido" };

    case actionTypes.TYPE_CPF:
      return { ...state, cpfValue: action.payload };

    default:
      return state;
  }
};
