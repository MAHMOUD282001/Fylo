import React from "react";

function TestimonialCard({ name, img, position, desc }) {
  return (
    <div className="text-white bg-[#21293c] rounded-[5px] p-[30px] shadow-[5px_5px_1px_8px_#1c202c]">
      <p className="text-sm font-normal tracking-[.7px] mb-[30px]">{desc}</p>

      <div className="flex items-center gap-[15px]">
        <img
          src={img}
          alt="Person Img"
          className="w-[50px] h-[50px] rounded-full"
        />

        <div>
          <h5 className="mb-[7px] font-semibold">{name}</h5>
          <p className="text-sm font-normal">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
