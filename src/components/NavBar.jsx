


import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="p-5 flex justify-between items-center font-bold shadow-sm bg-base-100">
      {/* Left side: Title */}
      <div className="flex items-center gap-2">
        <span className="text-4xl">🌍</span>
        <h1 className="text-5xl font-playfair bg-gradient-to-r from-red-600 via-sky-600 to-green-600 bg-clip-text text-transparent drop-shadow-md">
          Travel Agency
        </h1>
      </div>

      {/* Right side: Navigation */}
      <ul className="menu menu-horizontal text-xl gap-4">
        <li>
          <Link
            to="/"
            className="text-red-400 rounded-2xl hover:text-gray-700 transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            className="text-red-400 rounded-2xl hover:text-gray-700 transition duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/Destinations"
            className="text-red-400 rounded-2xl hover:text-gray-700 transition duration-300"
          >
            Destinations
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className="text-red-400 rounded-2xl hover:text-gray-700 transition duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;