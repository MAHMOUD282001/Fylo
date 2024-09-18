import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/src/assets/images/logo.svg"

function Header() {
  let [links, setLinks] = useState(["About", "Features", "Team", "Signin"]);
  let headerRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "30px 0";
      }
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      ref={headerRef}
      className="py-[30px] fixed top-0 left-0 w-full z-[999] transition-all duration-500"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex-shrink-0 z-[2]">
            <img
              src={logo}
              className="w-[120px] sm:w-[150px]"
              alt="Logo"
            />
          </a>

          <div className="md:hidden z-[2]">
            <button
              onClick={toggleMenu}
              className="text-white text-2xl focus:outline-none"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <nav
            className={`${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-full md:opacity-100 md:translate-y-0"
            } flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-[#0c1524] md:bg-transparent py-4 md:py-0 mt-2 md:mt-0 transition-all duration-500`}
          >
            {links.map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                className="text-primary hover:text-white transition-all duration-300 px-4 py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
