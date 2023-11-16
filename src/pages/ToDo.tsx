import React, { useCallback, useContext } from "react";
import ToDoForm from "../container/ToDoForm/ToDoForm";
import ToDoList from "../container/ToDoList";
import { TasksContext } from "../store/context";
import { Task } from "../models/Task";

const ToDo: React.FC = () => {
  const { tasks, setTasks, setTask, task, editId, setEditId } = useContext(TasksContext);

  const handleCreateNewTask = (newTask: Task) => {
    console.log(editId, 'editId')
    if (editId) {
      const editTask = tasks.find((i) => i.id === editId);
      console.log(editTask, "editTask");
      if (editTask) {
        const updatedTasks = tasks.map((t) =>
          t.id === editTask.id
            ? (t = { id: t.id, text: task, completed:t.completed })
            : { id: t.id, text: t.text, completed:t.completed }
        );
        setTasks(updatedTasks);
        setEditId(0)
        setTask("");
      }
    }

    if (task !== "" && !editId) {
      setTasks([...tasks, newTask]);
      setTask("");
    }
  };

  return (
    <>
      <ToDoForm onCreateTask={handleCreateNewTask} />
      <ToDoList tasks={tasks} />
    </>
  );
};

export default ToDo;
