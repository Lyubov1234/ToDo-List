import React from "react";
import { Task } from "../../models/Task";
import ToDoItem from "../ToDoItem";

interface Props {
  tasks: Task[];
}

const ToDoList: React.FC<Props> = (props) => {
  const { tasks } = props;
  return (
    <div>
      {!!tasks.length ?
        tasks.map((task) => <ToDoItem task={task} key={task.id} />)
        : 'Tasks not founded!'}
    </div>
  );
};

export default ToDoList;
