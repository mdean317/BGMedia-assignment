import React from "react";
import Link from "next/link";


const Navbar = ({ user }) => {
  return (
    <nav className="flex justify-center text-xl p-4 mb-2" id="top-navbar"> 
      <div className="flex justify-center gap-14 text-xl p-4">
      <Link className='navBarItem' href="/">Home</Link>
      <Link className='navBarItem' href="/about">About</Link>
      <Link className='navBarItem' href="/contact">Contact</Link>

      </div>
    </nav>
  );
};

export default Navbar;