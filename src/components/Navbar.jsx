

const Navbar = () => {
    
  return (
    <div className="flex justify-between items-center px-8 py-4">
      <h2 className="font-bold text-[#05008d] text-2xl">LOGO</h2>

      <ul className="flex gap-3">
        <li className="list-item">Home</li>
        <li className="list-item">About</li>
        <li className="list-item">Pricing</li>
        <li className="list-item">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar