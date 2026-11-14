import SpecButton from "@/Effects/SpecButton";
import React from "react";
import linkedin from "../Images/linkedin.svg";
import { motion } from "motion/react";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="mt-32 scroll-mt-24 px-4"
      id="contact"
    >
      <h1 className="font-header text-3xl font-bold tracking-wider leading-relaxed max-[540px]:text-[22px]">
        Want to <span className="text-[#1F4FD1]">work</span> together?
      </h1>
      <div className="grid grid-cols-2 span 4 ">
        <div className="flex justify-start items-center">
          <h1 className="font-header text-2xl font-bold tracking-wider leading-relaxed max-[540px]:text-[18px]">
            Find <span className="text-[#1F4FD1]">me</span> on:
          </h1>
        </div>
        <div className="flex justify-center gap-2">
          <a
            href="http://www.linkedin.com/in/obeng-godfred"
            className="flex justify-center items-center text-[#060d14] px-6 py-0 bg-[#1F4FD1] cursor-pointer rounded-3xl hover:shadow-sidebar transition-all duration-300"
          >
            <svg
              xmlns="http://w3.org"
              viewBox="0 0 24 24"
              width="17"
              height="17"
              fill="#FFFFFF"
              aria-label="LinkedIn"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.4c0-1.76-.03-4.03-2.45-4.03-2.45 0-2.83 1.92-2.83 3.9V23h-4V8.5z" />
            </svg>
          </a>
          <a
            href="https://github.com/itsgodfred"
            className="flex justify-center items-center text-[#060d14] px-6 py-0 bg-[#1F4FD1] cursor-pointer rounded-3xl hover:shadow-sidebar transition-all duration-300"
          >
            <svg
              xmlns="http://w3.org"
              viewBox="0 0 24 24"
              width="17"
              height="17"
              fill="#FFFFFF"
              aria-label="GitHub"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
