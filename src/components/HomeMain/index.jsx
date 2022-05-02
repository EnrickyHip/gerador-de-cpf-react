import "./style.css";

import { useState } from "react";

import { Button } from "../Button";
import { Input } from "../Input";

import Cpf from "../../modules/Cpf";
import { getValidateMessage } from "../../functions/getValidateMessage";
import { Message } from "../Message";

export function HomeMain() {
  const [cpfMessage, setMessage] = useState("");
  const [cpfInput, setInput] = useState("");
  const [isValid, setIsValid] = useState("");

  const handleGenerate = () => {
    const cpf = Cpf.generate();
    setInput(cpf);
  };

  const handleValidate = () => {
    const valid = Cpf.validate(cpfInput);
    const message = getValidateMessage(valid);

    setIsValid(valid ? "valid" : "invalid");
    setMessage(message);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  return (
    <main>
      <form onSubmit={(event) => event.preventDefault()}>
        <div>
          <Input valid={isValid} textInput={cpfInput} handleChange={handleChange} />

          <Button text="Gerar CPF" onClick={handleGenerate} />
          <Button text="Validar CPF" onClick={handleValidate} />

          <Message message={cpfMessage} />
        </div>
      </form>
    </main>
  );
}
