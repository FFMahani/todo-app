import React, { useState } from "react";
import tick from "../assets/selected.png";
import not_tick from "../assets/not_selected.png";
import deleteIcon from "../assets/delete.png";

const TodoItem = ({ text, id, isComplete, deleteTask, toggleStatus, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleSave = () => {
    const trimmed = editText.trim();
    if (trimmed && trimmed !== text) {
      updateTask(id, trimmed);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") {
      setEditText(text);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-3 transition duration-200 shadow-sm bg-gray-50 rounded-xl hover:bg-gray-100">
      {/* Left: Status + Text/Input */}
      <div
        onClick={() => !isEditing && toggleStatus(id)}
        className="flex items-center flex-1 gap-3 cursor-pointer"
      >
        <img
          src={isComplete ? tick : not_tick}
          alt={isComplete ? "Completed" : "Not completed"}
          className="w-6"
        />
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="flex-1 text-base bg-transparent border-b border-gray-400 outline-none"
          />
        ) : (
          <p className={`text-base ${isComplete ? "line-through text-gray-400" : "text-gray-700"}`}>
            {text}
          </p>
        )}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 ml-3">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-sm font-semibold text-sky-600 hover:underline"
          >
            ✅
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-gray-500 hover:text-gray-700"
            title="Edit"
          >
            ✏️
          </button>
        )}
        <button
          onClick={() => deleteTask(id)}
          className="transition opacity-80 hover:opacity-100"
          title="Delete"
        >
          <img src={deleteIcon} alt="Delete task" className="w-4 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
