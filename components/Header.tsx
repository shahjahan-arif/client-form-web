// pages/menu.js
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
  <nav className="container my-5 mx-auto">
      <div className="bg-blue-500">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <a className="text-3xl font-bold leading-none" href="#">
          {/* Your logo SVG here */}
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleMenu}
          >
            {/* Your mobile menu SVG here */}
          </button>
        </div>

        <Link className="text-sm text-gray-400 hover:text-gray-500" href="/">
          Home
        </Link>
        {/* Add the rest of your menu items here */}
        <button className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm text-gray-900 font-bold  rounded-xl transition duration-200">
        <ConnectButton />
                </button>
    
      </nav>
    </div>
  </nav>
  );
}
