import Prop from "prop-types";

export const H1 = ({ children }) => <h1>{children}</h1>;

H1.propTypes = {
  children: Prop.node.isRequired,
};
