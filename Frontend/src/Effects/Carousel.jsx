import React from "react";
import FlexCarousel from "./FlexCarousel";
import htmlIcon from "../Images/html.svg";
import cssIcon from "../Images/css.svg";
import reactIcon from "../Images/react.svg";
import jsIcon from "../Images/javascript.svg";
import tailwindIcon from "../Images/tailwind.svg";
import nodeIcon from "../Images/nodejs.svg";
import expressIcon from "../Images/express.svg";
import postgresIcon from "../Images/postgresql.svg";
import javaIcon from "../Images/java.svg";
import cIcon from "../Images/c++.svg";

function Carousel() {
  const items = [
    { src: htmlIcon, alt: "HTML", title: "HTML" },
    { src: cssIcon, alt: "CSS", title: "CSS" },
    { src: reactIcon, alt: "React", title: "React" },
    { src: jsIcon, alt: "JavaScript", title: "JavaScript" },
    { src: tailwindIcon, alt: "Tailwind", title: "Tailwind" },
    { src: nodeIcon, alt: "Node.js", title: "Node.js" },
    { src: expressIcon, alt: "Express", title: "Express" },
    { src: postgresIcon, alt: "PostgreSQL", title: "PostgreSQL" },
    { src: javaIcon, alt: "Java", title: "Java" },
    { src: cIcon, alt: "C++", title: "C++" },
  ];

  return (
    <div className="w-[100%] h-[200px] relative max-[600px]:h-[140px]">
      <FlexCarousel
        items={items}
        preset="arch"
        cardHeight={0.26}
        gap={100}
        squeeze={0}
        focusOnClick={false}
        captions={false}
        fit="square"
        radius={0}
        lensWidth={5}
        lensHeight={1.01}
        tilt={0}
        roundness={1}
        bend={0}
        reach={0.36}
        curl="rise"
        dispersion={0}
        liquid={0}
        followCursor={false}
        autoplay
        interval={2}
        captureWheel={false}
      />
    </div>
  );
}

export default Carousel;
