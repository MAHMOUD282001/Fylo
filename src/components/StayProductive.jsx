import React from "react";
import stayProductiveImg from "/src/assets/images/illustration-stay-productive.png";
import arrowIcon from "/src/assets/images/icon-arrow.svg";


function StayProductive() {
  return (
    <section className="mt-[150px]">
      <div className="container">
        <div className="flex flex-col md:flex-row text-center md:text-left items-center gap-[70px]">
          <div className="w-[900px] max-w-full">
            <img src={stayProductiveImg} alt="Stay Productive Img" />
          </div>

          <div className="text-white">
            <h3 className="text-[35px] md:text-[40px] leading-[50px] font-medium">
              Stay productive
              <br />
              wherever you are
            </h3>

            <div className="my-[15px] font-normal text-sm tracking-[.7px]">
              <p className="mb-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                inventore aliquid quo nostrum perspiciatis obcaecati culpa
                dicta. Minima, magni perferendis!
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                inventore aliquid quo nostrum perspiciatis obcaecati culpa
                dicta. Minima, magni perferendis!
              </p>
            </div>

            <a
              href="/"
              className="text-primary hover:text-white transition-all duration-300 border-b-2 border-primary hover:border-white pb-3 flex items-center justify-center md:justify-start gap-[15px] w-[90%] md:w-fit m-auto md:m-0 text-center"
            >
              See how fylo works
              <img
                src={arrowIcon}
                alt="Arrow Img"
                className="w-[20px] h-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StayProductive;
