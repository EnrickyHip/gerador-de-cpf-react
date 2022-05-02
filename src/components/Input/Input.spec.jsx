import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from ".";

describe("<Input />", () => {
  it("should call handleChange on each key pressed", () => {
    const text = "123";
    const fn = jest.fn();

    render(<Input handleChange={fn} />);

    const input = screen.getByPlaceholderText(/digite um CPF/i);
    userEvent.type(input, text);

    expect(fn).toBeCalledTimes(4);
  });

  /* ------------------------------------------------------- */

  it('should render with the value "123.456.789-00"', () => {
    const fn = jest.fn();

    render(<Input textInput="12345678900" handleChange={fn} />);

    const input = screen.getByDisplayValue("123.456.789-00");

    expect(input).toBeInTheDocument;
  });

  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<Input textInput="12345678900" handleChange={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
