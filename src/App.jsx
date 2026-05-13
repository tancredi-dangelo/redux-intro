import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Button } from "bootstrap";

function App() {
  const count = useSelector((state) => state.main.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Il valore di count è {count}</h1>

      <Button
        onClick={() => {
          dispatch({
            type: "INCREMENT",
            payload: 1,
          });
        }}
      >
        Incrementa
      </Button>
    </>
  );
}

export default App;
