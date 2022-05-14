import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe("<Button />", () => {
  it("should render the button with the text 'Test'", () => {
    const fn = jest.fn();
    render(<Button onClick={fn}>Test</Button>);
    const button = screen.getByRole("button", { name: /test/i });

    expect(button).toBeInTheDocument();
  });

  /* -------------------------------- */

  it("should call function onClick", () => {
    const fn = jest.fn();
    render(<Button onClick={fn}>Test</Button>);

    const button = screen.getByRole("button", { name: /test/i });
    userEvent.click(button);

    expect(fn).toBeCalled();
  });

  /* -------------------------------- */

  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<Button onClick={fn}>Test</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
