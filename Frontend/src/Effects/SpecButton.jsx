import React from "react";
import SpecularButton from "./SpecularButton";

function SpecButton() {
  return (
    <div>
      <SpecularButton
        size="lg"
        radius={18}
        tint="#ffffff"
        tintOpacity={0.04}
        textColor="#f5f5f5"
        lineColor="#ffffff"
        baseColor="#114eb2"
        intensity={1}
        idleIntensity={0.35}
        shineSize={10}
        shineFade={34}
        thickness={1.2}
        glow={1}
        followMouse
        proximity={250}
        onClick={() => console.log("clicked")}
      >
        <i class="devicon-linkedin-plain-wordmark"></i>
      </SpecularButton>
    </div>
  );
}

export default SpecButton;
