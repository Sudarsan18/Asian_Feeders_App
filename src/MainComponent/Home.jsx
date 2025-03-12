import React from "react";
import { services } from "../Common/CommonConstant";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-5 md:px-10 lg:px-20">
        <div className="grid min-h-[620px] w-full grid-cols-6 flex-row pb-10 pt-14 md:py-12 lg:grid-cols-12">
          <div className="col-span-6 flex flex-col justify-center max-lg:order-2 max-lg:mt-10">
            <div className="font-bold text-primary text-[#1c6fc1]">
              <h1 className="text-xl lg:text-3xl">Why Choose</h1>
              <h2 className="text-4xl lg:text-7xl">
                ASIAN <span className="text-[#e6883e]">FEEDERS</span>?
              </h2>
            </div>
            <p className="mb-10 mt-2.5 text-xl md:text-2xl text-center md:text-justify md:mt-4 shadow-xl p-4 rounded-lg bg-slate-100 font-medium transform transition duration-300 hover:scale-110">
              <span className="text-2xl text-[#1c6fc1]">"</span>Innovative
              Special Purpose Machines for Your Unique Needs
              <span className="text-2xl text-[#1c6fc1]">"</span>
            </p>
            {/* <BookFreeConsultation size={"large"} /> */}
          </div>
          <div className="relative col-span-6 mx-auto flex size-84 items-center justify-center max-lg:order-1 lg:w-[650px] lg:h-[500px]">
            <img src={"/Assets/Home.png"} alt="why_mutual_funds"></img>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-100 py-10">
        <div className="mx-auto max-w-screen-2xl px-5 md:px-10 lg:px-20">
          <div className="grid gap-5 mx-5 md:grid-cols-4 md:gap-12">
            {services.map((each) => (
              <NavLink to={"/services"}>
                <div className="shadow-xl rounded-lg h-[300px] hover:cursor-pointer transform transition duration-300 hover:scale-110">
                {" "}
                <img
                  src={each.image}
                  className="h-4/5"
                  alt="why_mutual_funds"
                  style={{ width: "600px" }}
                ></img>
                <div className="p-2 text-center font-medium flex justify-center items-center content-center h-12">
                  {" "}
                  {each.name}
                </div>
              </div>
              </NavLink>
              
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
