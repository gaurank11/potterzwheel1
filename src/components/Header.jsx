import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Properties",
      link: "/properties",
      dropdown: [
        { name: "Residential", link: "/properties/residential" },
        { name: "Commercial", link: "/properties/commercial" },
        { name: "SCO", link: "/properties/sco" },
        { name: "Studio Apartments", link: "/properties/studio_apartments" },
        { name: "Plots", link: "/properties/plots" },
        { name: "Fractional Ownership", link: "/properties/fractional_ownership" },
      ],
    },
    { name: "Services", link: "/services" },
    {
      name: "Resources",
      link: "/resources",
      dropdown: [
        { name: "Stamp Duty Calculator", link: "/resources/stamp_duty" },
        { name: "EMI Calculator", link: "/resources/emi" },
        { name: "Recommendations", link: "/resources/recommendations" },
      ],
    },
    {
      name: "About",
      link: "/about",
      dropdown: [
        { name: "NRI Corner", link: "/about/nri" },
        { name: "Investors", link: "/about/investors" },
      ],
    },
    { name: "Blog", link: "/blog" },
    { name: "Contact Us", link: "/contact" },
  ];

  const toggleDropdown = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  return (
    <header className="bg-gray-900 text-white py-2 font-NOURD">
      {/* Main container */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="logo.png" // Replace with the actual image path
                alt="Logo"
                className="h-12 w-auto" // Increased size for better visibility
              />
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex md:space-x-8 text-DMSans">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => item.dropdown && setOpenDropdown(idx)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link to={item.link} className="relative group">
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {item.dropdown && openDropdown === idx && (
                  <div className="absolute top-full left-0 bg-gray-800 text-white shadow-lg py-2">
                    {item.dropdown.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        to={subItem.link}
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-900 text-DMSans">
          <div className="space-y-2 px-4 py-4">
            {menuItems.map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between items-center">
                  <Link
                    to={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white hover:text-gray-200"
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <button
                      onClick={() => toggleDropdown(idx)}
                      className="text-white focus:outline-none"
                    >
                      {openDropdown === idx ? (
                        <MinusIcon className="h-5 w-5" />
                      ) : (
                        <PlusIcon className="h-5 w-5" />
                      )}
                    </button>
                  )}
                </div>
                {item.dropdown && openDropdown === idx && (
                  <div className="pl-4">
                    {item.dropdown.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        to={subItem.link}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-gray-400 hover:text-gray-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
