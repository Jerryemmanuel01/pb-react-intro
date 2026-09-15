import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tasks from "./components/Tasks";
import { useState } from "react";
import Login from "./components/Login";
import Fetch from "./components/Fetch";
import { Toaster } from "sonner";
import { users } from "./utils/utils";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-[#e0e0e0] min-h-screen py-6">
      <Toaster position="top-right" />
      <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      {/* <Tasks /> */}
      <Fetch />

      {/* <Hero users={users} /> */}

      {/* 
      {isLoggedIn ? (
        <Hero users={users} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
      )} */}
    </div>
  );
}

export default App;
