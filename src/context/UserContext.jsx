import { createContext } from "use-context-selector";
import React, { useReducer } from "react";

const initialState = {
  isLoggedIn: false,
  username: "",
  firstName: "",
  lastName: "",
  email: ""
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "logout":
      return { ...state, ...initialState };
    case "login":
      return { ...state, isLoggedIn: true, ...payload };
    default:
      return state;
  }
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
