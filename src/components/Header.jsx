import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-between bg-gray-100">
      <h1 className="text-2xl font-bold p-2">
        <Link to="/">Jarurat Care</Link>
      </h1>
      <div className="flex">
        <Link className="p-2" to="/">
          Home
        </Link>
        <Link className="p-2" to="/patients">
          Patients
        </Link>
        <Link className="p-2" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Header;
