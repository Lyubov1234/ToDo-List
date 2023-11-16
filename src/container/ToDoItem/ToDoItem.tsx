import React, { useContext, useEffect, useState } from "react";
import { Task } from "../../models/Task";
import { TasksContext } from "../../store/context";

interface Props {
  task: Task;
}

const ToDoItem: React.FC<Props> = (props) => {
  const { task: Task } = props;
  const { tasks, setActiveTaskId, deletedTasks, setEditId, setTask, editId } =
    useContext(TasksContext);
  const [completed, setCompleted] = useState(false);

  const handleClickTask = (): void => {
    setActiveTaskId(Task.id);
  };

  const StatusCheckbox = () => {
    Task.completed = !Task.completed;
    setCompleted(Task.completed);
    console.log(Task, "Task");
  };

  const deleteThisTask = () => {
    const index = tasks.findIndex((task) => Task.id === task.id);
    console.log(deletedTasks, "deletedTasks");
    deletedTasks.splice(0, 1, tasks[index]);
    tasks.splice(index, 1);

    console.log(deletedTasks, "deletedTasks");
  };

  const editToDo = () => {
    const editTask = tasks.find((task) => Task.id === task.id);
    if (editTask) {
      setTask(editTask.text);
      setEditId(editTask.id);
      console.log(editId, "editId");
    }
  };

  return (
    <div onClick={handleClickTask}>
      <span
        style={{
          textDecoration: completed ? "line-through" : "",
        }}
      >
        {Task.text}{" "}
      </span>

      <button onClick={deleteThisTask}>Delete</button>
      <button onClick={editToDo}>edit</button>
      <input type={"checkbox"} onClick={StatusCheckbox} />
    </div>
  );
};

export default ToDoItem;
