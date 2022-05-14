import "./style.css";

import { useState } from "react";

import { Button } from "../Button";
import { Input } from "../Input";

import Cpf from "../../modules/Cpf";
import { getValidateMessage } from "../../functions/getValidateMessage";
import { P } from "../P";
import { onlyNumbers } from "../../functions/onlyNumbers";

export function HomeMain() {
  const [cpfMessage, setMessage] = useState("");
  const [cpfValue, setCpfValue] = useState("");
  const [isValid, setIsValid] = useState("");

  const handleGenerate = () => {
    const cpf = Cpf.generate();
    setCpfValue(onlyNumbers(cpf));
  };

  const handleValidate = () => {
    const valid = Cpf.validate(cpfValue);
    const message = getValidateMessage(valid);

    setIsValid(valid ? "valid" : "invalid");
    setMessage(message);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setCpfValue(onlyNumbers(value));
  };

  return (
    <main>
      <form onSubmit={(event) => event.preventDefault()}>
        <div id="container-box">
          <Input valid={isValid} cpfValue={cpfValue} handleChange={handleChange} />

          <Button onClick={handleGenerate}>Gerar CPF</Button>
          <Button onClick={handleValidate}>Validar CPF</Button>

          <P className="message">{cpfMessage}</P>
        </div>
      </form>
    </main>
  );
}
