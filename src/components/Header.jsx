import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex items-center justify-between bg-white shadow-md px-4 py-3">
      {/* Logo / Brand */}
      <h1 className="text-2xl font-bold text-blue-600">
        <Link to="/">Jarurat Care</Link>
      </h1>

      {/* Links */}
      <div className="flex gap-4">
        <Link
          className="text-gray-700 hover:text-blue-600 font-medium transition"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-gray-700 hover:text-blue-600 font-medium transition"
          to="/patients"
        >
          Patients
        </Link>
        <Link
          className="text-gray-700 hover:text-blue-600 font-medium transition"
          to="/about"
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default Header;
