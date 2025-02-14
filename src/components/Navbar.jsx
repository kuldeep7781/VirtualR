import { X, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-3 z-50 py-2 backdrop-blur-lg border-b border-neutral-700">
      <div className="container px-4 mx-auto ralative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight text-yellow-400">
              VirtualR
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => {
              return (
                <li
                  className="text-white hover:text-gray-300 hover:border-amber-600 hover:border-b-2"
                  key={index}
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
          <Link rel="stylesheet" to="/signIn" className="py-2 px-3 border rounded-md"> Sign In </Link>
          <Link rel="stylesheet" to="/createAccount" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"> Create an Account </Link>
            
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-1 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => {
                return (
                  <li key={index} className="flex items-center py-4 hover:text-gray-300 hover:border-amber-600 hover:border-b-2">
                    <a className="flex text-center" href={item.href}>{item.label}</a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex space-x-6">
            <Link rel="stylesheet" to="/signIn" className="py-2 px-3 border rounded-md"> Sign In </Link>
            <Link rel="stylesheet" to="/createAccount" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"> Create an Account </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
