import { render, screen } from "@testing-library/react";
import Home from ".";

describe("<Home />", () => {
  it("should render Footer and Header", () => {
    render(<Home />);

    const footer = screen.getByText("by: Enricky Hipólito");
    const header = screen.getByText("GERAR / VALIDAR CPF");

    expect(footer).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });
});
