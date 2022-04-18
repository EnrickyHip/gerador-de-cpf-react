import "./style.css"

export const Input = ({cpfInput, typeInput}) => (
  <input
    id = 'cpf-input' 
    className = 'full-input' 
    placeholder = 'Digite um CPF' 
    autoComplete='off'
    value = { cpfInput }
    maxLength = "14"
    onChange = { typeInput }> 
    {/* esse atributo serve para ser possível a alteração do value do input quando o usuário digitar */}
  </input>
)