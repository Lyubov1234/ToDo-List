import React, { PropsWithChildren, SetStateAction, useState } from "react";
import { Task } from "../models/Task";

type TasksContextType = {
  tasks: Task[];
  setTasks: React.Dispatch<SetStateAction<Task[]>>;
  activeTaskId: number | undefined;
  setActiveTaskId: (newId: number | undefined) => void;
   deletedTasks: Task[];
  setDeletedTasks: React.Dispatch<SetStateAction<Task[]>>;
  editId: number;
  setEditId: React.Dispatch<SetStateAction<number>>;
  task: string;
  setTask: React.Dispatch<SetStateAction<string>>
};

export const TasksContext: React.Context<TasksContextType> =
  React.createContext<TasksContextType>({
    activeTaskId: undefined,
    tasks: [],
    setActiveTaskId: () => {},
    setTasks: () => void {},

    deletedTasks: [],
    setDeletedTasks: () => void {},
    editId: 0,
    setEditId: () => void {},
    task: '',
    setTask:() => void {},
  });

export const TasksContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTaskId, setActiveTaskId] = useState<number | undefined>(
    undefined
  );
  
  const [deletedTasks, setDeletedTasks] = useState<Task[]>([]);

  const [editId, setEditId] = useState(0);
  const [task, setTask] = useState<string>("");


  // const handleCreateNewTask = (newTask: Task) => {
  //   setTasks([...tasks, newTask]);
  // };

  const handleChangeActiveId = (newId: number | undefined) => {
    setActiveTaskId(newId);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        activeTaskId,
        setActiveTaskId: handleChangeActiveId,
        deletedTasks,
        setDeletedTasks,
        editId,
        setEditId,
        task, 
        setTask
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};
