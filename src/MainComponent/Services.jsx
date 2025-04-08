import React from "react";

const Services = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-5 md:px-10 lg:px-20">
        <div className="grid min-h-[620px] w-full grid-cols-6 flex-row pb-10 pt-4 md:py-20 lg:grid-cols-12">
          <div className="col-span-6 flex flex-col justify-center max-lg:order-2 max-lg:mt-10">
            <div className="font-bold text-primary">
              <p className="text-3xl lg:text-6xl text-[#1c6fc1]">Services</p>
            </div>
            <div className="mb-10 mt-4 text-sm md:text-lg shadow-xl p-4 rounded-lg bg-slate-100 text-justify transform transition duration-300 hover:scale-110">
              At{" "}
              <span className="text-[#1c6fc1] font-semibold text-xl">
                ASIAN
              </span>{" "}
              <span className="font-semibold text-xl text-[#e6883e]">
                FEEDERS
              </span>{" "}
              we specialize in providing cutting-edge automation solutions
              tailored to meet the unique needs of your business. Our
              comprehensive range of services helps streamline operations,
              increase efficiency, and enhance productivity. From custom-built
              systems to full integration, we provide end-to-end automation
              services that drive success..
            </div>
          </div>
          <div className="relative col-span-6 mx-auto flex size-84 items-center justify-center max-lg:order-1 lg:w-[700px] lg:h-[420px]">
            <img src={"/Assets/services.png"} alt="TermInsurance" />
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-100 py-10 flex min-h-140">
        <div className="mx-auto max-w-screen-2xl px-5 md:px-10 lg:px-20">
          <div className="flex grid-cols-6 flex-col items-center justify-center gap-14 lg:grid lg:grid-cols-12 lg:gap-20">
            <div className="col-span-6 flex h-full w-full flex-col justify-center items-center md:h-72 md:w-[50rem]">
              <p className="text-center text-2xl font-bold md:text-4xl text-[#e6873c] mb-5 xl:hidden block">
                Vibratory Bowl Feeders
              </p>
              <img
                src={"/Assets/Picture1.jpg"}
                alt="vibratory bowl feeder"
                className="overflow-hidden rounded-2xl border-[1.5px] border-primary drop-shadow-lg transform transition duration-300 hover:scale-110"
              />
            </div>
            <div className="col-span-6 flex flex-col items-center justify-center">
              <p className="text-center text-2xl font-bold md:text-4xl text-[#e6873c] mb-5 hidden xl:block">
                Vibratory Bowl Feeders
              </p>
              <div className="shadow-xl p-5 bg-white rounded-xl text-justify transform transition duration-300 hover:scale-110">
                A vibratory bowl feeder is an essential industrial tool designed
                for the efficient feeding of small to medium-sized parts.
                Utilizing vibratory motion, these feeders can orient, position,
                and transport components seamlessly along a production line,
                ensuring a consistent flow of parts to assembly processes. They
                are widely used in industries such as automotive, electronics,
                and manufacturing, where precision and automation are paramount
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-140 py-10">
        <div className="mx-auto max-w-screen-2xl px-5 md:px-10 lg:px-20">
          <div className="flex grid-cols-6 flex-col items-center justify-center gap-14 lg:grid lg:grid-cols-12 lg:gap-20">
            <div className="col-span-6 flex flex-col items-center justify-center max-lg:order-2">
              <p className="text-center text-2xl font-bold md:text-4xl text-[#e6873c] mb-5 hidden xl:block">
                Linear Feeder
              </p>
              <div className="shadow-xl p-5 rounded-xl text-justify transform transition duration-300 hover:scale-110 bg-slate-100">
                A vibratory linear feeder is a versatile industrial device
                designed to transport and orient parts in a linear path. Using
                vibratory motion, it ensures a smooth and controlled flow of
                components to various processing stations, maintaining the
                efficiency and precision of automated production lines. These
                feeders are commonly employed in industries such as electronics,
                automotive, and packaging, where consistency and reliability are
                crucial
              </div>
            </div>
            <div className="col-span-6 flex h-full w-full flex-col justify-center items-center max-lg:order-1 md:h-72 md:w-[43rem]">
              <p className="text-center text-2xl font-bold md:text-4xl text-[#e6873c] mb-5 xl:hidden block">
                Linear Feeder
              </p>
              <img
                src={"/Assets/liner_feeder.jpg"}
                alt="liner_feeder"
                className="overflow-hidden rounded-2xl border-[1.5px] border-primary drop-shadow-lg transform transition duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-100 py-10 flex min-h-140">
        <div className="mx-auto max-w-screen-2xl px-5 md:px-10 lg:px-20">
          <div className="flex grid-cols-6 flex-col items-center justify-center gap-14 lg:grid lg:grid-cols-12 lg:gap-20">
            <div className="col-span-6 flex h-full w-full flex-col justify-center items-center md:h-72 md:w-[39rem]">
              <p className="text-center text-2xl font-bold md:text-4xl text-[#e6873c] mb-5 xl:hidden block">
                Step Feeder
              </p>
              <img
                src={"/Assets/stepfeeder.jpg"}
                alt="stepfeeder"
                className="overflow-hidden rounded-2xl border-[1.5px] border-primary drop-shadow-lg transform transition duration-300 hover:scale-110"
              />
            </div>
            <div className="col-span-6 flex flex-col items-center justify-center">
              <p className="text-center text-2xl font-bold md:text-4xl text-[#e6873c] mb-5 hidden xl:block">
                Step Feeder
              </p>
              <div className="shadow-xl p-5 bg-white rounded-xl text-justify transform transition duration-300 hover:scale-110">
                A step feeder is a highly efficient and precise device used in
                various automated systems to feed and orient parts. It operates
                by lifting parts step-by-step to an elevated position, where
                they can be sorted and aligned for further processing. This
                method ensures a consistent and controlled flow of components,
                making step feeders ideal for applications in industries like
                manufacturing, packaging, and electronics
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-140 py-10">
        <div className="mx-auto max-w-screen-2xl px-5 md:px-10 lg:px-20">
          <div className="flex grid-cols-6 flex-col items-center justify-center gap-14 lg:grid lg:grid-cols-12 lg:gap-20">
            <div className="col-span-6 flex flex-col items-center justify-center max-lg:order-2">
              <p className="text-center text-2xl font-bold md:text-4xl text-[#e6873c] mb-5 hidden xl:block">
                Automation / Special Purpose Machines
              </p>
              <div className="shadow-xl p-5 rounded-xl text-justify transform transition duration-300 hover:scale-110 bg-slate-100">
                An automation machine is a highly efficient and precise device
                designed to perform tasks with minimal human intervention.
                Utilizing advanced technologies such as robotics, sensors, and
                control systems, these machines can execute repetitive or
                complex processes with consistency and accuracy. They are widely
                employed across various industries, including manufacturing,
                automotive, and electronics, to enhance productivity, reduce
                labor costs, and improve overall operational efficiency.
                Automation machines are integral to modern production lines,
                enabling faster and more reliable output.
              </div>
            </div>
            <div className="col-span-6 flex h-full w-full flex-col justify-center items-center max-lg:order-1 md:h-72 md:w-[43rem]">
              <p className="text-center text-2xl font-bold md:text-4xl text-[#e6873c] mb-5 xl:hidden block">
                Automation / Special Purpose Machines
              </p>
              <img
                src={"/Assets/Automation.jpg"}
                alt="Automation"
                className="overflow-hidden rounded-2xl border-[1.5px] border-primary drop-shadow-lg transform transition duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
