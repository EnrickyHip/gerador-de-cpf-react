import "./style.css"

import { Component } from "react";
import { Button } from "../Button";
import { Input } from "../Input";

import Cpf from "../../modules/Cpf";
import { getValidateMessage } from '../../functions/getValidateMessage';
import { Message } from "../Message";

export class HomeMain extends Component {

  state = {
    cpfMessage: '',
    cpfInput: '',
  }

  handleGenerate = () => {
    const cpf = Cpf.generate();
    this.setState({cpfInput : cpf})
  }

  handleValidate = () => {
    const message = getValidateMessage();
    this.setState({
      cpfMessage: message,
    });
  }

  handleChange = event => {
    const {value} = event.target

    this.setState({
      cpfInput: value,
    });
  }

  render(){
    const {cpfMessage, cpfInput} = this.state;

    return (
      <main>
        <form>
          <div>

            <Input textInput={cpfInput} handleChange={this.handleChange}/>

            <Button text="Gerar CPF" onClick={this.handleGenerate} />
            <Button text="Validar CPF" onClick={this.handleValidate} />

            <Message message={cpfMessage} />

          </div>
        </form>
      </main>
    )
  }
}

