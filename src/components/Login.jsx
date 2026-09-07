import { useState } from "react";

const Login = ({ setIsLoggedIn, isLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) return alert("Enter username")
    if (!password) return alert("Enter password")

    alert(`Welcome ${username} with password: ${password}`);

    setIsLoggedIn(!isLoggedIn)
  };

  return (
    <form className="px-6 " onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <br />
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Please enter your username"
        className="border rounded-lg px-3 w-3/5 h-8"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="password">Password</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Please enter your password"
        className="border rounded-lg px-3 w-3/5 h-8"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="text-center mx-auto w-full mt-10 border bg-amber-500"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
