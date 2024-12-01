import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.webp";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../data"; // Assuming this is your navigation data
import NavMobile from "./NavMobile";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  // Use useLocation to get the current route
  const location = useLocation();

  // Check if we're on the Home page (root path "/")
  const isHomePage = location.pathname === "/";

  // Navbar background style - no background on Home page, else static bg-golden
  const bgStyle = isHomePage
    ? bg
      ? "bg-golden py-4 lg:py-6" // Scroll-triggered background for Home page
      : "bg-none" // Home page with no background
    : "bg-golden py-4 lg:py-6"; // Static background for all other pages

  // Mobile nav menu icon (toggle between hamburger and close)
  const mobileNavMenu = mobileNav ? <CgClose /> : <CgMenuRight />;
  const mobileNavMenuStyle = mobileNav ? "left-0" : "-left-full";

  // Navigation items (with dropdown handling)
  const navItems = navigation.map((item, index) => {
    // Check if the item has a subMenu (dropdown)
    if (item.subMenu) {
      return (
        <li key={index} className="relative group">
          <button className="text-white capitalize transition-all">
            {item.name}
          </button>

          {/* Dropdown for desktop */}
          <div className="absolute left-1/2 top-full transform -translate-x-1/2 group-hover:block hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
            <ul
              className="bg-golden text-white py-2 px-4 mt-4 rounded-lg shadow-md"
              style={{ transitionDelay: "0.2s" }} // Delay to ensure submenu stays visible
            >
              {item.subMenu.map((subItem, subIndex) => (
                <li key={subIndex} className="px-4 py-2 text-center">
                  <Link to={subItem.href} className="capitalize hover:border-b">
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      );
    }

    // If no dropdown, just render the link
    return (
      <li key={index}>
        <Link
          to={item.href}
          className="text-white capitalize hover:border-b transition-all"
        >
          {item.name}
        </Link>
      </li>
    );
  });

  // Controlling the Scrolling Effect for Home page only
  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        // If scroll position > 50px, apply the background; otherwise remove it
        if (window.scrollY > 50) {
          setBg(true);
        } else {
          setBg(false);
        }
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]); // Depend on `isHomePage` to trigger effect only when on the Home page

  return (
    <section
      className={`${bgStyle} fixed w-full left-0 py-8 z-10 transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="Brand Logo" className="h-6 lg:h-8" />
          </Link>
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNavMenu}
          </div>
          {/* Nav Desktop + Tablet */}
          <nav className="hidden md:flex">
            <ul className="flex md:gap-x-12">{navItems}</ul>
          </nav>
          {/* Nav Mobile */}
          <section
            className={`${mobileNavMenuStyle} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile mobileNav={mobileNav} setMobileNav={setMobileNav} />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Header;
