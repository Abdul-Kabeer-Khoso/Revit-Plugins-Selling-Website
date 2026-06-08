import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-lg font-semibold transition duration-200 ${isActive ? "text-black hover:underline" : "text-black hover:underline"
    }`;

  return (
    <nav className="w-full bg-gray-400 shadow-md px-6 py-4 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-15 w-auto object-contain"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>

        <NavLink to="/downloads" className={linkClass}>
          Downloads
        </NavLink>

        <NavLink to="/families" className={linkClass}>
          Families
        </NavLink>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1"
      >
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-300 shadow-md flex flex-col items-center gap-6 py-6 md:hidden">

          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/downloads" className={linkClass} onClick={() => setOpen(false)}>
            Downloads
          </NavLink>

          <NavLink to="/families" className={linkClass} onClick={() => setOpen(false)}>
            Families
          </NavLink>

        </div>
      )}
    </nav>
  );
}

export default Navbar;