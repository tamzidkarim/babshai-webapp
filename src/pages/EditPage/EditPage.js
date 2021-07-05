import React from "react";
// for testing

import { Navbar, Footer, InputField } from "../../components/index";

const EditPage = () => {
  return (
    <div className="relative antialiased">
      <div
        className="absolute top-0 z-0 w-full bg-light-theme "
        style={{ height: "450px" }}
      ></div>
      <Navbar />

      <section className="antialiased relative z-10 w-full    flex flex-col md:flex-row  justify-center md:justify-start max-w-2xl lg:max-w-4xl xl:container mx-auto items-center   ">
        <img
          className="w-40 h-40 mt-20 rounded-full relative"
          src="https://www.pinkvilla.com/files/styles/contentpreview/public/iron-man-star-robert-downey-jr-best-film.jpg?itok=QFDPnWbO"
          alt="tony"
        />

        <div className="py-3 md:py-0 md:pt-20 px-4 flex flex-col justify-center items-center ">
          <h1 className="text-xl font-semibold leading-relaxed text-white tracking-wide">
            Tony stack
          </h1>
          <p className="text-lg font-semibold tracking-wide text-white">
            Dhaka, Bangladesh
          </p>
        </div>
      </section>

      {/* details */}
      <section className="mt-16 md:mt-36 mb-20">
        <div className="flex flex-row justify-center lg:justify-start items-center container py-4 px-4 lg:px-16 xl:px-0  mx-auto space-x-4 md:space-x-6 lg:space-x-8     ">
          <h1 className="text-md md:text-xl  font-semibold leading-relaxed    ">
            Your requirements
          </h1>
          <h1 className="text-md md:text-xl  font-semibold leading-relaxed py-2 ">
            Sent proposals
          </h1>
          <h1 className="text-md md:text-xl  font-semibold leading-relaxed border-b-2 py-2 border-regular-theme ">
            Edit profile
          </h1>
        </div>
        {/* input */}
        <InputField />
        
      </section>

      <Footer />
    </div>
  );
};

export default EditPage;
