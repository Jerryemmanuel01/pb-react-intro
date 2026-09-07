import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  console.log(tasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks((prev) => [...prev, task]);

    console.log(tasks);

    setTask("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Please enter your task"
          className="border rounded-lg px-3 w-3/5 h-8"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-1 rounded-2xl text-sm">
          Submit
        </button>
      </form>

      <div>
        {tasks.map((val, i) => (
          <p key={i}>{val}</p>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
