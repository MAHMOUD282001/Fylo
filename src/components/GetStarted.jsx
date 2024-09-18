import React from "react";

function GetStarted() {
  return (
    <section className="mt-[150px] relative">
      <div className="absolute left-[50%] translate-x-[-50%] top-[-100px] bg-[#1c2230] rounded-[5px] flex flex-col center-element w-[860px] max-w-[90%] min-h-[270px] text-white text-center p-[30px]">
        <div>
          <h2 className="text-[25px] md:text-[35px] font-semibold mb-[15px]">
            Get Started
          </h2>
          <p className="px-[0] sm:px-[100px] mb-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            consectetur est. Vero ex ipsa explicabo?
          </p>
        </div>

        <form
          action=""
          className="flex items-center justify-between flex-wrap w-full md:px-[60px] gap-[25px] md:gap-[50px]"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="w-full md:flex-1 rounded-full border-none outline-none h-[50px] text-black p-[20px]"
          />
          <button
            type="submit"
            className="w-full md:w-[200px] h-[50px] bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-300 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default GetStarted;
