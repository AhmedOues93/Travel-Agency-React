


import { Link } from "react-router-dom";

const NavBar = () => {
  return  (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost rounded-2xl font-bold text-xl">Travel Agency</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
            <Link
              to="/"
              className="text-black rounded-2xl hover:text-gray-700 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="text-black  rounded-2xl  hover:text-gray-700 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Destinations"
              className="text-black  rounded-2xl hover:text-gray-700 transition duration-300"
            >
              Destinations
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="text-black rounded-2xl hover:text-gray-700  transition duration-300"
            >
              Contact
            </Link>
            </li>
    
    </ul>
  </div>
</div>
  )
}
export default NavBar;
