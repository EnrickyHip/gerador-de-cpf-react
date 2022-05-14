import "./style.css";
import P from "prop-types";

export const Button = ({ children, onClick }) => (
  <button onClick={onClick} type="button" className="btn">
    {children}
  </button>
);

Button.propTypes = {
  children: P.node.isRequired,
  onClick: P.func.isRequired,
};
