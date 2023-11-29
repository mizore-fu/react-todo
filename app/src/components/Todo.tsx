import React, { FC } from "react";

type Props = {
  name: string;
  completed: boolean;
};

export const Todo: FC<Props> = ({ name, completed }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} />
      <p>{name}</p>
      <button>delete</button>
    </div>
  );
};
