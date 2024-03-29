import React, { useState } from "react";

function Form(props) {
    // for user input and data updates
    const [name, setName] = useState("");

    // to read the user input
    function handleChange(e) {
        // updates the status
        setName(e.target.value);
    }

    // to handle the form submission <form onSubmit={handleSubmit}>
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Give me a task, please
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
