import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "./components/Form";
import { Todo } from "./components/Todo";
import { Task } from "./types";
import { BE_URL } from "./constants";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = () => {
    axios.get(`${BE_URL}/tasks`).then(({ data }) => {
      setTasks(data);
    });
  };

  useEffect(() => fetchTasks(), []);

  const addTask = async (name: string) => {
    await axios
      .post(`${BE_URL}/tasks`, {
        name: name,
      })
      .catch((error) => {
        console.log(error.response);
      });
    fetchTasks();
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
