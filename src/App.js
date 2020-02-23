import React from "react";
import "./styles.css";
import { UserProvider, CounterProvider, GlobalProvider } from "./context";

import CounterComponent from "./components/CounterComponent";
import UserComponent from "./components/UserComponent";

export default function App() {
  return (
    <GlobalProvider>
      {/* <UserProvider>
      <CounterProvider> */}
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <CounterComponent />
        <UserComponent />
      </div>
      {/* </CounterProvider>
    </UserProvider> */}
    </GlobalProvider>
  );
}
