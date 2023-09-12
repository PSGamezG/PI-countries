import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ onSearch }) => {
  return (
    <div className="nav-container">
      <Link to="/home" className="nav-link">
        HOME
      </Link>
      <Link to="/create" className="nav-link">
        FORM
      </Link>
    </div>
  );
};

export default NavBar;
