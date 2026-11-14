import React from "react";
import TextType from "../Effects/TextType";

function Text() {
  return (
    <div>
      <TextType
        className="text-[42px] py-1 font-header font-black text-[#1F4FD1] tracking-wider max-[935px]:text-4xl max-[750px]:text-3xl max-[650px]:text-2xl max-[520px]:text-xl max-[450px]:text-[15px] "
        text={["Full Stack Developer", "Frontend", "Backend"]}
        typingSpeed={75}
        pauseDuration={2200}
        deletingSpeed={70}
        deleteMode="backspace"
        typeEffect="fade"
        mistakes={0}
        cursorStyle="bar"
        cursorGlide
        showCursor
        cursorColor="#1f4fd1"
        prefixColor="#1f4fd1"
        cursorBlinkDuration={0.55}
        cursorCharacter="_"
        prefix=""
        variableSpeed={{ min: 40, max: 170 }}
      />
    </div>
  );
}

export default Text;
