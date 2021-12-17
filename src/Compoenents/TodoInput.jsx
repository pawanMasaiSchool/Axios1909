import { useState } from "react";

function TodoInput({ handleSubmit }) {
  const [inp, setInp] = useState("");

  const handleNewTask = () => {
    console.log("Sending data to the server", inp);
    handleSubmit(inp);
  };

  return (
    <div>
      <input
        placeholder="add something"
        onChange={(e) => setInp(e.target.value)}
      />
      <button onClick={handleNewTask}>Add</button>
    </div>
  );
}

export default TodoInput;
