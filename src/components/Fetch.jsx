import { Loader } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import Button from "./Button";
import Input from "./Input";
import { UserContext } from "../context/UserContext";

const Fetch = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resfresh, setResfresh] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { userData, setUserData } = useContext(UserContext);
  const [editName, setEditName] = useState(userData.name);

  console.log(userData.name);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );

        setPosts(response.data);
        setLoading(false);
        toast.success("Fetched successfully");
      } catch (error) {
        toast.error(error);
        setLoading(false);
      }
    };

    getPosts();
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: {},
    // })
    //   .then((response) => response.json())
    //   .then((data) => setPosts(data));
    // setLoading(true);

    // const TO = () => {
    //   setTimeout(() => {
    //     setLoading(false);
    //   }, 3000);
    // };

    // TO();
  }, [resfresh]);

  console.log(posts);

  if (loading) {
    return (
      <div className="h-[70vh] flex justify-center items-center w-full">
        <Loader className="animate-spin w-6 h-6 text-blue-800" />
      </div>
    );
  }

  const userId = "238js83hjs";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) return alert("Please enter a title and a body");

    try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        {
          title,
          body,
          userId: "22",
        },
      );

      toast.success("Post created");
    } catch (error) {
      toast.error(error);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setUserData({...userData, name: editName});
  };

  return (
    <div className="px-6 mt-6">
      <form className="">
        <label htmlFor="name">Edit Profile Name</label>
        <br />
        <Input value={editName} onChange={(e) => setEditName(e.target.value)} />
        <Button variant={"blue"} action={handleEdit}>
          Save
        </Button>
      </form>

      <section className="grid gap-3">
        {posts?.slice(50, 52).map((post) => (
          <div key={post.id} className="border min-h-10 rounded-xl  p-4">
            <h2 className="font-bold text-sm">ID: {post.id}</h2>

            <h1 className="mt-1 font-medium text-lg">Title: {post.title}</h1>

            <p className="mt-1 5">{post.body}</p>
          </div>
        ))}
      </section>

      {/* <button
        className="mt-5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-indigo-200"
        onClick={() => setResfresh((prev) => !prev)}
      >
        Refresh
      </button> */}
      <Button variant={"red"} action={() => setResfresh((prev) => !prev)}>
        Refresh
      </Button>
      <Button variant={"green"}>Refresh</Button>
      <Button variant={"outline"}>Refresh</Button>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          type="number"
        />
        {/* <input
          type="text"
          className="border px-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> */}
        <br />

        <label htmlFor="body">Body</label>
        <br />
        <input
          type="text"
          className="border px-3 h-20"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <Button type={"submit"} variant={"blue"}>
          Submit
        </Button>

        {/* <button
        type="submit"
          className="mt-5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-indigo-200 block"
        >
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default Fetch;
