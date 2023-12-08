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
    <div className="todoItem">
      <div className="todoItem__checkbox">
        <input
          className="checkbox"
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id, name, !completed)}
        />
      </div>
      <p className="todoItem__title">{name}</p>
      <div className="todoItem__button">
        <button
          className="button button--level2"
          onClick={() => deleteTask(id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};
