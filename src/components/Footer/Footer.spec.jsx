import { render, screen } from "@testing-library/react"
import { Footer } from '.';

describe("<Footer />", () => {

  it("should render correctly", () => {
    render(< Footer />)
    const p = screen.getByText('by: Enricky Hipólito');

    expect(p).toBeInTheDocument();
  })

  /* ---------------------------------------- */

  it("should match snapshot", () => {
    const {container} = render(< Footer />);
    expect(container.firstChild).toMatchSnapshot();
  })
})