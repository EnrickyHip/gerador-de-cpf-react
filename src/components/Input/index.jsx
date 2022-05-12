import "./style.css";
import P from "prop-types";

import InputMask from "react-input-mask";

export const Input = ({ valid = "", cpfValue = "", handleChange }) => (
  <InputMask
    mask="999.999.999-99"
    id="cpf-input"
    className={`full-input ${valid}`}
    placeholder="Digite um CPF"
    autoComplete="off"
    value={cpfValue}
    onChange={handleChange}
  />
);

Input.propTypes = {
  cpfValue: P.string,
  valid: P.string,
  handleChange: P.func.isRequired,
};
