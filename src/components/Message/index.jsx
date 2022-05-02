import P from "prop-types";

export const Message = ({ message = "" }) => <p>{message}</p>;

Message.propTypes = {
  message: P.string,
};
