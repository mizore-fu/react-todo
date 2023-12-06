import React, { FC } from "react";

type Props = {
  id: string;
  name: string;
  completed: boolean;
  deleteTask: (id: string) => void;
  toggleTaskCompleted: (
    id: string,
    name: string,
    toggledCompleted: boolean
  ) => void;
};

export const Todo: FC<Props> = ({
  id,
  name,
  completed,
  deleteTask,
  toggleTaskCompleted,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={completed}
        onChange={() => toggleTaskCompleted(id, name, !completed)}
      />
      <p>{name}</p>
      <button onClick={() => deleteTask(id)}>delete</button>
    </div>
  );
};
