import React from "react";
import CircularText from "./CircularText";

function Circular() {
  return (
    <div>
      <CircularText
        text="Download  CV "
        onHover="pause"
        direction="clockwise"
        center="Arrow"
        spinDuration={8}
        size={240}
        fontSize={26}
        draggable
        hoverTilt={0}
        className="custom-class"
        tilt={0}
        fontWeight={900}
        letterSpacing={0.02}
        startAngle={0}
        repeat={2}
        fill={false}
        ring={false}
      />
    </div>
  );
}

export default Circular;
