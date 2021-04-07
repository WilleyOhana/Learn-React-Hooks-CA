import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function AppFunction() {
  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prevNewTask) => ({
      ...prevNewTask,
      [name]: value,
      id: Date.now()
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!newTask.title) return;
    setAllTasks((prevAllTasks) => [newTask, ...prevAllTasks]);
    setNewTask({});
  }

  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prevAllTasks) => prevAllTasks.filter((task) => task.id !== taskIdToRemove));
  }

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList
        allTasks={allTasks}
        handleDelete={handleDelete}
      />
    </main>
  );
}
