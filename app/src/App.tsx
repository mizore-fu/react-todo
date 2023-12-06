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

  const deleteTask = async (id: string) => {
    await axios.delete(`${BE_URL}/tasks/${id}`).catch((error) => {
      console.log(error.response);
    });
    fetchTasks();
  };

  const toggleTaskCompleted = async (
    id: string,
    name: string,
    toggledCompleted: boolean
  ) => {
    await axios
      .put(`${BE_URL}/tasks/${id}`, {
        name: name,
        completed: toggledCompleted,
      })
      .catch((error) => {
        console.log(error.response);
      });
    fetchTasks();
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
