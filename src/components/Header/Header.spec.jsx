import { render, screen } from "@testing-library/react"
import { Header } from '.';

describe("<Header />", () => {

  it("should render correctly", () => {
    render(< Header />)
    const h1 = screen.getByRole("heading", { name: 'GERAR / VALIDAR CPF' });

    expect(h1).toBeInTheDocument();
  })

  /* ---------------------------------------- */

  it("should match snapshot", () => {
    const {container} = render(< Header />);
    expect(container.firstChild).toMatchSnapshot();
  })
})