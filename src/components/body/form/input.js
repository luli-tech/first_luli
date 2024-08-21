import React from "react";
import { useState, useReducer } from "react";

let ACTIONS = {
  ADD_INFO: "add_info",
  TOGGLE: "toggle",
  DELETE: "delete",
};

// export function reducer(state, action) {
//   if (action.type === ACTIONS.ADD_INFO) {
//     return [...state, newState(action.payload.name, action.payload.age)];
//   }
// }

// function newState(name, age) {
//   return { name, age };
// }

function Form({ dispatch, setinitial, initial }) {
  // let [state, dispatch] = useReducer(reducer, []);
  // let [initial, setinitial] = useState({
  //   name: "",
  //   ugdoudage: "",
  // });

  function addInfo(event) {
    event.preventDefault();
    dispatch({
      type: ACTIONS.ADD_INFO,
      payload: { name: initial.name, age: initial.age },
    });
    setinitial({ name: "", age: "" });
  }

  console.log(initial.name, initial.age);

  return (
    <React.Fragment>
      <form onSubmit={addInfo}>
        <div className="input-container">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              let { name, value } = e.target;
              setinitial((prev) => ({
                ...prev,
                [name]: value,
              }));
            }}
            value={initial.name}
          />
        </div>
        <div className="input-container">
          <label>age:</label>
          <input
            type="number"
            name="age"
            onChange={(e) => {
              let { name, value } = e.target;
              setinitial((prev) => ({
                ...prev,
                [name]: value,
              }));
            }}
            value={initial.age}
          />
        </div>
        <button>See Results</button>
      </form>
    </React.Fragment>
  );
}
export default Form;
