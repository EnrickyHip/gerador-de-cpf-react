import "./style.css";
import P from "prop-types";

export const Footer = ({ children }) => <footer>{children}</footer>;

Footer.propTypes = {
  children: P.node.isRequired,
};
