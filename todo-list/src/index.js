import React from 'react';
import ReactDOM from 'react-dom/client';
import './index3.css';
import App from './App';


const DATA = [
  { id: "todo-0", name: "Task1", completed: true },
  { id: "todo-1", name: "Task2", completed: false },
  { id: "todo-2", name: "Task2", completed: false },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
);

