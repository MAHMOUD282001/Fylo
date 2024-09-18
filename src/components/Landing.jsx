import React from "react";
import heroImg from "/src/assets/images/illustration-intro.png";

function Landing() {
  return (
    <section className="bg-[#1c2230]">
      {" "}
      <div className="container flex flex-col items-center">
        <div className="w-[750px] max-w-full mt-[150px]">
          <img
            src={heroImg}
            alt="Hero Img"
            className="w-full"
          />
        </div>

        <div className="text-white text-center">
          <h1 className="text-[30px] sm:text-[40px] mb-[15px] font-medium">
            All Your Files In One Secure Location
            <br />
            Accessible Any Where
          </h1>
          <p className="font-normal text-sm px-[15px] md:w-[600px] md:mx-auto mb-[25px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            temporibus ut mollitia? Ipsum nisi eveniet sequi. Adipisci, corporis
            labore totam a blanditiis quas recusandae nisi, voluptas harum vitae
            optio eligendi.
          </p>

          <button className="btn w-[250px] h-[50px]">Get Started</button>
        </div>
      </div>
      <div>
        <img
          src="/src/assets/images/bg-curvy-desktop.svg"
          alt="Curve Img"
          className="w-full h-[200px]"
        />
      </div>
    </section>
  );
}

export default Landing;
