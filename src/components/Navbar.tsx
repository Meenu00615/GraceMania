"use client";
import { useEffect, useState } from "react";
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { Share_Tech_Mono } from 'next/font/google';

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 z-50 w-full py-4 transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
        <div className="flex items-center justify-between px-6 mx-auto max-w-7xl">
          <button 
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <div className={`text-2xl md:text-3xl font-bold ${shareTechMono.className} ${isMobileMenuOpen ? 'ml-4' : ''}`}>
            <a href="/">GRACE MANIA</a>
          </div>

          <div className="hidden space-x-8 md:flex">
            <a href="/new" className="text-sm tracking-wider uppercase hover:text-gray-600">In New</a>
            <a href="/women" className="text-sm tracking-wider uppercase hover:text-gray-600">WOMEN</a>
            <a href="/men" className="text-sm tracking-wider uppercase hover:text-gray-600">MEN</a>
            <a href="/bags" className="text-sm tracking-wider uppercase hover:text-gray-600">BAGS</a>
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

        {isMobileMenuOpen && (
          <div className="bg-white shadow-lg md:hidden">
            <div className="flex flex-col px-6 py-4 space-y-4">
              <a href="/new" className="text-sm tracking-wider uppercase hover:text-gray-600" onClick={toggleMobileMenu}>In New</a>
              <a href="/women" className="text-sm tracking-wider uppercase hover:text-gray-600" onClick={toggleMobileMenu}>WOMEN</a>
              <a href="/men" className="text-sm tracking-wider uppercase hover:text-gray-600" onClick={toggleMobileMenu}>MEN</a>
              <a href="/bags" className="text-sm tracking-wider uppercase hover:text-gray-600" onClick={toggleMobileMenu}>BAGS</a>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-16 md:pt-20"></div>
    </>
  );
}
