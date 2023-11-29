import React, { FC } from "react";

type Props = {
  id: string;
  name: string;
  completed: boolean;
  toggleTaskCompleted: (id: string) => void;
};

export const Todo: FC<Props> = ({
  id,
  name,
  completed,
  toggleTaskCompleted,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={completed}
        onChange={() => toggleTaskCompleted(id)}
      />
      <p>{name}</p>
      <button>delete</button>
    </div>
  );
};
