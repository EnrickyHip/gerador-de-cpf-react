import "./style.css";
import P from "prop-types";

export const Button = ({ text, onClick }) => (
  <button onClick={onClick} type="button" className="btn">
    {text}
  </button>
);

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
};
