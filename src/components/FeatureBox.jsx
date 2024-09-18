import React from "react";

function FeatureBox({ img, name, desc }) {
  return (
    <div className="text-white center-element flex-col text-center">
      <img
        src={img}
        alt="Feature Img"
        className="w-[72px] h-[72px] object-contain"
      />
      <h4 className="text-xl font-semibold my-[15px]">{name}</h4>
      <p className="text-sm font-normal">{desc}</p>
    </div>
  );
}

export default FeatureBox;
