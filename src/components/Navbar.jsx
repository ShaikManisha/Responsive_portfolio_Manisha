// Navbar.js
import React, { useState, useEffect } from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { RiBook2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";
import "../assets/scss/components/navbar.scss";

const NavItem = ({ id, icon: Icon, activeSection, scrollToSection }) => {
  const isActive = activeSection === id;

  const handleClick = () => {
    scrollToSection(id);
  };

  return (
    <li className={`nav__item ${isActive ? "active-link" : ""}`}>
      <a href={`#${id}`} className="nav__link" onClick={handleClick}>
        <Icon className="nav__icon" />
      </a>
    </li>
  );
};

const Navbar = ({ theme, toggleTheme }) => {
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = {
        home: document.getElementById("home").offsetTop - 50,
        about: document.getElementById("about").offsetTop - 50,
        skills: document.getElementById("skills").offsetTop - 50,
        work: document.getElementById("work").offsetTop - 50,
        contact: document.getElementById("contact").offsetTop - 50,
      };

      const scrollPosition = window.scrollY;

      const sections = Object.keys(sectionOffsets);
      let currentSection = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionOffsets[sections[i]]) {
          currentSection = sections[i];
          break;
        }
      }

      setActiveSection(currentSection);

      if (scrollPosition >= 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const navItems = [
    { id: "home", icon: FiHome },
    { id: "about", icon: AiOutlineUser },
    { id: "skills", icon: RiBook2Line },
    { id: "work", icon: BiBriefcaseAlt2 },
    { id: "contact", icon: BiMessageSquareDetail },
  ];

  return (
    <>
      <header className={`header ${scroll ? "scroll-header" : ""}`}>
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Manisha
          </a>

          <div className="nav__menu">
            <ul className="nav__list">
              {navItems.map((item) => (
                <NavItem
                  key={item.id}
                  id={item.id}
                  icon={item.icon}
                  activeSection={activeSection}
                  scrollToSection={scrollToSection}
                />
              ))}
            </ul>
          </div>
          <button onClick={handleThemeToggle} className="change-theme">
            {theme === "dark-theme" ? <LuMoon /> : <IoSunnyOutline />}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
