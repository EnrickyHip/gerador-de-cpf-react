import { render, screen } from "@testing-library/react";
import { Header } from ".";
import { H1 } from "../H1";

describe("<Header />", () => {
  it("should render correctly", () => {
    render(
      <Header>
        <H1>GERAR / VALIDAR CPF</H1>
      </Header>,
    );
    const h1 = screen.getByRole("heading", { name: "GERAR / VALIDAR CPF" });

    expect(h1).toBeInTheDocument();
  });

  /* ---------------------------------------- */

  it("should match snapshot", () => {
    const { container } = render(
      <Header>
        <H1>GERAR / VALIDAR CPF</H1>
      </Header>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
