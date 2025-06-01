import React from 'react';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-gradient-to-tr from-sky-100 to-white">
      <TodoList />
    </div>
  );
};

export default App;
