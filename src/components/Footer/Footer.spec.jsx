import { render, screen } from "@testing-library/react";
import { Footer } from ".";
import { P } from "../P";

describe("<Footer />", () => {
  it("should render correctly", () => {
    render(
      <Footer>
        <P>by: Enricky Hipólito</P>
      </Footer>,
    );
    const p = screen.getByText("by: Enricky Hipólito");

    expect(p).toBeInTheDocument();
  });

  /* ---------------------------------------- */

  it("should match snapshot", () => {
    const { container } = render(
      <Footer>
        <P>by: Enricky Hipólito</P>
      </Footer>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
