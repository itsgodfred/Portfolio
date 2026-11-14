import Sidebar from "../Subpages/Sidebar";
import React, { createContext, useContext } from "react";
import { navContext } from "../App";
import Text from "../Effects/Text";
import Profile from "../Effects/ProfileCard";
import About from "../Subpages/About";
import { ArrowDown } from "lucide-react";
import CircularButton from "../Effects/CircularButton";
import Skills from "../Subpages/Skills";
import Projects from "../Subpages/Projects";
import Contact from "../Subpages/Contact";
import Footer from "../Subpages/Footer";
import { motion } from "motion/react";

function Home() {
  const { navstate, setNavstate } = useContext(navContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className=" px-45 text-white pt-15 max-[1230px]:px-25 max-[1065px]:px-10 scroll-mt-24"
      id="home"
    >
      <div className="leading-relaxed flex flex-col items-center mt-28">
        <p className="font-medium text-[18px] tracking-wider max-[650px]:text-[14px]">
          Hello there! I am Godfred
        </p>
        <Text />
        <p className="font-extralight text-[15px] text-[#c4cbd6] tracking-wider max-[650px]:text-[13px] text-center">
          Building digital experiences that solve everyday problems and make an
          impact.
        </p>
      </div>
      <div className="relative overflow-hidden">
        <Profile />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <Sidebar />
    </motion.div>
  );
}

export default Home;
