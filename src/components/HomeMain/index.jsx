import "./style.css";

import { Button } from "../Button";
import { Input } from "../Input";
import { P } from "../P";
import { useCpfContext } from "../../contexts/CpfContext";

export function HomeMain() {
  const [state, actions] = useCpfContext();

  return (
    <main>
      <form onSubmit={(event) => event.preventDefault()}>
        <div id="container-box">
          <Input />

          <Button onButtonClick={actions.generateCpf}>Gerar CPF</Button>
          <Button onButtonClick={() => actions.validateCpf(state.cpfValue)}>Validar CPF</Button>

          <P className="message">{state.cpfMessage}</P>
        </div>
      </form>
    </main>
  );
}
