import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Task } from "../../models/Task";
import { TasksContext } from "../../store/context";

interface Props {
  onCreateTask: (newTask: Task) => void;
}

const ToDoForm: React.FC<Props> = (props) => {
  const { onCreateTask } = props;
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const { tasks, setTasks, deletedTasks, setDeletedTasks, task, setTask } =
    useContext(TasksContext);

  const handleChangeInput = (newValue: string) => {
    setTask(newValue);
  };

  useEffect(() => {
    setIsButtonDisabled(!task.length);
  }, [task]);

  const handleClick = () => {
    const newTask: Task = {
      text: task,
      id: new Date().valueOf(),
      completed: false,
    };
    onCreateTask(newTask);
  };

  const restoreLastDeletedTask = () => {
    setTasks([...tasks, ...deletedTasks]);
    setDeletedTasks([]);
  };

  return (
    <div>
      <Input onChange={handleChangeInput} />

      <Button onClick={handleClick} disable={isButtonDisabled} />

      <button
        onClick={restoreLastDeletedTask}
        disabled={deletedTasks.length > 0 ? false : true}
      >
        {" "}
        Restore{" "}
      </button>
    </div>
  );
};

export default ToDoForm;
