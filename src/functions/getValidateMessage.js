import Cpf from "../modules/Cpf";

export default () => {
  const cpfInput = document.querySelector("#cpf-input").value;
  const valid = Cpf.validate(cpfInput);

  if (valid) return "CPF válido"
  return "CPF inválido"
} 