import React, { FC, useState } from "react";

type Props = {
  addTask: (name: string) => void;
};

export const Form: FC<Props> = ({ addTask }) => {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(name);
    setName("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="タスク名を入力"
          onChange={handleChange}
        />
        <button type="submit">新規作成</button>
      </form>
    </div>
  );
};
