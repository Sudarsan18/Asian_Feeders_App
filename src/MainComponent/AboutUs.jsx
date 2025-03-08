import React from "react";
import aboutus from "../Assets/about-us.png";

const AboutUs = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-5 md:px-10 lg:px-20">
      <div className="grid min-h-[620px] w-full grid-cols-6 flex-row pb-10 pt-4 md:py-20 lg:grid-cols-12">
        <div className="col-span-6 flex flex-col justify-center max-lg:order-2 max-lg:mt-10">
          <div className="font-bold text-primary">
            <p className="text-2xl lg:text-5xl text-[#1c6fc1]">About Us</p>
          </div>
          <div className="mb-10 mt-4 text-sm leading-tight md:text-base">
            Established in 2024, <span className="text-[#1c6fc1] font-semibold text-lg">ASIAN</span> <span className="font-semibold text-lg text-[#e6883e]">FEEDERS</span> specialises in designing and
            manufacturing high-quality vibratory bowl feeders, special-purpose
            machines, and automation solutions. Our dedicated team of experts is
            committed to innovation and excellence, ensuring that our products
            meet the highest performance and reliability standards. We strive to
            provide tailored solutions that enhance efficiency and productivity
            for our clients, building long-lasting relationships based on trust
            and mutual success.
          </div>
        </div>
        <div className="relative col-span-6 mx-auto flex size-84 items-center justify-center max-lg:order-1 lg:size-[500px]">
          <img src={aboutus} alt="TermInsurance" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
