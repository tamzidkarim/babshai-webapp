import React from "react";
import { Navbar } from "../../components/index";

const HomePage = () => {
  return (
    <section className="relative antialiased pb-12 md:pb-0 flex flex-col  w-full min-h-screen">
      <div className="absolute z-0 w-full h-full ">
        <img
          className="object-cover w-full h-full  "
          src="https://images.unsplash.com/photo-1606787947360-4181fe0ab58c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
        <div class="absolute z-0 inset-0 bg-black bg-opacity-40 "></div>
      </div>

      <Navbar />
      <div className="content-padding">
        <div className="relative  z-10">
          <h1 className="mt-28 text-center  md:mt-32 lg:mt-40  md:text-left text-white  px-2 lg:px-0 text-3xl md:text-4xl lg:text-5xl leading-9 lg:leading-relaxed font-bold tracking-normal lg:tracking-wide">
            Find the perfect deal <br /> among thousands of vendors
          </h1>
        </div>
        <div className="flex relative z-10 flex-col md:flex-row mt-8 md:mt-20 justify-center items-center md:space-x-6 xl:space-x-16   space-y-6 md:space-y-0 ">
          {/* 1st row */}
          <div className=" border-t-8 lg:flex lg:justify-between lg:flex-col lg:p-8  border-opacity-70 border-l-8 p-7 bg-extra-light bg-opacity-80 bg-clip-padding w-4/5 md:w-3/6  xl:w-1/4 lg:h-72 xl:h-80  h-80  rounded-xl border-light-theme">
            <h1 className="text-xl font-semibold lg:font-bold  leading-7 tracking-wide ">
              Submit your product requirements and get proposals. Find the best
              deals now
            </h1>
            <div className="pt-16 md:pt-4 text-center">
              <button className="bg-light-theme hover:bg-regular-theme rounded-md px-6  md:px-4 py-2 lg:py-3  md:py-1 text-white tracking-wide leading-relaxed ">
                Post a requirement
              </button>
            </div>
          </div>
          <div className=" border-t-8 lg:flex lg:justify-between lg:flex-col lg:p-8  border-opacity-70 border-l-8 p-7 bg-extra-light bg-opacity-80 bg-clip-padding w-4/5 md:w-3/6  lg:h-72 xl:w-1/4  h-80  xl:h-80 rounded-xl border-light-theme">
            <h1 className="text-xl font-semibold lg:font-bold leading-7 tracking-wide ">
              Submit your product requirements and get proposals. Find the best
              deals now
            </h1>
            <div className="pt-16 md:pt-4 text-center">
              <button className="bg-light-theme hover:bg-regular-theme rounded-md px-6 md:px-4 py-2 lg:py-3 md:py-1 text-white tracking-wide leading-relaxed ">
                Post a requirement
              </button>
            </div>
          </div>
          <div className=" border-t-8 lg:flex lg:justify-between lg:flex-col lg:p-8  border-opacity-70 border-l-8 p-7 bg-extra-light bg-opacity-80 bg-clip-padding w-4/5 md:w-3/6  lg:h-72 xl:w-1/4 xl:h-80  h-80  rounded-xl border-light-theme">
            <h1 className="text-xl font-semibold lg:font-bold leading-7 tracking-wide ">
              Submit your product requirements and get proposals. Find the best
              deals now
            </h1>
            <div className="pt-16 md:pt-4 text-center">
              <button className="bg-light-theme px-6 hover:bg-regular-theme rounded-md md:px-4 py-2 lg:py-3 md:py-1 text-white tracking-wide leading-relaxed ">
                Post a requirement
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
