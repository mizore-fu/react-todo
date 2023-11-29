import React from "react";
import { Form } from "./components/Form";
import { Todo } from "./components/Todo";
import { Task } from "./types";

const tasks: Task[] = [
  { id: "1", name: "walk", completed: false },
  { id: "2", name: "sleep", completed: false },
  { id: "3", name: "sleep", completed: false },
];

function App() {
  return (
    <div className="App">
      <h1>TODO List</h1>
      <Form />
      <div>
        {tasks.map((task: Task) => {
          return (
            <Todo key={task.id} name={task.name} completed={task.completed} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
