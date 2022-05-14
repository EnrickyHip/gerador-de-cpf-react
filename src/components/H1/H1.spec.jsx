import { render, screen } from "@testing-library/react";
import { H1 } from ".";

describe("<H1 />", () => {
  it("should render with text 'Test'", () => {
    render(<H1>Test</H1>);

    const p = screen.getByText("Test");

    expect(p).toBeInTheDocument();
  });
});
