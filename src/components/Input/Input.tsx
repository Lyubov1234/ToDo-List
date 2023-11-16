import React, { BaseSyntheticEvent, useContext, useState } from "react";
import { TasksContext } from "../../store/context";

interface Props {
  onChange: (newValue: string) => void;
}

const Input: React.FC<Props> = (props) => {
  const { onChange } = props;
  const {setActiveTaskId, task, setTask} = useContext (TasksContext)


  const handleChange = (event: BaseSyntheticEvent) => {
    setTask(event.target.value);
    onChange(event.target.value);
    setActiveTaskId (undefined)
  };

  return (
    <>
      {" "}
      <input value={task} onChange={handleChange} />{" "}
    </>
  );
};

export default Input;
