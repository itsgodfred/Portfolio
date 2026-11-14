import React, { createContext, useContext, useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import { navContext } from "../App";
import { Menu, Opacity } from "lucide-react";
import { CodeXml } from "lucide-react";
import { UserRoundPen } from "lucide-react";
import { Phone } from "lucide-react";

function Navbar() {
  const { navstate, setNavstate } = useContext(navContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeNav = () => {
    setNavstate((prev) => !prev);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useEffect(() => {
    const sectionIds = ["home", "about", "stack", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -40% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex text-[14px]">
      <nav
        className={`fixed w-full z-50 top-0 ${
          isScrolled && "bg-white/1 backdrop-blur-lg backdrop-saturate-150"
        } flex flex-1 px-45 py-5 justify-between items-center max-[1230px]:px-25 max-[1065px]:px-10 max-[670px]:py-7.5`}
      >
        <span
          className="font-medium text-white cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Godfred.Dev
        </span>

        <div className="flex justify-between items-center w-[40%] text-white font-medium max-[980px]:w-[50%] max-[770px]:w-[62%] max-[670px]:hidden">
          <span className="relative">
            <Link
              to=""
              onClick={() => scrollToSection("about")}
              className={`nav_link ${
                activeSection === "about" && "after:opacity-100 "
              }`}
            >
              About
            </Link>
          </span>
          <span className="relative">
            <Link
              className={`nav_link ${
                activeSection === "stack" && "after:opacity-100"
              }`}
              to=""
              onClick={() => scrollToSection("stack")}
            >
              Stack
            </Link>
          </span>
          <span className="relative">
            <Link
              className={`nav_link ${
                activeSection === "projects" && "after:opacity-100"
              }`}
              to=""
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </Link>
          </span>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-[#060d14] px-4 py-3 bg-[#1F4FD1] cursor-pointer rounded-3xl hover:shadow-sidebar transition-all duration-300"
          >
            Contact me
          </button>
        </div>
        <Menu
          className={`min-[670px]:hidden`}
          color="#ffffff"
          onClick={changeNav}
        />
      </nav>
    </div>
  );
}

export default Navbar;
