import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo + Text */}
      <div className="flex items-center">
        <Image
          src="/Gaurav_Express_Logo_with_bg.jpg" // Place this image in /public/
          alt="Gaurav Express Logo"
          width={150}
          height={150}
        />
      </div>

      {/* Menu Toggle (Mobile) */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:items-center md:gap-8 text-md md:ml-10 mt-4 md:mt-0`}
      >
        <Link href="/indexs" className="hover:text-[#0d41a1]">
          Home
        </Link>
        <Link href="/features" className="hover:text-[#0d41a1]">
          Features
        </Link>
        <Link href="/price" className="hover:text-[#0d41a1]">
          Price
        </Link>
        <Link href="/about" className="hover:text-[#0d41a1]">
          About
        </Link>
        <Link href="/contact" className="hover:text-[#0d41a1]">
          Contact
        </Link>
        <Link href="/partners" className="hover:text-[#0d41a1]">
          Our Partners
        </Link>
        <Link href="/tracking" className="hover:text-[#0d41a1]">
          Tracking
        </Link>
        <Link href="/login">
          <button className="bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-full font-bold text-md">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-full font-bold text-md">
            Signup
          </button>
        </Link>
      </nav>
    </header>
  );
}
