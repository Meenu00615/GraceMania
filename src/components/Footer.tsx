"use client";
import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Footer() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.email as HTMLInputElement).value.trim();
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    window.location.href = `mailto:meenu00615@gmail.com?subject=New Subscription&body=Please add me to your mailing list. My email is: ${email}`;
  };

  return (
    <footer className="px-6 py-12 bg-white border-t border-gray-200">
      <div className="grid grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-4">
        <div>
          <h2 className="mb-3 text-xl font-bold tracking-wider uppercase">ENTER THE WORLD OF GRACE MANIA</h2>
          <p className="mb-4 text-xs text-gray-600">
            Stay up to date on events, collections and exclusive news
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-[10px] text-gray-500">
              *Required
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address *"
              className="p-3 mb-3 text-xs border border-gray-300 rounded-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 text-xs font-medium text-white transition-colors bg-black hover:bg-gray-900"
            >
              Subscribe
            </button>
          </form>
          <div className="flex mt-6 space-x-4">
            <a href="#" className="text-gray-600 hover:text-black"><FiInstagram size={16} /></a>
            <a href="#" className="text-gray-600 hover:text-black"><FiFacebook size={16} /></a>
            <a href="#" className="text-gray-600 hover:text-black"><FiTwitter size={16} /></a>
            <a href="#" className="text-gray-600 hover:text-black"><FiYoutube size={16} /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold tracking-wider uppercase">STORE LOCATOR</h3>
          <ul className="space-y-2 text-xs text-gray-600">
            <li className="cursor-pointer hover:text-black">Find a Boutique</li>
            <li className="cursor-pointer hover:text-black">Book an Appointment</li>
            <li className="cursor-pointer hover:text-black">Grace Mania Worldwide Stores</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold tracking-wider uppercase">CLIENT SERVICE</h3>
          <ul className="space-y-2 text-xs text-gray-600">
            <li className="cursor-pointer hover:text-black">Exclusive Services</li>
            <li className="cursor-pointer hover:text-black">Care Guides</li>
            <li className="cursor-pointer hover:text-black">Contact Us</li>
            <li className="cursor-pointer hover:text-black">Help / FAQs</li>
            <li className="cursor-pointer hover:text-black">Orders & Shipping</li>
            <li className="cursor-pointer hover:text-black">Returns & Refunds</li>
            <li className="cursor-pointer hover:text-black">Track Your Order</li>
            <li className="cursor-pointer hover:text-black">Authenticity</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold tracking-wider uppercase">ABOUT US</h3>
          <ul className="mb-6 space-y-2 text-xs text-gray-600">
            <li className="cursor-pointer hover:text-black">Company Profile</li>
            <li className="cursor-pointer hover:text-black">Responsible Sourcing</li>
            <li className="cursor-pointer hover:text-black">Careers</li>
            <li className="cursor-pointer hover:text-black">Sustainable Products</li>
          </ul>

          <h3 className="mb-4 text-xs font-bold tracking-wider uppercase">LEGAL</h3>
          <ul className="space-y-2 text-xs text-gray-600">
            <li className="cursor-pointer hover:text-black">Legal Notes</li>
            <li className="cursor-pointer hover:text-black">Terms & Conditions</li>
            <li className="cursor-pointer hover:text-black">General Conditions of Purchase</li>
            <li className="cursor-pointer hover:text-black">Code of Business Conduct and Ethics</li>
            <li className="cursor-pointer hover:text-black">Code of Conduct for Business Partners</li>
            <li className="cursor-pointer hover:text-black">Privacy Policy</li>
            <li className="cursor-pointer hover:text-black">Accessibility</li>
          </ul>
        </div>
      </div>

      <div className="pt-6 mt-8 text-[15px] text-center text-gray-500 border-t border-gray-300">
        <p>© Grace Mania - Meenu Patel</p>
      </div>
    </footer>
  );
}