import P from "prop-types";

export const Header = ({ children }) => <header>{children}</header>;

Header.propTypes = {
  children: P.node.isRequired,
};
