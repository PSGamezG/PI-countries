import { Link, NavLink } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <div>
      <Link to="/home">HOME</Link>
      <Link to="/create">FORM</Link>
    </div>
  );
};

export default NavBar;
