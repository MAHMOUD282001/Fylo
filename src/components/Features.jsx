import React from "react";
import FeatureBox from "./FeatureBox";
import feature1 from "/src/assets/images/icon-access-anywhere.svg";
import feature2 from "/src/assets/images/icon-collaboration.svg";
import feature3 from "/src/assets/images/icon-any-file.svg";
import feature4 from "/src/assets/images/icon-security.svg";



function Features() {
  let features = [
    {
      img: feature1,
      name: "Access your files, anywhere",
      desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },

    {
      img: feature2,
      name: "Real-time collaboration",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sunt corrupti ab quas odit consectetur sed! Fuga omnis quos esse",
    },

    {
      img: feature3,
      name: "Store any Type of file",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sunt corrupti ab quas odit consectetur sed! Fuga omnis quos esse",
    },

    {
      img: feature4,
      name: "Security you can trust",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sunt corrupti ab quas odit consectetur sed! Fuga omnis quos esse",
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[870px] max-w-full mx-auto">
        {features.map((feature, index) => (
          <FeatureBox
            key={index}
            img={feature.img}
            name={feature.name}
            desc={feature.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
