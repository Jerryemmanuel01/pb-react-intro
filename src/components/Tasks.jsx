import { useState } from "react";
import { Trash } from "lucide-react";

const Tasks = () => {
  const LSKey = "todoReactTask";
  const [tasks, setTasks] = useState([]);

  const [taskText, setTaskText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!taskText.trim()) return alert("Please enter a task.");

    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
      completed: false,
    };

    await setTasks((prev) => [...prev, newTask]);

    setTaskText("");

    console.log(tasks);

    localStorage.setItem(LSKey, JSON.stringify(tasks));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">My Todo List</h2>
        <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-full">
          {completedCount} of {tasks.length} Completed
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="What needs to be done?"
          className="flex-1 border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-indigo-200"
        >
          Add
        </button>
      </form>

      <div className="space-y-2">
        {tasks.length === 0 ? (
          <div className="text-center py-8 text-gray-400 text-sm">
            No tasks yet. Add a new task above!
          </div>
        ) : (
          tasks.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                item.completed
                  ? "bg-gray-50 border-gray-200 text-gray-400"
                  : "bg-white border-gray-100 text-gray-700 hover:border-gray-300 shadow-xs"
              }`}
            >
              <div
                className="flex items-center gap-3 cursor-pointer flex-1 mr-2"
                onClick={() => toggleTask(item.id)}
              >
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleTask(item.id)}
                  className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer"
                />
                <span
                  className={`text-sm font-medium ${
                    item.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {item.text}
                </span>
              </div>
              <button
                type="button"
                onClick={() => deleteTask(item.id)}
                className="text-gray-400 hover:text-red-500 p-1 rounded-lg hover:bg-red-50 transition-colors"
                title="Delete Task"
              >
                <Trash className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Tasks;
