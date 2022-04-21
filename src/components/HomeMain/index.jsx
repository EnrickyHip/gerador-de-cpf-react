import "./style.css"

import { Component } from "react";
import { Button } from "../Button";
import { Input } from "../Input";

import Cpf from "../../modules/Cpf";
import { getValidateMessage } from '../../functions/getValidateMessage';

export class HomeMain extends Component {

  state = {
    cpfMessage: '',
    cpfInput: ''
  }

  handleGenerate = () => {
    const cpf = Cpf.generate();
    this.setState({cpfInput : cpf})
  }

  handleValidate = () => {
    const message = getValidateMessage();
    this.setState({
      cpfMessage: message
    });
  }

  typeInput = event => {
    const {value} = event.target

    this.setState({
      cpfInput: value
    });
  }

  render(){
    const {cpfMessage, cpfInput} = this.state;

    return (
      
      <main>
        <form>
          <div>

            <Input cpfInput = {cpfInput} typeInput = {this.typeInput}/>

            <Button text = "Gerar CPF" onClick = { this.handleGenerate } /> 
            <Button text = "Validar CPF" onClick = { this.handleValidate } />       

            <p id='cpf-message'> { cpfMessage } </p>

          </div>
        </form>
      </main>
    )
  }
}

