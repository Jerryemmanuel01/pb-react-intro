import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { UserContext } from "./context/UserContext";
import { useState } from "react";
import TodoProvider from "./provider/TodoProvider";
import Footer from "./components/Footer";

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [userData, setUserData] = useState({
    name: "John",
    email: "john123@gmail.com",
  });
  return (
    <>
      <TodoProvider>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          <main className="h-[70vh]">
            <Outlet />
          </main>
          <Footer />
        </UserContext.Provider>
      </TodoProvider>
    </>
  );
};

export default Layout;
