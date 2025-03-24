"use client";
import { useEffect, useState } from "react";
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import { Share_Tech_Mono } from 'next/font/google';

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full py-4 transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="flex items-center justify-between px-6 mx-auto max-w-7xl">
        <div className={`text-3xl font-bold ${shareTechMono.className}`}>
          <a href="/">GRACE MANIA</a>
        </div>

        <div className="flex space-x-8">
          <a href="/new" className="text-sm tracking-wider uppercase hover:text-gray-600">In New</a>
          <a href="/women" className="text-sm tracking-wider uppercase hover:text-gray-600">WOMEN</a>
          <a href="/men" className="text-sm tracking-wider uppercase hover:text-gray-600">MEN</a>
          <a href="/bags" className="text-sm tracking-wider uppercase hover:text-gray-600">BAGS</a>
          <a href="/gifts" className="text-sm tracking-wider uppercase hover:text-gray-600">GIFTS</a>
          <a href="/stories" className="text-sm tracking-wider uppercase hover:text-gray-600">STORIES</a>
        </div>

        <div className="flex space-x-6">
          <button aria-label="Search">
            <FiSearch className="text-lg hover:text-gray-600" />
          </button>
          <button aria-label="Account">
            <FiUser className="text-lg hover:text-gray-600" />
          </button>
          <button aria-label="Wishlist">
            <FiHeart className="text-lg hover:text-gray-600" />
          </button>
          <button aria-label="Shopping Bag">
            <FiShoppingBag className="text-lg hover:text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
}