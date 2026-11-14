import React from "react";
import Lanyard from "../Effects/Lanyard";
import profile from "../Images/profile.png";
import CircularButton from "../Effects/CircularButton";
import my_cv from "../Documents/CV.pdf";

function ProfileCard() {
  return (
    <div className="relative">
      <div style={{ width: "100%", height: "545px" }}>
        <Lanyard
          frontImage={profile}
          backImage="/card-back.png"
          strapImage="/band.png"
          imageFit="cover"
          cardColor="#06131f"
          orientation="portrait"
          finish="glossy"
          cornerRadius={0.3}
          size={0.5}
          anchor="center"
          strapLength={0.1}
          strapColor="#111111"
          strapWidth={0.65}
          metal="silver"
          gravity={1}
          damping={0.5}
          elasticity={0.5}
          breeze={0.5}
          interactive={false}
          intro
        />
      </div>
      <a
        href={my_cv}
        download="CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-77 right-[39%] max-[1020px]:right-[35%] max-[845px]:right-[33%] max-[720px]:right-[30%] max-[650px]:right-[28%] max-[560px]:right-[25%] max-[500px]:right-[22%] max-[440px]:right-[16%] "
      >
        <CircularButton />
      </a>
    </div>
  );
}

export default ProfileCard;
