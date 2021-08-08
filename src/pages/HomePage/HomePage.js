import React from "react";
import { Navbar } from "../../components/index";
import Video from "../../assets/video.mp4";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="relative antialiased pb-12 md:pb-0 flex flex-col  w-full min-h-screen">
      <div
        className="absolute z-0 w-full h-full lg:min-h-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80')`,
          backgroundSize: "cover",
        }}
      >
        {/* <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video> */}
        <div class="absolute z-0 inset-0 bg-black bg-opacity-40 "></div>
      </div>

      <Navbar />
      <div className="container md:px-8 lg:px-16 mx-auto">
        <div className="relative  z-10">
          <h1 className="font-poppins my-28 text-center  md:mt-32  md:text-left text-white  px-2  lg:px-0 text-3xl md:text-4xl lg:text-5xl leading-9 lg:leading-relaxed font-bold tracking-normal lg:tracking-wide">
            Best quality raw materials and garments manufacturing sourcing
            solution for apparel industry
          </h1>
        </div>
        <div className="flex relative z-10 flex-col md:flex-row mt-8 md:mt-20 justify-center lg:justify-between items-center md:space-x-6 xl:space-x-0   space-y-6 md:space-y-0 ">
          {/* 1st row */}
          <div className=" border-t-8 lg:flex lg:justify-between lg:flex-col lg:p-8  border-opacity-70 border-l-8 p-7 bg-extra-light bg-opacity-80 bg-clip-padding w-9/12 md:w-3/6  xl:w-96 lg:h-72 xl:h-80  h-64   border-light-theme">
            <h1 className="text-xl font-semibold lg:font-bold  leading-7 tracking-wide ">
              Submit your product requirements and get proposals from hundreds
              of certified suppliers all over the world
            </h1>
            <div className="pt-16 md:pt-4 text-center">
              <Link to="/post">
                <button className="bg-light-theme hover:bg-regular-theme rounded-md px-6  md:px-4 py-2 lg:py-3  md:py-1 text-white tracking-wide leading-relaxed ">
                  Post a requirement
                </button>
              </Link>
            </div>
          </div>
          <div className=" border-t-8 lg:flex lg:justify-between lg:flex-col lg:p-8  border-opacity-70 border-l-8 p-7 bg-extra-light bg-opacity-80 bg-clip-padding w-9/12 md:w-3/6  lg:h-72  xl:w-96  h-64  xl:h-80  border-light-theme">
            <h1 className="text-xl font-semibold lg:font-bold leading-7 tracking-wide ">
              Browse among thousands of listing from our buyers all over the
              world
            </h1>
            <div className="pt-16 md:pt-4 text-center">
              <Link to="/products">
                <button className="bg-light-theme hover:bg-regular-theme rounded-md px-6 md:px-4 py-2 lg:py-3 md:py-1 text-white tracking-wide leading-relaxed ">
                  Browse Posts
                </button>
              </Link>
            </div>
          </div>
          <div className=" border-t-8 lg:flex lg:justify-between lg:flex-col lg:p-8  border-opacity-70 border-l-8 p-7 bg-extra-light bg-opacity-80 bg-clip-padding w-9/12 md:w-3/6  lg:h-72  xl:w-96 xl:h-80  h-64   border-light-theme">
            <h1 className="text-xl font-semibold lg:font-bold leading-7 tracking-wide ">
              Get advices from our experienced consultant (Oeko-tex®, GOTS)
            </h1>
            <div className="pt-16 md:pt-4 text-center">
              <Link to="/about">
                <button className="bg-light-theme px-6 hover:bg-regular-theme rounded-md md:px-4 py-2 lg:py-3 md:py-1 text-white tracking-wide leading-relaxed ">
                  Acquire Consultancy
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
