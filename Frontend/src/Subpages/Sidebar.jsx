import React, { useState, useContext, useEffect } from "react";
import { X } from "lucide-react";
import { WalletMinimal } from "lucide-react";

import { navContext } from "../App";
import { LayoutDashboard } from "lucide-react";

import { ArrowRightLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const { navstate, setNavstate } = useContext(navContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 750px)");

    const handleScreenChange = (e) => {
      if (e.matches) {
        setNavstate(true);
      }
    };

    if (mediaQuery.matches) {
      setNavstate(true);
    }

    mediaQuery.addEventListener("change", handleScreenChange);

    return () => mediaQuery.removeEventListener("change", handleScreenChange);
  }, [screenWidth]);

  const changeNav = () => {
    setNavstate((prev) => !prev);
  };

  const location = useLocation();

  const handlePage = (urlpage) => {
    setNavstate((prev) => !prev);
    navigate(urlpage);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
        rootMargin: "-20% 0px -65% 0px",
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
    <div
      className={`text-[14px] font-medium z-90 flex flex-col h-screen w-[75%] bg-sidebg backdrop-blur-[24px] py-7.5 pl-15 pr-10 top-0 -right-[100%] fixed rounded-l-[10px] 
    transition-all duration-400 ease-in-out
    ${navstate ? "translate-x-full " : "right-0 "} `}
    >
      <div className="flex justify-end mb-30">
        <X color="#FFFFFF" className="cursor-pointer" onClick={changeNav} />
      </div>
      <div className="flex items-center">
        <ol className="flex flex-col justify-around my-5 h-full text-white w-[100%] gap-10">
          <li
            className={`nav_link relative items-center gap-2 cursor-pointer ${
              activeSection === "about" && "after:opacity-100 "
            }`}
            onClick={() => scrollToSection("about")}
          >
            <p>About</p>
          </li>
          <li
            className={`nav_link relative items-center gap-2 cursor-pointer ${
              activeSection === "stack" && "after:opacity-100 "
            }`}
            onClick={() => scrollToSection("stack")}
          >
            <p>Stack</p>
          </li>
          <li
            className={`nav_link relative items-center gap-2 cursor-pointer ${
              activeSection === "projects" && "after:opacity-100 "
            }`}
            onClick={() => scrollToSection("projects")}
          >
            <p>Projects</p>
          </li>
          <li className="flex items-center gap-2 cursor-pointer ">
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#060d14] px-4 py-3 bg-[#1F4FD1] rounded-3xl cursor-pointer hover:shadow-sidebar transition-all duration-300"
            >
              Contact me
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Sidebar;
