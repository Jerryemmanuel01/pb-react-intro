import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

const Fetch = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resfresh, setResfresh] = useState(false);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => setPosts(data));
    setLoading(true);

    const TO = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    TO();
    console.log("seeing this");
  }, [resfresh]);

  if (loading) {
    return (
      <div className="h-[70vh] flex justify-center items-center w-full">
        <Loader className="animate-spin w-6 h-6 text-blue-800" />
      </div>
    );
  }

  return (
    <div>
      This is done loading and display{" "}
      <button
        className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-indigo-200"
        onClick={() => setResfresh((prev) => !prev)}
      >
        Refresh
      </button>
    </div>
  );
};

export default Fetch;
