import React from "react";
import { Form } from "./components/Form";
import { Todo } from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>TODO List</h1>
      <Form />
      <div>
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
}

export default App;
