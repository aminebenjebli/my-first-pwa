"use client";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="bg-blue-700 text-white shadow-md sticky top-0 z-
        50"
    >
      <div
        className="max-w-6xl mx-auto px-4 flex items-center
        justify-between h-16"
      >
        <Link href="/" className="font-bold text-lg tracking-wide">
          My Shop
        </Link>
        <button
          className="sm:hidden p-2 focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="hidden sm:flex space-x-6">
          <Link href="/products" className="hover:underline">
            Products
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
      {/* Le menu du mobile */}
      {open && (
        <div
          className="sm:hidden px-4 pb-4 flex flex-col space-y-2
            bg-blue-700"
        >
          <Link
            href="/products"
            className="hover:underline"
            onClick={() => setOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/about"
            className="hover:underline"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:underline"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
