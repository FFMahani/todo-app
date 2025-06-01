import React, { useEffect, useState } from "react";
import logoIcon from "../assets/to-do-list.png";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      isComplete: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const handleToggleStatus = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const handleUpdateTask = (taskId, newText) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="flex items-center justify-center w-screen min-h-screen px-4 py-10 bg-gradient-to-tr from-sky-100 to-white">
      <div className="w-full max-w-md min-h-[75vh] px-4 py-6 sm:p-6 bg-white shadow-xl rounded-2xl">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <img src={logoIcon} alt="App Icon" className="w-7 h-7 sm:w-8 sm:h-8" />
          <h1 className="text-xl font-bold text-center text-gray-800 sm:text-2xl">
            My To-Do List
          </h1>
        </div>

        {/* Todo Input */}
        <TodoInput onAddTask={handleAddTask} />

        {/* Task List */}
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <p className="text-sm text-center text-gray-500">
              No tasks yet. Add one!
            </p>
          ) : (
            tasks.map((task) => (
              <TodoItem
                key={task.id}
                id={task.id}
                text={task.text}
                isComplete={task.isComplete}
                toggleStatus={handleToggleStatus}
                deleteTask={handleDeleteTask}
                updateTask={handleUpdateTask}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
