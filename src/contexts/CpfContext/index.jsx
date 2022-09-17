import { useRef } from "react";
import P from "prop-types";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { buildActions } from "./buildActions";
import { useSelector, useDispatch, Provider } from "react-redux";

const store = configureStore({ reducer });

export const CpfContextProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

CpfContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCpfContext = () => {
  const dispatch = useDispatch();
  const actions = useRef(buildActions(dispatch));
  const context = useSelector((state) => state);

  if (!context) throw new Error("You should use useCpfContext inside a CpfContextProvider");

  return [context, actions.current];
};
