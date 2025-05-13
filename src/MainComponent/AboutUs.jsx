const AboutUs = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-5 md:px-10 lg:px-20">
      <div className="grid min-h-[620px] w-full grid-cols-6 flex-row pb-10 pt-4 md:py-20 lg:grid-cols-12">
        <div className="col-span-6 flex flex-col justify-center max-lg:order-2 max-lg:mt-10">
          <div className="font-bold text-primary">
            <p className="text-3xl lg:text-6xl text-[#1c6fc1]">About Us</p>
          </div>
          <div className="mb-10 mt-4 text-sm md:text-lg shadow-xl p-4 rounded-lg bg-slate-100 text-justify transform transition duration-300 hover:scale-110">
            Established in 2024,{" "}
            <span className="text-[#1c6fc1] font-semibold text-xl">ASIAN</span>{" "}
            <span className="font-semibold text-xl text-[#e6883e]">
              FEEDERS
            </span>{" "}
            specialises in designing and manufacturing high-quality vibratory
            bowl feeders, special-purpose machines, and automation solutions.
            Our dedicated team of experts is committed to innovation and
            excellence, ensuring that our products meet the highest performance
            and reliability standards. We strive to provide tailored solutions
            that enhance efficiency and productivity for our clients, building
            long-lasting relationships based on trust and mutual success.
          </div>
        </div>
        <div className="relative col-span-6 mx-auto flex size-84 items-center justify-center max-lg:order-1 lg:w-[700px] lg:h-[420px]">
          <img src={"/Assets/about-us.png"} alt="about us" />
        </div>
      </div>
      <div className="w-full rounded-lg bg-slate-200 mb-4">
        <div className="text-2xl font-semibold p-6 flex justify-center items-center w-full text-[#e6873c]">Our Happy Customers</div>
        <div className="p-5 flex flex-col gap-10 md:flex-row items-center justify-evenly">
          <div>
            <img
              src={"/Assets/leo-taps.png"}
              alt="about us"
              className="h-56 w-56"
            />
          </div>
          <div>
            <img
              src={"/Assets/logo.png"}
              alt="about us"
              className="h-56 w-56"
            />
          </div>
          <div>
            <img
              src={"/Assets/TITAN.NS_BIG-87a80b37.png"}
              alt="about us"
              className="h-56 w-56"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
