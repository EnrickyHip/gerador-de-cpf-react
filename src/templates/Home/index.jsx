import './style.css';
import { Component } from 'react';
import Cpf from "../../modules/Cpf";
import { HomeMain } from '../../components/HomeMain';
import getValidateMessage from '../../functions/getValidateMessage';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default class Home extends Component {

  state = {
    cpfInput: '',
    cpfMessage: ''
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

  typeInput = value => {
    this.setState({
      cpfInput: value
    });
  }

  render() {
    const {cpfMessage} = this.state;
    const {cpfInput} = this.state;

    return (
      <div className="app">

        <Header />

        <HomeMain 
          cpfMessage = {cpfMessage}
          cpfInput = {cpfInput}
          handleValidate = {this.handleValidate}
          handleGenerate = {this.handleGenerate}
          typeInput = {this.typeInput}
        />

         <Footer />     

      </div>
    )
  }

}
