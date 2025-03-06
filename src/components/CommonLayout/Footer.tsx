import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-espresso text-cream py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-center md:text-left">
        
        {/* Brand Info */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold">☕ Bean & Bliss</h2>
          <p className="text-sm text-gray-300 mt-2">
            Crafted with love, one cup at a time.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-rust transition">
            <FaFacebook />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-rust transition">
            <FaInstagram />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-rust transition">
            <FaTwitter />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-rust transition">
            <FaYoutube />
            </Link>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()} Bean & Bliss. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
