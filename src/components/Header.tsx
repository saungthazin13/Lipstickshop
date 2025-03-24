import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-sky-600 p-4 text-white">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="container mx-auto text-lg font-bold">
          Lipsticks Shop
        </Link>
        <button className="block text-xl lg:hidden" onClick={toggleMenu}>
          &#9776;
        </button>
        {/* Desktop view  for navigation  */}
        <ul className="hidden space-x-6 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-gray-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-gray-300"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-gray-300"
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>
        {/* menu for mobile view*/}
        <div
          className={`fixed inset-0 z-50 transform bg-sky-600 opacity-90 transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8">
            <Link to="/" className="text-3xl" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/shop" className="text-3xl" onClick={toggleMenu}>
              Shop
            </Link>
            <Link to="/cart" className="text-3xl" onClick={toggleMenu}>
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
