import { Button } from "../Button";
import "./style.css"

export const HomeMain = ({cpfMessage, cpfInput, handleValidate, handleGenerate, typeInput}) => (
  <main>
    <form>

      <div>
        <input
          id = 'cpf-input' 
          className = 'full-input' 
          placeholder = 'Digite um CPF' 
          autoComplete='off'
          value = { cpfInput }
          maxLength = "14"
          onChange = { e => typeInput(e.target.value) }> 
          {/* esse atributo serve para ser possível a alteração do value do input quando o usuário digitar */}
        </input>

        <Button text = "Gerar CPF" onClick = { handleGenerate } /> 
        <Button text = "Validar CPF" onClick = { handleValidate } />       

        <p id='cpf-message'> { cpfMessage } </p>

      </div>

    </form>
  </main>
)

