import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HomeMain } from ".";

describe("<Button />", () => {
  it("should render input, generate button and validate button", () => {
    render(<HomeMain />);

    const input = screen.getByPlaceholderText(/digite um cpf/i);
    const generateButton = screen.getByRole("button", { name: /gerar cpf/i });
    const validateButton = screen.getByRole("button", { name: /validar cpf/i });

    expect(input).toBeInTheDocument();
    expect(generateButton).toBeInTheDocument();
    expect(validateButton).toBeInTheDocument();
  });

  it("should generate CPF", () => {
    render(<HomeMain />);

    const input = screen.getByPlaceholderText(/digite um cpf/i);
    const generateButton = screen.getByRole("button", { name: /gerar cpf/i });

    expect(input.value).toBe("");

    userEvent.click(generateButton);

    expect(input.value).not.toBe("");
  });

  it("should validate CPF", () => {
    render(<HomeMain />);

    const input = screen.getByPlaceholderText(/digite um cpf/i);
    const validateButton = screen.getByRole("button", { name: /validar cpf/i });

    fireEvent.change(input, { target: { value: "45518575807" } });
    expect(input.value).toBe("455.185.758-07");

    userEvent.click(validateButton);
    const message = screen.getByText("CPF válido");
    expect(message).toBeInTheDocument();
  });
});
