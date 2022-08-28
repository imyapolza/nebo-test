import React, { Dispatch } from "react";
import { setCharacters, setLoading } from "./actions";
import reducer, { initalState } from "./reducer";

const actions = {
  setCharacters,
  setLoading,
};

const DadJokeContext = React.createContext({
  state: initalState,
  dispatch: (func) => null,
});

const DadJokeActionsContext = React.createContext(actions);

export function DadJokeContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initalState);

  return (
    <DadJokeContext.Provider value={{ state, dispatch }}>
      <DadJokeActionsContext.Provider value={actions}>
        {children}
      </DadJokeActionsContext.Provider>
    </DadJokeContext.Provider>
  );
}

export function useDadJokeState() {
  return React.useContext(DadJokeContext);
}

export function useDadJokeActions() {
  return React.useContext(DadJokeActionsContext);
}
