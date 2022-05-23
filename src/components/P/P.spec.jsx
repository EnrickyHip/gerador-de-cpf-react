import { render, screen } from "@testing-library/react";
import { P } from ".";

describe("<P />", () => {
  it("should render with text 'Test'", () => {
    render(<P>Test</P>);

    const p = screen.getByText("Test");

    expect(p).toBeInTheDocument();
  });
});
