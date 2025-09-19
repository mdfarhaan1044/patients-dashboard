import { Link } from "react-router-dom";
import { useState } from "react";
const navlinks = [
  { to: "/", label: "Home" },
  { to: "/patients", label: "Patients" },
  { to: "/about", label: "About" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" bg-white shadow-md px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo / Brand */}

        <h1 className="text-2xl font-bold text-blue-600">
          <Link to="/">Jarurat Care</Link>
        </h1>

        {/* Links */}
        <div className="gap-4 hidden md:flex ">
          {navlinks.map((link) => (
            <Link
              key={link.to}
              className="text-gray-700 hover:text-blue-600  font-medium transition"
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setOpen(!open)}
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </div>
      </div>
      <div
        className={`flex flex-col md:hidden gap-3 pt-3 transition-all duration-300 ease-in-out ${
          open ? "max-h-[100vh] overflow-y-auto" : "max-h-0 overflow-hidden"
        }`}
      >
        {navlinks.map((link) => (
          <Link
            key={link.to}
            className="text-gray-700 hover:text-blue-600  font-medium transition"
            to={link.to}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Header;
