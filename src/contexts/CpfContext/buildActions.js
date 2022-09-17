import Cpf from "cpf-manager";
import * as actionTypes from "./actionTypes";
import { onlyNumbers } from "./../../functions/onlyNumbers";

export const buildActions = (dispatch) => {
  return {
    generateCpf: () => generateCpf(dispatch),
    validateCpf: (cpfValue) => validateCpf(dispatch, cpfValue),
    typeCpf: (payload) => dispatch({ type: actionTypes.TYPE_CPF, payload }),
  };
};

function generateCpf(dispatch) {
  const cpf = Cpf.generate();
  dispatch({ type: actionTypes.GENERATE_CPF, payload: onlyNumbers(cpf) });
}

function validateCpf(dispatch, cpfValue) {
  const valid = Cpf.validate(cpfValue);
  if (valid) dispatch({ type: actionTypes.VALIDATE_CPF });
  else dispatch({ type: actionTypes.INVALIDATE_CPF });
}
