import React, { useState } from "react";
import { ulid } from "ulid";
import { Form } from "./components/Form";
import { Todo } from "./components/Todo";
import { Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "taskid-1", name: "walk", completed: false },
    { id: "taskid-2", name: "sleep", completed: false },
    { id: "taskid-3", name: "eat", completed: false },
  ]);

  const addTask = (name: string) => {
    const newTask: Task = {
      id: `taskid-${ulid()}`,
      name: name,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h1>TODO List</h1>
      <Form addTask={addTask} />
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
