import Cpf from "../modules/Cpf";

export const getValidateMessage = () => {
  const cpfInput = document.querySelector("#cpf-input").value;
  const valid = Cpf.validate(cpfInput);

  if (valid) return "CPF válido"
  return "CPF inválido"
} 