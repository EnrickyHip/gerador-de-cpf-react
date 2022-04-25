import P from "prop-types";

export const Message = ({ message = "" }) => <p>{message}</p>;

Message.defaultProps = {
  message: "",
};

Message.propTypes = {
  message: P.string,
};
