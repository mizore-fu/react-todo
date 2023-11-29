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

  const deleteTask = (id: string) => {
    const reminingTasks = tasks.filter((task: Task) => id !== task.id);
    setTasks(reminingTasks);
  };

  const toggleTaskCompleted = (id: string) => {
    const updatedTasks: Task[] = tasks.map((task: Task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>TODO List</h1>
      <Form addTask={addTask} />
      <div>
        {tasks.map((task: Task) => {
          return (
            <Todo
              key={task.id}
              id={task.id}
              name={task.name}
              completed={task.completed}
              deleteTask={deleteTask}
              toggleTaskCompleted={toggleTaskCompleted}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
