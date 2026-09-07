const Navbar = ({ setIsLoggedIn, isLoggedIn }) => {
  return (
    <div className="flex justify-between items-center px-8 py-4">
      <h2 className="font-bold text-[#05008d] text-2xl">LOGO</h2>

      <ul className="flex gap-3">
        <li className="list-item">Home</li>
        <li className="list-item">About</li>
        <li className="list-item">Pricing</li>
        <li className="list-item">Contact</li>
      </ul>

      {isLoggedIn && (
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="bg-black text-white px-4 py-1 rounded-2xl text-sm"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
