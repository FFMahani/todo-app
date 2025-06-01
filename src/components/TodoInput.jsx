import React, { useRef } from "react";

const TodoInput = ({ onAddTask }) => {
  const inputRef = useRef();

  const handleAdd = () => {
    const taskText = inputRef.current.value.trim();
    if (!taskText) return;

    onAddTask(taskText);
    inputRef.current.value = "";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 bg-gray-100 rounded-xl shadow-inner p-1.5">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type your task..."
          onKeyDown={handleKeyDown}
          className="flex-1 w-full px-4 py-3 text-base text-gray-700 bg-transparent outline-none placeholder:text-gray-500"
        />

        <button
          onClick={handleAdd}
          className="w-full px-6 py-3 mt-2 text-base font-semibold text-center text-white transition duration-300 sm:mt-0 sm:w-auto bg-sky-500 hover:bg-sky-600 rounded-xl"
        >
          <span className="block sm:hidden">Add</span>
          <span className="hidden sm:block">➕ Add Task</span>
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
