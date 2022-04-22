import { render, screen } from "@testing-library/react";
import { Message } from '.';

describe("<Message />", () => {

  it("should render with the message 'Test'", () => {
    render(<Message message = "Test" />);
    const message = screen.getByText(/test/i);

    expect(message).toBeInTheDocument();
  })

  it("should match snapshot", () => {
    const {container} = render(<Message message = "Test" />);

    expect(container.firstChild).toMatchSnapshot();
  })
})