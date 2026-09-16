import { UserContext } from "../context/UserContext";
import Button from "./Button";
import { useContext } from "react";

const Navbar = ({ setIsLoggedIn, isLoggedIn }) => {
  const { userData } = useContext(UserContext);
  return (
    <div className="flex justify-between items-center px-8 py-4">
      <h2 className="font-bold text-[#05008d] text-2xl">LOGO</h2>

      <ul className="flex gap-3">
        <li className="list-item">Home</li>
        <li className="list-item">About</li>
        <li className="list-item">Pricing</li>
        <li className="list-item">Contact</li>
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
