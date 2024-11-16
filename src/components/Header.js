/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.webp";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../data";
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

  // Conditional Elements | Styling |:
  // const bgStyle = bg ? "bg-golden py-4 lg:py-6" : "bg-none";
  const mobileNavMenu = mobileNav ? <CgClose /> : <CgMenuRight />;
  const mobileNavMenuStyle = mobileNav ? "left-0" : "-left-full";
  const navItems = navigation.map((item, index) => (
    <li key={index}>
      <Link
        to={item.href}
        className={`text-white capitalize hover:border-b transition-all`}
      >
        {item.name}
      </Link>
    </li>
  ));

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

  // // Controlling the Scrolling Effect
  // useEffect(() => {
  //   console.log("Hello");
  //   document.addEventListener("scroll", () =>
  //     window.scrollY > 50 ? setBg(true) : setBg(false)
  //   );
  // });

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
            <NavMobile />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Header;
