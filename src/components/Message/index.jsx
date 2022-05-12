import P from "prop-types";
import "./style.css";

export const Message = ({ message = "" }) => <p className="message">{message}</p>;

Message.propTypes = {
  message: P.string,
};
