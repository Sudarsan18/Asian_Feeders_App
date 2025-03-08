import React from "react";
import homeImage from "../Assets/why_mutual_funds.png";

const Home = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-5 md:px-10 lg:px-20">
      <div className="grid min-h-[620px] w-full grid-cols-6 flex-row pb-10 pt-4 md:py-20 lg:grid-cols-12">
        <div className="col-span-6 flex flex-col justify-center max-lg:order-2 max-lg:mt-10">
          <div className="font-bold text-primary text-[#1c6fc1]">
            <h1 className="text-xl lg:text-3xl">Why Choose</h1>
            <h2 className="text-4xl lg:text-7xl">ASSIAN <span className="text-[#e6883e]">FEEDERS</span>?</h2>
          </div>
          <p className="mb-10 mt-2.5 text-xl  leading-tight md:text-2xl text-justify md:mt-4">
          <span className="text-2xl text-[#1c6fc1]">"</span>Innovative Special Purpose Machines for Your Unique Needs.""
          </p>
          {/* <BookFreeConsultation size={"large"} /> */}
        </div>
        <div className="relative col-span-6 mx-auto flex size-84 items-center justify-center max-lg:order-1 lg:size-[500px]">
          <img src={homeImage} alt="why_mutual_funds"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
