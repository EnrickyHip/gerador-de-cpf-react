import "./style.css";
import P from "prop-types";

export const Button = ({ children, onButtonClick }) => {
  return (
    <button onClick={onButtonClick} type="button" className="btn">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
};
