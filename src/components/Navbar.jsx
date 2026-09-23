import { UserContext } from "../context/UserContext";
import Button from "./Button";
import { useContext } from "react";
import { Link } from "react-router";

const Navbar = ({ setIsLoggedIn, isLoggedIn }) => {
  const { userData } = useContext(UserContext);
  return (
    <div className="flex justify-between items-center px-8 py-4 shadow-2xl ">
      <h2 className="font-bold text-[#05008d] text-2xl">LOGO</h2>

      <ul className="flex gap-3">
        <Link to="/">
          <li className="list-item">Home</li>
        </Link>
        <Link to="about">
          <li className="list-item">About</li>{" "}
        </Link>
        <Link to="pricing">
          <li className="list-item">Pricing</li>{" "}
        </Link>
        <Link to="contact">
          <li className="list-item">Contact</li>{" "}
        </Link>
      </ul>

      {isLoggedIn ? (
        <Button variant={"green"} action={() => setIsLoggedIn(!isLoggedIn)}>
          Login
        </Button>
      ) : (
        <div>
          <span className="text-blue-700 font-bold pr-2">{userData.name}</span>
          <Button variant={"outline"} action={() => setIsLoggedIn(!isLoggedIn)}>
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
