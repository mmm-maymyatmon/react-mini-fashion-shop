import { useState } from 'react';
import { NavLink, Link } from 'react-router';

import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white p-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <ShoppingBagIcon className="h-6 w-6 text-black" />
          <span className="text-2xl font-bold text-black hover:text-gray-800 transition-all">
            Fashion Shop
          </span>
        </Link>
        <ul className="hidden gap-6 lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-[#4bc0dd] transition-all duration-300'
                : 'text-black  '
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? 'text-[#4bc0dd] transition-all duration-300'
                : 'text-black  '
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? 'text-[#4bc0dd] transition-all duration-300'
                : 'text-black  '
            }
          >
            Cart
          </NavLink>
        </ul>
        <button onClick={menuToggle} className="block text-xl lg:hidden">
          <Bars3Icon className="h-6 w-6 text-black" />
        </button>
        <div
          className={`fixed bg-[#4bc0dd] inset-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} duration-800 ease-in-out lg:hidden z-50`}
        >
          <div className="flex justify-between items-center p-4 border-b-2 border-white-50">
            <div className="flex items-center space-x-2">
              <ShoppingBagIcon className="h-6 w-6 text-white" />
              <span className="text-2xl font-bold text-white">
                Fashion Shop
              </span>
            </div>
            <button onClick={menuToggle} className="text-white">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col text-white justify-center items-center h-full gap-8">
            <Link onClick={menuToggle} to="/" className="text-3xl">
              Home
            </Link>
            <Link onClick={menuToggle} to="/shop" className="text-3xl">
              Shop
            </Link>
            <Link onClick={menuToggle} to="/cart" className="text-3xl">
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
