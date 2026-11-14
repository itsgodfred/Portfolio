import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { CodeXml } from "lucide-react";
import { motion } from "motion/react";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col justify-center items-center scroll-mt-24 "
      id="about"
    >
      <h1 className="font-header font-black text-[24px] mb-5">
        About <span className="text-[#1F4FD1]"> Me</span>
      </h1>
      <div className="py-8 px-4">
        <p className="text-[15px] font-extralight tracking-wider leading-relaxed max-[650px]:text-[13px]">
          I am Godfred Obeng, a full stack developer based in Italy Brescia. I
          am passionate about building web applications that seek to solve a
          problem and make impact in the society.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 w-full max-[700px]:grid-cols-1">
        <Card className="bg-[#19191a] text-white tracking-wider leading-relaxed ">
          <CardHeader>
            <CardTitle className="font-header text-[#1F4FD1] text-2xl">
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-extralight max-[650px]:text-[13px]">
              Had my highschool education at Cristoforo Marzoli where i studied
              computer science. This is where i had my first programming
              experience with programming languages like{" "}
              <span className="text-[#1F4FD1] font-medium">C++</span> and{" "}
              <span className="text-[#1F4FD1] font-medium">JAVA</span>.<br />
              <br />
              Currently in my third year at the University of Verona studying
              computer science. This is where i fell in love with software
              development after being introduced to software architectural
              patterns and working on a project using java spring boot.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#19191a] text-white tracking-wider leading-relaxed max-[650px]:text-[13px]">
          <CardHeader>
            <CardTitle className="font-header text-[#1F4FD1] text-2xl">
              Language Proficiency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="pb-3">
              <h2 className="text-[15px] pb-1.5">English</h2>
              <span className="flex font-extralight pb-1">
                <span className="flex justify-center items-center pl-4">
                  <CodeXml
                    strokeWidth={1.5}
                    size={18}
                    color="#1F4FD1"
                    className="pr-1"
                  />
                  <p>Speaking Level:{"  "}</p>
                </span>

                <span className="flex items-center pl-2">C2</span>
              </span>
              <span className="flex font-extralight pb-1">
                <span className="flex justify-center items-center pl-4">
                  <CodeXml
                    strokeWidth={1.5}
                    size={18}
                    color="#1F4FD1"
                    className="pr-1"
                  />
                  <p>Writing Level:{"  "}</p>
                </span>

                <span className="flex items-center pl-2">C2</span>
              </span>
            </div>
            <div>
              <h2 className="text-[15px] pb-1.5">Italian</h2>
              <span className="flex font-extralight pb-1">
                <span className="flex justify-center items-center pl-4">
                  <CodeXml
                    strokeWidth={1.5}
                    size={18}
                    color="#1F4FD1"
                    className="pr-1"
                  />
                  <p>Speaking Level:{"  "}</p>
                </span>

                <span className="flex items-center pl-2">C1</span>
              </span>
              <span className="flex font-extralight pb-1">
                <span className="flex justify-center items-center pl-4">
                  <CodeXml
                    strokeWidth={1.5}
                    size={18}
                    color="#1F4FD1"
                    className="pr-1"
                  />
                  <p>Writing Level:{"  "}</p>
                </span>

                <span className="flex items-center pl-2">C1</span>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

export default About;
