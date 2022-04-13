import '../CSS/App.css';
import { Component} from 'react';
import Cpf from "../../modules/Cpf";

class App extends Component {

  state = {
    cpfInput: '',
    cpfMessage: ''
  }

  generate = () => {
    const cpf = Cpf.generate();
    this.setState({cpfInput : cpf})
  }

  validate = () => {
    let message;
    const cpfInput = document.querySelector("#cpf-input").value;
    const valid = Cpf.validate(cpfInput);

    if (valid) message = "CPF válido"
    if (!valid) message = "CPF inválido"

    this.setState({
      cpfMessage: message
    });

  }

  onTodoChange = value => {
    this.setState({
      cpfInput: value
    });
}

  render() {
    const {cpfMessage} = this.state;
    const {cpfInput} = this.state;

    return (
      <div className="app">
        
        <header>
          <h1>GERAR / VALIDAR CPF</h1>
        </header>

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
                onChange = {e => this.onTodoChange(e.target.value)}> 
                {/* esse atributo serve para ser possível a alteração do value do input quando o usuário digitar */}
              </input>

              <button onClick = { this.generate } type="button" className='btn'>Gerar CPF</button>

              <button onClick = { this.validate } type="button" className='btn'>Validar CPF</button>

              <p id='cpf-message'> { cpfMessage } </p>

            </div>

          </form>
        </main>

        <footer>
          <p>by: Enricky Hipólito</p>
        </footer>
        
      </div>
    )
  }

}

export default App;
