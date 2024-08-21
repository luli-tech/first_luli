import Nav from "../src/components/nav";
import Form from "./components/body/form/input";
import Results from "./components/body/formResult";
import React, { useState, useReducer } from "react";

const ACTIONS = {
  ADD_INFO: "add_info",
  TOGGLE: "toggle",
  DELETE: "delete",
};

function reducer(state, action) {
  if (action.type === ACTIONS.ADD_INFO)
    return [...state, newState(action.payload.name, action.payload.age)];
  if (action.type === ACTIONS.TOGGLE) {
    return state.map((m) =>
      m.id === action.payload.id ? { ...m, complete: !m.complete } : m
    );
  }
  if (action.type === ACTIONS.DELETE) {
    return state.filter((m) => m.id !== action.payload.id);
  }
}

function newState(name, age) {
  return { name, age, id: Date.now(), complete: false };
}

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [initial, setInitial] = useState({
    name: "",
    age: "",
  });

  function toggle(id) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id } });
  }

  function deleteItem(id) {
    dispatch({ type: ACTIONS.DELETE, payload: { id } });
  }

  console.log(state);

  return (
    <div className="main-container">
      <Nav initial={state} />
      <Form dispatch={dispatch} initial={initial} setinitial={setInitial} />
      <Results toggle={toggle} deleteItem={deleteItem} initial={state} />
    </div>
  );
}

export default App;
