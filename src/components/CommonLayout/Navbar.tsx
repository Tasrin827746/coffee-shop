"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-coffee text-cream shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-wide">
          ☕ Bean & Bliss
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className={`hover:text-rust transition ${
                  pathname === path ? "text-rust font-bold" : ""
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* New Button: Visit Us or See Our Menu */}
        <Link
          href="/contact"
          className="hidden md:block bg-rust text-cream font-semibold px-4 py-2 rounded-lg hover:bg-espresso transition"
        >
          Visit Our Cafe
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-cream" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-coffee shadow-md absolute w-full">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {menuItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  href={path}
                  className={`hover:text-rust transition ${
                    pathname === path ? "text-rust font-bold" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
            <Link
              href="/contact"
              className="bg-rust text-cream px-4 py-2 rounded-lg hover:bg-espresso transition"
              onClick={() => setIsOpen(false)}
            >
              Visit Our Cafe
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
