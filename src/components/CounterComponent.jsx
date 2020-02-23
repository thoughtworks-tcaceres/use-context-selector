import React from "react";
import { useContext } from "use-context-selector";
import { CounterContext } from "../context";

const CounterComponent = () => {
  console.log("rendered");
  const { state, dispatch } = useContext(CounterContext);

  return (
    <>
      <p>Current Count Value: {state}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>RESET</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
};

export default CounterComponent;
