import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeXml } from "lucide-react";
import Carousel from "@/Effects/Carousel";
import { motion } from "motion/react";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col justify-center items-center pt-30 scroll-mt-24"
      id="stack"
    >
      <h1 className="font-header font-black text-[24px]">
        Tech <span className="text-[#1F4FD1]"> Stack</span>
      </h1>
      <Carousel />
      <div className="px-4 text-[15px] tracking-wider leading-relaxed font-extralight max-[650px]:text-[13px] ">
        <p className="pb-2">
          <span className="font-normal font-header">Frontend:</span> HTML, CSS,
          Javascript, Tailwind and React for Sleek and responsive UI.
        </p>
        <p className="pb-2">
          <span className="font-normal font-header">Backend & Data:</span>{" "}
          Powered by Node.js, Express and Postgresql.
        </p>
        <p className="pb-2">
          <span className="font-normal font-header">Foundations:</span> My
          foundations in programming are backed by core principles in java and
          C++.
        </p>
      </div>
    </motion.div>
  );
}

export default Skills;
