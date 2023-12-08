import React, { FC, useState } from "react";

type Props = {
  addTask: (name: string) => void;
};

export const Form: FC<Props> = ({ addTask }) => {
  const [name, setName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "") {
      setErrorMessage("タスク名は1文字以上にしてください。");
      return;
    }

    addTask(name);
    setName("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value !== "") {
      setErrorMessage("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p hidden={errorMessage === ""}>{errorMessage}</p>
        <input
          type="text"
          value={name}
          placeholder="タスク名を入力"
          onChange={handleChange}
        />
        <button className="button button--level1" type="submit">
          新規作成
        </button>
      </form>
    </div>
  );
};
