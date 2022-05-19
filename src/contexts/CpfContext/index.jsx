import { createContext, useContext, useReducer, useRef } from "react";
import P from "prop-types";
import { initialState } from "./initialState";
import { reducer } from "./reducer";
import { buildActions } from "./buildActions";

export const Context = createContext();

export const CpfContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actionsRef = useRef(buildActions(dispatch));
  const actions = actionsRef.current;

  return <Context.Provider value={[state, actions]}>{children}</Context.Provider>;
};

CpfContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCpfContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("You should use useCpfContext inside a CpfContextProvider");
  }

  return [...context];
};
