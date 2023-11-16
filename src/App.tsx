import React, { useState } from "react";
import ToDoForm from "./container/ToDoForm/ToDoForm";
import { Task } from "./models/Task";
import "./App.css";
import { TasksContext, TasksContextProvider } from "./store/context";
import ToDo from "./pages/ToDo";


function App() {


return (
    <>
    <TasksContextProvider>
    <ToDo/>
     </TasksContextProvider>
    </>
  );
};

export default App;
