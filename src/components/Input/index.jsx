import "./style.css";

import InputMask from "react-input-mask";
import { useCpfContext } from "../../contexts/CpfContext";
import { onlyNumbers } from "../../functions/onlyNumbers";

export const Input = () => {
  const [state, actions] = useCpfContext();

  let valid;
  if (state.isValid === null) valid = "";
  else valid = state.isValid ? "valid" : "invalid";

  const handleChange = (event) => {
    const { value } = event.target;
    actions.typeCpf(onlyNumbers(value));
  };

  return (
    <InputMask
      mask="999.999.999-99"
      id="cpf-input"
      className={`full-input ${valid}`}
      placeholder="Digite um CPF"
      autoComplete="off"
      value={state.cpfValue}
      onChange={handleChange}
    />
  );
};
