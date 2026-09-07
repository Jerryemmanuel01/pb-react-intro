import { useState } from "react";

const Couter = () => {
  const [count, setCount] = useState(0);

  const [height, setHeight] = useState(5.8);

  console.log(height);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="">
      <h1 className="text-2xl">useState Hook</h1>

      {count}

      <button
        onClick={() => increase()}
        className="block text-white bg-gray-600  px-3 rounded-lg mt-4"
      >
        Increase
      </button>

      {height.toFixed(2)}

      <button
        onDoubleClick={() => setHeight(height + 0.2)}
        className="block text-white bg-gray-600  px-3 rounded-lg mt-4"
      >
        change height
      </button>
    </div>
  );
};

export default Couter;
