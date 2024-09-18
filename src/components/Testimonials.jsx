import React from "react";
import TestimonialCard from "./TestimonialCard";

import testimonialImg1 from "/src/assets/images/profile-1.jpg";
import testimonialImg2 from "/src/assets/images/profile-2.jpg";
import testimonialImg3 from "/src/assets/images/profile-3.jpg";

function Testimonials() {
  let testimonials = [
    {
      img: testimonialImg1,
      name: "Ali",
      position: "Founder & CEO",
      desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },

    {
      img: testimonialImg2,
      name: "Samir",
      position: "Founder & CEO",
      desc: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },

    {
      img: testimonialImg3,
      name: "Salwa",
      position: "Founder & CEO",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sunt corrupti ab quas odit consectetur sed! Fuga omnis quos esse",
    },
  ];

  return (
    <section className="mt-[150px]">
      <div className="container relative">
        <div className="absolute top-[-10px] left-[10px]">
          <img src="/src/assets/images/bg-quotes.png" alt="Quotes Img" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] relative z-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              img={testimonial.img}
              position={testimonial.position}
              desc={testimonial.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
