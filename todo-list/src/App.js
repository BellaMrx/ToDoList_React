import React, { useState } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";



function App(props) {
  // to add a task
  const [tasks, setTasks] = useState(props.tasks);

  // for handling the form transmission for callbacks
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }
  
  // a task is completed by clicking on the checkbox
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // delete a task
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  
  
  

  // returns a <Todo /> component from map()function
  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      // key is used to maintain an overview of tasks
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  // single or multiple task / counts/displays the task
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      {/* components/Form.js - <form> element to fill in a new task with <input type="text"> */}
      <Form addTask={addTask} />
      {/* components/FilterButton.js - an array of buttons to filter the tasks */}
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      {/* number of tasks still to be completed */}
      <h2 id="list-heading">{headingText}</h2>
      {/* components/Todo.js 3 tasks in unordered list, each <li> element has a checkbox and a button for editing and deleting */}
      <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
          {/* <Todo name="Task1" completed={true} id="todo-0" /> */}
          {/* completed={true/fasle} --> components/Todo.js - <input defaultChecked={props.completed} /> */}
          {/* id="todo-0" --> components/Todo.js - <input id={props.id} /> */}
        {taskList}
      </ul>
    </div>
  );
}

export default App;
