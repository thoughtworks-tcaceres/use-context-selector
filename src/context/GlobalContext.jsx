import { CounterProvider, UserProvider } from "./index";
import React from "react";

export const GlobalProvider = ({ children }) => {
  return (
    <UserProvider>
      <CounterProvider>{children}</CounterProvider>
    </UserProvider>
  );
};
