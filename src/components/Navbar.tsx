"use client";
import { useEffect, useState } from "react";
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { Share_Tech_Mono } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

type NavColumn = {
  heading: string;
  links: string[];
};

type NavItem = {
  label: string;
  href: string;
  columns: NavColumn[];
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "In New",
    href: "/new",
    columns: [
      {
        heading: "NEW ARRIVALS",
        links: ["New in Today", "Back in Stock", "Just Dropped", "Trending Now"],
      },
      {
        heading: "EDITORIAL",
        links: ["Lookbook", "Campaign", "Style Guide", "Gift Ideas"],
      },
      {
        heading: "COLLECTIONS",
        links: ["Winter", "Spring/Summer", "Limited Edition", "Capsule", "Essentials"],
      },
    ],
  },
  {
    label: "WOMEN",
    href: "/women",
    columns: [
      {
        heading: "WEARS",
        links: ["Tops", "Dresses", "Jeans", "T-Shirts", "Trousers", "Shirts", "Jackets", "Sweatshirts", "Sweaters", "Shrugs", "Shorts", "Jumpsuits", "Blazers", "Skirts", "Co-ord Sets"],
      },
      {
        heading: "SPORTS & ACTIVEWEAR",
        links: ["Sports T-Shirts", "Track Pants", "Capris", "Sports Tops", "Sports Shorts", "Tights", "Sports Bras", "Shapewear"],
      },
      {
        heading: "ACCESSORIES",
        links: ["Belts", "Wallets", "Watches", "Caps", "Sunglasses", "Socks"],
      },
    ],
  },
  {
    label: "MEN",
    href: "/men",
    columns: [
      {
        heading: "TOPS",
        links: ["T-Shirts", "Shirts", "Polo Shirts", "Sweatshirts", "Sweaters", "Jackets", "Blazers"],
      },
      {
        heading: "BOTTOMS",
        links: ["Jeans", "Trousers", "Chinos", "Shorts", "Track Pants", "Joggers"],
      },
      {
        heading: "ACCESSORIES",
        links: ["Belts", "Wallets", "Watches", "Caps", "Sunglasses", "Socks"],
      },
    ],
  },
  {
    label: "BAGS",
    href: "/bags",
    columns: [
      {
        heading: "WOMEN'S BAGS",
        links: ["Totes", "Shoulder Bags", "Crossbody", "Clutches", "Mini Bags", "Backpacks"],
      },
      {
        heading: "FEATURED",
        links: ["New In", "Best Sellers", "Iconic Styles", "Sale"],
      },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileDropdown(null);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
          isScrolled || isMobileMenuOpen || openDropdown !== null
            ? "bg-white shadow-md"
            : "bg-transparent"
        } ${isMobileMenuOpen ? "py-4" : "py-2 md:py-4"}`}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <div className="flex items-center justify-between px-6 mx-auto max-w-7xl">
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <div
            className={`text-2xl md:text-3xl font-bold ${shareTechMono.className} ${
              isMobileMenuOpen ? "ml-4" : ""
            }`}
          >
            <a href="/">GRACE MANIA</a>
          </div>

          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
              >
                <a
                  href={item.href}
                  className="relative block py-2 text-sm tracking-wider uppercase hover:text-gray-600"
                >
                  {item.label}
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute left-0 right-0 h-1 bg-yellow-400"
                        style={{ top: "100%" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </a>
              </div>
            ))}
          </div>

          <div className="flex space-x-3">
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

        <AnimatePresence>
          {openDropdown && (
            <motion.div
              key={openDropdown}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              // 👇 CHANGED: Positioned relative to the nav item, width fits content, aligned left
              className="absolute top-full left-0 bg-white shadow-xl hidden md:block border-t border-gray-100 w-max"
              onMouseEnter={() => setOpenDropdown(openDropdown)}
            >
              {/* 👇 CHANGED: Removed max-w-7xl and reduced padding */}
              <div className="px-8 py-8">
                {/* 👇 CHANGED: Reduced gap, added min-width so columns don't squish */}
                <div className="grid grid-cols-3 gap-8">
                  {NAV_ITEMS.find((i) => i.label === openDropdown)?.columns.map(
                    (col) => (
                      <div key={col.heading} className="min-w-[180px]">
                        <h4 className="mb-4 text-sm font-bold tracking-wider uppercase text-gray-900">
                          {col.heading}
                        </h4>
                        <ul className="space-y-2">
                          {col.links.map((link) => (
                            <li key={link}>
                              <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-teal-600 transition-colors"
                              >
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {isMobileMenuOpen && (
          <div className="bg-white shadow-lg md:hidden max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col px-6 py-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-2">
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.label ? null : item.label
                      )
                    }
                    className="w-full flex justify-between items-center py-2 text-sm tracking-wider uppercase hover:text-gray-600"
                  >
                    {item.label}
                    <span className="text-gray-400">
                      {mobileDropdown === item.label ? "−" : "+"}
                    </span>
                  </button>
                  {mobileDropdown === item.label && (
                    <div className="pl-4 pb-2 space-y-4">
                      {item.columns.map((col) => (
                        <div key={col.heading}>
                          <h5 className="text-xs font-bold uppercase text-gray-500 mb-1">
                            {col.heading}
                          </h5>
                          <ul className="space-y-1">
                            {col.links.map((link) => (
                              <li key={link}>
                                <a
                                  href="#"
                                  className="block text-sm text-gray-700 hover:text-teal-600"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileDropdown(null);
                                  }}
                                >
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
