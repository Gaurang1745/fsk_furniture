import React, { useEffect, useState } from "react";
import { navigation } from "../data";
import { Link } from "react-router-dom";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const NavMobile = ({ mobileNav, setMobileNav }) => {
  // State to track which submenus are open
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [navMenu, setNavMenu] = useState([]);
  const [renderedMenu, setRenderedMenu] = useState(null);

  // Handle submenu opening and closing
  const handleSubMenu = (item, index) => {
    if (item.subMenu) {
      setIsSubMenuOpen(true);
      setNavMenu(item.subMenu); // Set submenu items to display
    } else {
      setMobileNav(false);
    }
  };

  useEffect(() => {
    setNavMenu(navigation);
  }, []);

  useEffect(() => {
    const navItems = navMenu.map((item, index) => (
      <li key={index} className="">
        {/* Regular menu item */}
        <div
          className="flex items-center justify-between w-full"
          onClick={() => handleSubMenu(item, index)} // Toggle submenu on click if there's a submenu
        >
          <Link
            to={item.href}
            className="text-black capitalize hover:border-b transition-all py-2 block text-left"
          >
            {item.name}
          </Link>
          {/* Show chevron if the item has a submenu */}
          {item.subMenu && (
            <span>
              <IoChevronForward className={`text-xl text-black `} />
            </span>
          )}
        </div>
      </li>
    ));
    setRenderedMenu(navItems);
  }, [navMenu]);

  return (
    <nav className="bg-white w-full h-full shadow-2xl">
      <ul className="capitalize pl-8 h-full flex flex-col items-center justify-center gap-y-5 text-xl font-medium">
        {/* Add back button if submenu is open */}
        {isSubMenuOpen && (
          <li>
            <button
              onClick={() => {
                setIsSubMenuOpen(false);
                setNavMenu(navigation); // Reset to main menu items
              }}
              className="flex items-center text-gray-500 capitalize hover:border-b transition-all py-2 text-left"
            >
              <IoChevronBack className="text-xl text-gray-500 mr-2" />{" "}
              {/* Add margin for spacing */}
              <span>Back</span>
            </button>
          </li>
        )}
        {renderedMenu}
      </ul>
    </nav>
  );
};

export default NavMobile;
