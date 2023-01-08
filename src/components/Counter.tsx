import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };

    default:
      return state;
  }
};

type CounterState = {
  count: number;
};
type CounterAction = {
  type: string;
  payload: number;
};

export const Counter = () => {
  //const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(
    (state: CounterState, action: CounterAction) => {
      switch (action.type) {
        case "increment":
          return { count: state.count + action.payload };
        case "decrement":
          return { count: state.count - action.payload };

        default:
          return state;
      }
    },
    { count: 0 }
  );
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
    </>
  );
};
