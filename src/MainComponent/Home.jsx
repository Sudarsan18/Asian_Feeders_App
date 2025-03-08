import React from "react";
import homeImage from "../Assets/Home.png";
import bowlFeeder from "../Assets/Picture1.jpg"
import linearFeeder from "../Assets/liner_feeder.jpg"
import stepFeeder from "../Assets/stepfeeder.jpg";
import Automation from "../Assets/Automation.jpg";

const Home = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-5 md:px-10 lg:px-20">
      <div className="grid min-h-[620px] w-full grid-cols-6 flex-row pb-10 pt-14 md:py-12 lg:grid-cols-12">
        <div className="col-span-6 flex flex-col justify-center max-lg:order-2 max-lg:mt-10">
          <div className="font-bold text-primary text-[#1c6fc1]">
            <h1 className="text-xl lg:text-3xl">Why Choose</h1>
            <h2 className="text-4xl lg:text-7xl">ASSIAN <span className="text-[#e6883e]">FEEDERS</span>?</h2>
          </div>
          <p className="mb-10 mt-2.5 text-xl  leading-tight md:text-2xl text-center md:text-justify md:mt-4 shadow-xl p-4 rounded-lg bg-slate-100 font-medium">
          <span className="text-2xl text-[#1c6fc1]">"</span>Innovative Special Purpose Machines for Your Unique Needs.<span className="text-2xl text-[#1c6fc1]">"</span>
          </p>
          {/* <BookFreeConsultation size={"large"} /> */}
        </div>
        <div className="relative col-span-6 mx-auto flex size-84 items-center justify-center max-lg:order-1 lg:size-[500px]">
          <img src={homeImage} alt="why_mutual_funds"></img>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-12">
    <div className="shadow-xl rounded-lg h-[240px] parent"> <img src={bowlFeeder} className="h-4/5" alt="why_mutual_funds" style={{ width: "600px"}}></img><div className="p-2 text-center font-medium card-product-hover:bg-white">	Vibratory Bowl Feeders</div></div>
    <div className="shadow-xl rounded-lg h-[240px]"> <img src={linearFeeder} className="h-4/5" alt="why_mutual_funds" style={{ width: "600px"}}></img><div className="p-2 text-center font-medium">	Vibratory Bowl Feeders</div></div>
    <div className="shadow-xl rounded-lg h-[240px]"> <img src={stepFeeder} className="h-4/5" alt="why_mutual_funds" style={{ width: "600px"}}></img><div className="p-2 text-center font-medium">	Vibratory Bowl Feeders</div></div>
    <div className="shadow-xl rounded-lg h-[240px]"> <img src={Automation} className="h-4/5" alt="why_mutual_funds" style={{ width: "600px"}}></img><div className="p-2 text-center font-medium">	Vibratory Bowl Feeders</div></div>
      </div>
    </div>
  );
};

export default Home;
