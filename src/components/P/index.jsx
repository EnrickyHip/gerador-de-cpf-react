import Prop from "prop-types";

export const P = ({ children, ...props }) => <p {...props}>{children}</p>;

P.propTypes = {
  children: Prop.node.isRequired,
};
