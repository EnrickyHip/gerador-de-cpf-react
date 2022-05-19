import "./style.css";

import { HomeMain } from "../../components/HomeMain";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { P } from "../../components/P";
import { H1 } from "../../components/H1";
import { CpfContextProvider } from "../../contexts/CpfContext";

export default function Home() {
  return (
    <div className="app">
      <Header>
        <H1>GERAR / VALIDAR CPF</H1>
      </Header>

      <CpfContextProvider>
        <HomeMain />
      </CpfContextProvider>

      <Footer>
        <P>by: Enricky Hipólito</P>
      </Footer>
    </div>
  );
}
