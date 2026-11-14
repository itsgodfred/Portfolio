import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import project1 from "../Images/project1.png";
import project2 from "../Images/project2.png";
import project3 from "../Images/project3.png";
import project4 from "../Images/project4.png";
import project5 from "../Images/project5.png";
import project6 from "../Images/project6.png";
import { Eye } from "lucide-react";
import { motion } from "motion/react";
import Autoplay from "embla-carousel-autoplay";

function Projects() {
  const projects = [project1, project2, project3, project4, project5, project6];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full flex flex-col justify-center items-center pt-20 scroll-mt-24"
      id="projects"
    >
      <h1 className="font-header font-black text-[24px] mb-5">
        My <span className="text-[#1F4FD1]"> Projects</span>
      </h1>
      <Carousel className="w-full max-w-[100%] min-[700px]:max-w-[90%] max-[700px]:w-[75%] max-[480px]:w-[85%] pt-8 ">
        <CarouselContent className="-ml-4">
          <CarouselItem className="basis-full pl-4 min-[700px]:basis-1/2 lg:basis-1/3">
            <div className="rounded-t-[5px] overflow-hidden">
              <div className="relative cursor-pointer">
                <img src={project6} className="w-full" />
                <a
                  href="https://expense-tracker-frontend-f2tp.onrender.com"
                  className="opacity-0 absolute inset-0 bg-black/80 flex justify-center items-center gap-1 hover:opacity-100 transition-opacity duration-300"
                >
                  <p className="font-extralight">view</p>{" "}
                  <Eye strokeWidth={1.5} size={19} />
                </a>
              </div>
              <div className="p-2">
                <p className="font-extralight pt-2 pb-4 text-[15px] tracking-wider leading-relaxed max-[650px]:text-[13px]">
                  A expense tracker app with an interactive ui
                </p>
                <div className="flex justify-start items-center flex-wrap">
                  <span className="py-1 px-2 bg-[#3767ec33] text-white rounded-2xl border-[1px] border-[#0037ce] mr-2 mb-1.5">
                    <p className="font-extralight text-[12px]">REACT JS</p>
                  </span>
                  <span className="py-1 px-2 bg-[#3767ec33] text-white rounded-2xl border-[1px] border-[#0037ce] mr-2 mb-1.5">
                    <p className="font-extralight text-[12px]">TAILWIND</p>
                  </span>
                  <span className="py-1 px-2 bg-[#3767ec33] text-white rounded-2xl border-[1px] border-[#0037ce] mr-2 mb-1.5">
                    <p className="font-extralight text-[12px]">NODE JS</p>
                  </span>
                  <span className="py-1 px-2 bg-[#3767ec33] text-white rounded-2xl border-[1px] border-[#0037ce] mr-2 mb-1.5">
                    <p className="font-extralight text-[12px]">POSTGRESQL</p>
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-full pl-4 min-[700px]:basis-1/2 lg:basis-1/3">
            <div className="rounded-t-[5px] overflow-hidden">
              <div className="relative cursor-pointer">
                <img src={project1} className="w-full" />
                <a
                  href="https://gorentt.netlify.app/"
                  className="opacity-0 absolute inset-0 bg-black/80 flex justify-center items-center gap-1 hover:opacity-100 transition-opacity duration-300"
                >
                  <p className="font-extralight">view</p>{" "}
                  <Eye strokeWidth={1.5} size={19} />
                </a>
              </div>

              <div className="p-2">
                <p className="font-extralight pt-2 pb-4 text-[15px] tracking-wider leading-relaxed max-[650px]:text-[13px]">
                  A car rental app with an engaging ui
                </p>
                <div className="flex justify-start items-center">
                  <span className="py-1 px-2 bg-[#3767ec33] text-white rounded-2xl border-[1px] border-[#0037ce] mr-2">
                    <p className="font-extralight text-[12px]">HTML</p>
                  </span>
                  <span className="py-1 px-2 bg-[#3767ec33] text-white rounded-2xl border-[1px] border-[#0037ce] mr-2">
                    <p className="font-extralight text-[12px]">CSS</p>
                  </span>
                  <span className="py-1 px-2 bg-[#3767ec33] text-white rounded-2xl border-[1px] border-[#0037ce] mr-2">
                    <p className="font-extralight text-[12px]">JS</p>
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-full pl-4 min-[700px]:basis-1/2 lg:basis-1/3">
            <div className="rounded-t-[5px] overflow-hidden">
              <div className="relative cursor-pointer">
                <img src={project2} className="w-full" />
                <a
                  href="https://myjobboard.netlify.app/"
                  className="opacity-0 absolute inset-0 bg-black/80 flex justify-center items-center gap-1 hover:opacity-100 transition-opacity duration-300"
                >
                  <p className="font-extralight">view</p>{" "}
                  <Eye strokeWidth={1.5} size={19} />
                </a>
              </div>
              <div className="p-2">
                <p className="font-extralight pt-2 pb-4 text-[15px] tracking-wider leading-relaxed max-[650px]:text-[13px]">
                  A job application app with an engaging ui
                </p>
                <div className="flex justify-start items-center flex-wrap">
                  <span className="py-1 px-2 bg-[#3767ec33] text-white rounded-2xl border-[1px] border-[#0037ce] mr-2 mb-1.5">
                    <p className="font-extralight text-[12px]">REACT JS</p>
                  </span>
                  <span className="py-1 px-2 bg-[#3767ec33] text-white rounded-2xl border-[1px] border-[#0037ce] mr-2 mb-1.5">
                    <p className="font-extralight text-[12px]">CSS</p>
                  </span>
                  <span className="py-1 px-2 bg-[#3767ec33] text-white rounded-2xl border-[1px] border-[#0037ce] mr-2 mb-1.5">
                    <p className="font-extralight text-[12px]">NODE JS</p>
                  </span>
                  <span className="py-1 px-2 bg-[#3767ec33] text-white rounded-2xl border-[1px] border-[#0037ce] mr-2 mb-1.5">
                    <p className="font-extralight text-[12px]">POSTGRESQL</p>
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-full pl-4 min-[700px]:basis-1/2 lg:basis-1/3 ">
            <div className="rounded-t-[5px] overflow-hidden">
              <div className="relative cursor-pointer">
                <img src={project3} className="w-full" />
                <a
                  href="https://myrecipeboook.netlify.app/"
                  className="opacity-0 absolute inset-0 bg-black/80 flex justify-center items-center gap-1 hover:opacity-100 transition-opacity duration-300"
                >
                  <p className="font-extralight">view</p>{" "}
                  <Eye strokeWidth={1.5} size={19} />
                </a>
              </div>
              <div className="p-2">
                <p className="font-extralight pt-2 pb-4 text-[15px] tracking-wider leading-relaxed max-[650px]:text-[13px]">
                  A recipe app with an interactive ui
                </p>
                <div className="flex justify-start items-center flex-wrap">
                  <span className="py-1 px-2 bg-[#3767ec33] text-white rounded-2xl border-[1px] border-[#0037ce] mr-2 mb-1.5">
                    <p className="font-extralight text-[12px]">REACT JS</p>
                  </span>
                  <span className="py-1 px-2 bg-[#3767ec33] text-white rounded-2xl border-[1px] border-[#0037ce] mr-2 mb-1.5">
                    <p className="font-extralight text-[12px]">CSS</p>
                  </span>
                  <span className="py-1 px-2 bg-[#3767ec33] text-white rounded-2xl border-[1px] border-[#0037ce] mr-2 mb-1.5">
                    <p className="font-extralight text-[12px]">NODE JS</p>
                  </span>
                  <span className="py-1 px-2 bg-[#3767ec33] text-white rounded-2xl border-[1px] border-[#0037ce] mr-2 mb-1.5">
                    <p className="font-extralight text-[12px]">POSTGRESQL</p>
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
}

export default Projects;
