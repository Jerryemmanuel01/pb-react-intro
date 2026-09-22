import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tasks from "./components/Tasks";
import { useState } from "react";
import Login from "./components/Login";
import Fetch from "./components/Fetch";
import { Toaster } from "sonner";
import { users } from "./utils/utils";
import { UserContext } from "./context/UserContext";
import StateMgt from "./components/StateMgt";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [userData, setUserData] = useState({
    name: "John",
    email: "john123@gmail.com",
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <div className="bg-[#e0e0e0] min-h-screen py-6">
        <Toaster position="top-right" />
        <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        <Tasks />
        {/* <Fetch /> */}
        {/* <StateMgt /> */}

        {/* <Hero users={users} /> */}

        {/* 
      {isLoggedIn ? (
        <Hero users={users} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
      )} */}
      </div>
    </UserContext.Provider>
  );
}

export default App;
