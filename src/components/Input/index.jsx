import "./style.css";
import P from "prop-types";

export const Input = ({ textInput = "", handleChange }) => (
  <input
    id="cpf-input"
    className="full-input"
    placeholder="Digite um CPF"
    autoComplete="off"
    value={textInput}
    maxLength="14"
    onChange={handleChange}
  >
    {/* esse atributo serve para ser possível a alteração do value do input quando o usuário digitar */}
  </input>
);

Input.defaultProps = {
  textInput: "",
};

Input.propTypes = {
  textInput: P.string,
  handleChange: P.func.isRequired,
};
