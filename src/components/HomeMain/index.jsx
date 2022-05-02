import "./style.css";

import { Button } from "../Button";
import { Input } from "../Input";

import Cpf from "../../modules/Cpf";
import { getValidateMessage } from "../../functions/getValidateMessage";
import { Message } from "../Message";
import { useState } from "react";

export function HomeMain() {
  const [cpfMessage, setMessage] = useState("");
  const [cpfInput, setInput] = useState("");

  const handleGenerate = () => {
    const cpf = Cpf.generate();
    setInput(cpf);
  };

  const handleValidate = () => {
    const message = getValidateMessage();
    setMessage(message);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  return (
    <main>
      <form>
        <div>
          <Input textInput={cpfInput} handleChange={handleChange} />

          <Button text="Gerar CPF" onClick={handleGenerate} />
          <Button text="Validar CPF" onClick={handleValidate} />

          <Message message={cpfMessage} />
        </div>
      </form>
    </main>
  );
}
