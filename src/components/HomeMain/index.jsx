import "./style.css";

import { useState } from "react";

import { Button } from "../Button";
import { Input } from "../Input";

import Cpf from "../../modules/Cpf";
import { getValidateMessage } from "../../functions/getValidateMessage";
import { Message } from "../Message";

const onlyNumbers = (string) => string.replace(/\D/g, "");

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

          <Button text="Gerar CPF" onClick={handleGenerate} />
          <Button text="Validar CPF" onClick={handleValidate} />

          <Message message={cpfMessage} />
        </div>
      </form>
    </main>
  );
}
