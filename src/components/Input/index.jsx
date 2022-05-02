import "./style.css";
import P from "prop-types";

import InputMask from "react-input-mask";

export const Input = ({ valid = "", textInput = "", handleChange }) => (
  <InputMask
    mask="999.999.999-99"
    id="cpf-input"
    className={`full-input ${valid}`}
    placeholder="Digite um CPF"
    autoComplete="off"
    value={textInput}
    onChange={handleChange}
  />
);

Input.propTypes = {
  textInput: P.string,
  valid: P.string,
  handleChange: P.func.isRequired,
};
